import { useEffect, useState } from "react";
import { Menu, X, Home, User, Dumbbell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import kettlebellIcon from "@assets/icon_kettlebell.svg";

const SCROLL_THRESHOLD_PERCENTAGE = 0.7;

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * SCROLL_THRESHOLD_PERCENTAGE;
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="bg-background/95 backdrop-blur-md border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-2 py-3">
              <div className="flex items-center gap-2">
                <img src={kettlebellIcon} className="h-5 w-5" alt="TNT Fitness" data-testid="icon-nav-logo" />
                <span className="font-heading font-bold text-lg" data-testid="text-nav-title">TNT Fitness</span>
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
