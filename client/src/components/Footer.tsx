import { Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FooterProps {
  instagramUrl: string;
  location: string;
  email: string;
}

export default function Footer({ instagramUrl, location, email }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="border-t bg-black/45 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Lillian Rolle</h3>
            <p className="text-muted-foreground mb-4">
              Transform your body, elevate your life through expert personal training.
            </p>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="button-footer-instagram"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#specialties" className="hover:text-foreground transition-colors">
                  Training Specialties
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Motivated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get fitness tips and updates delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-newsletter-submit">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Lillian Rolle Training. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              {email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
