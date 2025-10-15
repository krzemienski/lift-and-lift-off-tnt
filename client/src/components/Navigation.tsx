import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/trainer", label: "Trainer" },
    { href: "/assessment", label: "Assessment" },
    { href: "/results", label: "Results" },
    { href: "/instagram", label: "Instagram" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-primary">TNT</span>
              <span className="hidden sm:block text-sm text-white/80">FITNESS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-white/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button
              className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold ml-4"
              size="sm"
              asChild
            >
              <Link href="/assessment" data-testid="button-nav-get-started">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location === link.href
                      ? "text-primary bg-primary/10"
                      : "text-white/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="pt-2">
              <Button
                className="w-full bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold"
                size="sm"
                asChild
              >
                <Link href="/assessment" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}