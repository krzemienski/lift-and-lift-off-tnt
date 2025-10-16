import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoCarousel from "@/components/VideoCarousel";
import { useToast } from "@/hooks/use-toast";
import { Activity, Target, Shield, Dumbbell, Flame } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { toast } = useToast();

  const programs = [
    {
      icon: Activity,
      title: "Calisthenics",
      description: "Control your body, master movement.",
      href: "/programs/calisthenics",
    },
    {
      icon: Target,
      title: "Flexibility",
      description: "Mobility work to move pain-free.",
      href: "/programs/flexibility",
    },
    {
      icon: Shield,
      title: "Boxing",
      description: "Conditioning + technique for ring stamina.",
      href: "/programs/boxing",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Progressive overload, durable gains.",
      href: "/programs/strength",
    },
    {
      icon: Flame,
      title: "Fat Loss",
      description: "Nutrition guidance + metabolic conditioning.",
      href: "/programs/fat-loss",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Video Carousel Background */}
      <VideoCarousel />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white z-10">
          <h1 className="mb-6 text-5xl font-display font-extrabold leading-tight md:text-7xl text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            TODAY, NOT TOMORROW
          </h1>
          <p className="mb-10 text-lg md:text-xl text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Immediate, focused coaching across <strong>boxing</strong>, <strong>strength</strong>, <strong>calisthenics</strong>, <strong>flexibility</strong>, and <strong>fat loss</strong>—engineered for accountability and results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="text-base bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold"
              data-testid="button-schedule-assessment"
              asChild
            >
              <Link href="/assessment">Schedule Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-view-programs"
              asChild
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-24 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Training Programs
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Choose a proven path. Each track pairs technique with conditioning and smart recovery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover-elevate">
                <Link href={program.href}>
                  <CardHeader>
                    <program.icon className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild data-testid="button-all-programs">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coach Rico Section */}
      <section className="relative py-24 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                Coach Rico
              </h2>
              
              <div className="space-y-4 text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Education</h3>
                  <p>Equinox Fitness Training Institute</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Certifications</h3>
                  <p>ISSA – International Sports Sciences Association</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-2">Revelation</h3>
                  <p>My journey started with asthma and early setbacks. Fitness became the discipline that fueled my recovery and performance.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-2">Evolution</h3>
                  <p>In 2019 I suffered severe head and spinal injuries and spent two years rehabbing. In 2024 I committed to mastering human performance, earning PT and nutrition credentials.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-2">Philosophy</h3>
                  <p className="font-semibold">Fitness is wellness for mind, spirit, and body.</p>
                  <p className="mt-2">Fitness served and saved me—now it's your turn.</p>
                </div>
              </div>

              <Button size="lg" className="mt-8 bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold" asChild>
                <Link href="/assessment" data-testid="button-book-consult">Book a Free Consult</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-display font-bold text-primary mb-4">TNT</div>
                  <p className="text-white/80 text-lg">Today Not Tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-24 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Client Results
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Real transformations from real people who chose today, not tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "TNT Fitness changed my life. I went from struggling with basic movements to completing my first muscle-up in just 3 months.",
                name: "Marcus J.",
                program: "Calisthenics"
              },
              {
                quote: "Coach Rico's approach to strength training is methodical and safe. I've gained 15lbs of muscle without a single injury.",
                name: "Sarah K.",
                program: "Strength Training"
              },
              {
                quote: "The boxing program improved my cardio, coordination, and confidence. Best decision I've ever made.",
                name: "David L.",
                program: "Boxing"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-sm">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.program}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild data-testid="button-all-results">
              <Link href="/results">View All Results</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="relative py-24 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Follow @tntfitness
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Daily motivation, workout tips, and client transformations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-card rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-muted-foreground">Instagram Post {i}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild data-testid="button-follow-instagram">
              <Link href="/instagram">View Instagram</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-black/70 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary">TNT FITNESS</h3>
              <p className="text-white/60">Today, Not Tomorrow</p>
            </div>
            
            <nav className="flex flex-wrap gap-6 text-white/80">
              <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
              <Link href="/trainer" className="hover:text-primary transition-colors">Trainer</Link>
              <Link href="/assessment" className="hover:text-primary transition-colors">Assessment</Link>
              <Link href="/results" className="hover:text-primary transition-colors">Results</Link>
              <Link href="/instagram" className="hover:text-primary transition-colors">Instagram</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>© 2024 TNT Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}