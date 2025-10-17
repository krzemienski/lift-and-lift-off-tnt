import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  showIcon?: boolean;
}

export function SkeletonCard({ className, showIcon = true }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card overflow-hidden", className)}>
      <div className="p-6 space-y-4">
        {showIcon && (
          <div className="h-10 w-10 rounded-md skeleton-shimmer" />
        )}
        <div className="space-y-2">
          <div className="h-6 w-3/4 rounded-md skeleton-shimmer" />
          <div className="h-4 w-full rounded-md skeleton-shimmer" />
          <div className="h-4 w-5/6 rounded-md skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonProgramCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-video skeleton-shimmer" />
        <div className="p-8 md:p-12 space-y-6 bg-card">
          <div className="h-8 w-1/2 rounded-md skeleton-shimmer" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded-md skeleton-shimmer" />
            <div className="h-4 w-full rounded-md skeleton-shimmer" />
            <div className="h-4 w-3/4 rounded-md skeleton-shimmer" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="h-3 w-16 rounded-md skeleton-shimmer mb-2" />
              <div className="h-5 w-24 rounded-md skeleton-shimmer" />
            </div>
            <div>
              <div className="h-3 w-20 rounded-md skeleton-shimmer mb-2" />
              <div className="h-5 w-28 rounded-md skeleton-shimmer" />
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full skeleton-shimmer mt-2 flex-shrink-0" />
                <div className="h-4 w-full rounded-md skeleton-shimmer" />
              </div>
            ))}
          </div>
          <div className="h-11 w-full rounded-md skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonInstagramGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg skeleton-shimmer animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export function SkeletonText({ 
  lines = 3, 
  className 
}: { 
  lines?: number; 
  className?: string 
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 rounded-md skeleton-shimmer",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}