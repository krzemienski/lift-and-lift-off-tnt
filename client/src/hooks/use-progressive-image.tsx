import { useState, useEffect } from "react";

export function useProgressiveImage(src: string) {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSourceLoaded(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [src]);

  return { sourceLoaded, isLoading };
}

export function ProgressiveImage({
  src,
  alt,
  className = "",
  placeholderSrc,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  [key: string]: any;
}) {
  const { sourceLoaded, isLoading } = useProgressiveImage(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholderSrc && isLoading && (
        <img
          src={placeholderSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-105"
          {...props}
        />
      )}
      <img
        src={sourceLoaded || placeholderSrc || src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoading && !placeholderSrc ? "filter blur-md scale-105" : ""
        } ${!isLoading ? "filter-none scale-100" : ""}`}
        {...props}
      />
      {isLoading && !placeholderSrc && (
        <div className="absolute inset-0 skeleton-shimmer" />
      )}
    </div>
  );
}