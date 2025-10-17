import { useState, useEffect, MouseEvent } from "react";

export function useRipple() {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timeout = setTimeout(() => {
        setRipples([]);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [ripples]);

  const createRipple = (event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRipples([...ripples, { x, y, id: Date.now() }]);
  };

  return { ripples, createRipple };
}

export function RippleButton({
  children,
  onClick,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  [key: string]: any;
}) {
  const { ripples, createRipple } = useRipple();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onClick?.(e);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "100px",
            height: "100px",
          }}
        />
      ))}
      {children}
    </button>
  );
}