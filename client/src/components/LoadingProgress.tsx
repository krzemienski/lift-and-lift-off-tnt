import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingProgressProps {
  isLoading: boolean;
  className?: string;
}

export default function LoadingProgress({ isLoading, className }: LoadingProgressProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 30;
        });
      }, 500);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 z-[9999] overflow-hidden",
        className
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-yellow-400 to-primary transition-all duration-300 ease-out gold-gradient-animate"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px hsl(var(--primary) / 0.7)",
        }}
      />
    </div>
  );
}