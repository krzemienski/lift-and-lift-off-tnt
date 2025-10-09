import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
}: HeroSectionProps) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center px-6">
      <div className="max-w-5xl text-center text-white">
        <h1 className="mb-6 text-5xl font-display font-extrabold leading-tight md:text-7xl">
          {title}
        </h1>
        <p className="mb-10 text-lg md:text-xl text-white/90">
          {subtitle}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            variant="default"
            onClick={onPrimaryCTA}
            className="text-base"
            data-testid="button-primary-cta"
          >
            {primaryCTA}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onSecondaryCTA}
            className="text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            data-testid="button-secondary-cta"
          >
            {secondaryCTA}
          </Button>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      )}
    </section>
  );
}
