import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import tntIcon from "@assets/generated_images/TNT_hexagon_mascot_logo_49631fca.png";
import tntHorizontal from "@assets/generated_images/TNT_horizontal_header_logo_c1572bb9.png";

const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/trainer", label: "Trainer" },
  { href: "/assessment", label: "Assessment" },
  { href: "/results", label: "Results" },
  { href: "/instagram", label: "Instagram" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center justify-start" data-testid="link-logo">
            {/* Mobile: Icon only */}
            <img 
              src={tntIcon} 
              className="h-10 w-10 object-contain block md:hidden" 
              alt="TNT Fitness" 
              data-testid="logo-icon" 
            />
            {/* Desktop: Horizontal logo */}
            <img 
              src={tntHorizontal} 
              className="h-12 w-auto object-contain hidden md:block" 
              alt="TNT Fitness" 
              data-testid="logo-horizontal" 
            />
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-white/90 hover:text-white transition-colors font-medium ${
                  location === item.href ? "text-gold" : ""
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center justify-end">
            <Button 
              asChild
              variant="default" 
              className="bg-gold hover:bg-gold/90 text-navy font-bold btn-scale gold-gradient-animate"
              data-testid="button-get-started"
            >
              <Link href="/assessment">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] bg-navy border-l border-white/10 menu-slide-in"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img 
                    src={tntIcon} 
                    className="h-12 w-12 object-contain" 
                    alt="TNT Fitness" 
                  />
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-white/90 hover:text-white hover:bg-[#0B2545]/10 rounded-md transition-all duration-300 font-medium animate-fade-in-up ${
                      location === item.href ? "text-gold bg-[#0B2545]/5" : ""
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => setIsOpen(false)}
                  variant="default" 
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-bold mt-4 btn-scale gold-gradient-animate animate-fade-in-up"
                  style={{ animationDelay: `${navItems.length * 50}ms` }}
                  data-testid="button-mobile-get-started"
                  asChild
                >
                  <Link href="/assessment">
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}