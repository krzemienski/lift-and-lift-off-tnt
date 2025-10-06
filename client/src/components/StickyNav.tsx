import { useEffect, useState } from "react";
import { Menu, X, Home, User, Dumbbell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.7;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-background/95 backdrop-blur-md border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" data-testid="icon-nav-logo" />
                <span className="font-semibold text-lg" data-testid="text-nav-title">Quick Navigation</span>
              </div>
              
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="button-nav-toggle"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <nav className="pb-3">
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={scrollToTop}
                      className="gap-2"
                      data-testid="button-nav-home"
                    >
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("about")}
                      className="gap-2"
                      data-testid="button-nav-about"
                    >
                      <User className="h-4 w-4" />
                      <span>About Me</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("specialties")}
                      className="gap-2"
                      data-testid="button-nav-specialties"
                    >
                      <Dumbbell className="h-4 w-4" />
                      <span>Specialties</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection("contact")}
                      className="gap-2"
                      data-testid="button-nav-contact"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact</span>
                    </Button>
                  </li>
                </ul>
              </nav>
            </CollapsibleContent>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}
