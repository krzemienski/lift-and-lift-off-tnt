import { useEffect, useRef, useState, RefObject, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<HTMLElement>, boolean] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsIntersecting(intersecting);
        
        if (intersecting && triggerOnce) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, hasTriggered]);

  return [ref, isIntersecting || hasTriggered];
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-scale" | "slide-in-right";
  delay?: number;
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as any}
      className={cn(
        "transition-all duration-700",
        isVisible ? `animate-${animation} opacity-100` : "opacity-0 translate-y-8",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}