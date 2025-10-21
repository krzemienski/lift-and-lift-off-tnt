import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Instagram, Mail, Phone, MapPin, Send, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const navigation = {
  programs: [
    { name: "Calisthenics", href: "/programs/calisthenics" },
    { name: "Strength Training", href: "/programs/strength" },
    { name: "Fat Loss", href: "/programs/fat-loss" },
    { name: "Boxing", href: "/programs/boxing" },
    { name: "Flexibility", href: "/programs/flexibility" },
  ],
  company: [
    { name: "About Coach Rico", href: "/trainer" },
    { name: "Success Stories", href: "/results" },
    { name: "Free Assessment", href: "/assessment" },
    { name: "Instagram Feed", href: "/instagram" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/tntfitness" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
];

export default function FooterBlock() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Welcome to the TNT Fitness family. Check your email for a special offer!",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0B2545]/80 to-black/90 backdrop-blur-md text-white border-t border-[#D4A017]/20">
      {/* Newsletter Section */}
      <div className="border-b border-[#D4A017]/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30">
              Stay Updated
            </Badge>
            <h3 className="text-2xl font-bold">Get Fitness Tips & Special Offers</h3>
            <p className="text-gray-300">
              Join our newsletter for weekly workout tips, nutrition advice, and exclusive member discounts
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 placeholder:text-gray-400 text-white"
                data-testid="input-newsletter"
              />
              <Button 
                type="submit"
                className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold"
                disabled={isSubscribing}
                data-testid="button-newsletter-submit"
              >
                {isSubscribing ? (
                  "Subscribing..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <img 
                  src="/brand/tnt_icon_clean.png" 
                  alt="TNT Fitness"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#D4A017]">TNT FITNESS</h3>
                  <p className="text-xs text-gray-400">Today, Not Tomorrow</p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Transform your body and mind with NYC's premier personal training experience. 
              Real results, guaranteed.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">Programs</h4>
            <ul className="space-y-2">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-[#D4A017] transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">Company</h4>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-[#D4A017] transition-colors"
                    data-testid={`link-footer-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4A017]">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#D4A017] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">(555) 123-4567</p>
                  <p className="text-xs text-gray-400">Mon-Fri 6AM-8PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#D4A017] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">coach@tntfitness.com</p>
                  <p className="text-xs text-gray-400">24/7 response</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#D4A017] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Manhattan, NYC</p>
                  <p className="text-xs text-gray-400">Multiple locations</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4A017]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 TNT Fitness. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.support.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-[#D4A017] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}