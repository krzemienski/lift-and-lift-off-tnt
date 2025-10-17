import { useEffect, useState } from "react";
import { Check, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessAnimationProps {
  isSuccess: boolean;
  message?: string;
  className?: string;
}

export default function SuccessAnimation({ 
  isSuccess, 
  message = "Success!", 
  className 
}: SuccessAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  if (!showAnimation) return null;

  return (
    <div className={cn(
      "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
      className
    )}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
        <div className="relative bg-background border-2 border-primary rounded-full p-8 shadow-2xl animate-fade-in-scale">
          <CheckCircle className="w-24 h-24 text-primary animate-gold-gradient" />
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{
                animation: "successCheckmark 0.6s ease-out forwards",
                animationDelay: "0.2s",
              }}
            />
          </svg>
        </div>
      </div>
      <p className="text-center mt-4 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        {message}
      </p>
    </div>
  );
}

export function InlineSuccessAnimation({ 
  isSuccess, 
  message = "Success!", 
  className 
}: SuccessAnimationProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowAnimation(true);
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  if (!showAnimation) return null;

  return (
    <div className={cn(
      "flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-lg animate-fade-in-scale",
      className
    )}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
        <CheckCircle className="w-6 h-6 text-primary relative z-10" />
      </div>
      <p className="font-medium text-primary">{message}</p>
    </div>
  );
}