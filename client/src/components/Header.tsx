import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import tntHorizontalLogo from "/brand/horizontal_1A_light_FIX_transparent.png";
import tntIconLogo from "/brand/icon_1A_128.png";

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            {/* Mobile: Icon logo */}
            <img 
              src={tntIconLogo} 
              className="h-10 w-10 block sm:hidden" 
              alt="TNT Fitness" 
              data-testid="icon-logo" 
            />
            {/* Desktop: Horizontal logo */}
            <img 
              src={tntHorizontalLogo} 
              className="h-10 hidden sm:block" 
              alt="TNT Fitness" 
              data-testid="horizontal-logo" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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
            <Button 
              asChild
              variant="default" 
              className="bg-gold hover:bg-gold/90 text-navy font-bold"
              data-testid="button-get-started"
            >
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </nav>

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
              className="w-[300px] bg-navy border-l border-white/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <img 
                    src={tntIconLogo} 
                    className="h-10 w-10" 
                    alt="TNT Fitness" 
                  />
                  <span className="font-heading font-extrabold text-xl text-white">
                    TNT FITNESS
                  </span>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors font-medium ${
                      location === item.href ? "text-gold bg-white/5" : ""
                    }`}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button 
                  onClick={() => setIsOpen(false)}
                  variant="default" 
                  className="w-full bg-gold hover:bg-gold/90 text-navy font-bold mt-4"
                  data-testid="button-mobile-get-started"
                  asChild
                >
                  <Link href="/contact">
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