import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Target, Shield, Dumbbell, Flame, ArrowRight } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import { Link } from "wouter";

const programs = [
  {
    icon: Activity,
    title: "Calisthenics",
    description: "Control your body, master movement.",
    fullDescription: "Master bodyweight training with progressive exercises that build functional strength, coordination, and control without equipment. Learn advanced movements like muscle-ups, handstands, and human flags.",
    href: "/programs/calisthenics",
    benefits: ["Build functional strength", "Improve body control", "No equipment needed", "Progressive skill development"],
    duration: "12 weeks",
    frequency: "4x per week"
  },
  {
    icon: Target,
    title: "Flexibility",
    description: "Mobility work to move pain-free.",
    fullDescription: "Improve your range of motion, prevent injuries, and enhance performance through targeted mobility and stretching techniques. Incorporate yoga, dynamic stretching, and myofascial release.",
    href: "/programs/flexibility",
    benefits: ["Increase range of motion", "Reduce injury risk", "Improve posture", "Enhance recovery"],
    duration: "8 weeks",
    frequency: "5x per week"
  },
  {
    icon: Shield,
    title: "Boxing",
    description: "Conditioning + technique for ring stamina.",
    fullDescription: "High-intensity boxing workouts that combine cardio, coordination, and stress relief while building mental toughness. Learn proper form, combinations, and defensive techniques.",
    href: "/programs/boxing",
    benefits: ["Elite cardio conditioning", "Stress relief", "Self-defense skills", "Mental toughness"],
    duration: "10 weeks",
    frequency: "3x per week"
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Progressive overload, durable gains.",
    fullDescription: "Progressive resistance programs designed to build muscle, increase power, and transform your physique effectively. Focus on compound movements and proper technique.",
    href: "/programs/strength",
    benefits: ["Build lean muscle", "Increase metabolism", "Improve bone density", "Boost confidence"],
    duration: "12 weeks",
    frequency: "4x per week"
  },
  {
    icon: Flame,
    title: "Fat Loss",
    description: "Nutrition guidance + metabolic conditioning.",
    fullDescription: "Science-based fat burning strategies combining HIIT, strength training, and nutrition coaching for sustainable results. Transform your body composition while maintaining muscle mass.",
    href: "/programs/fat-loss",
    benefits: ["Sustainable fat loss", "Preserve muscle", "Nutrition education", "Lifestyle transformation"],
    duration: "16 weeks",
    frequency: "5x per week"
  }
];

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Video Carousel Background */}
      <VideoCarousel />

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Training Programs
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Five specialized programs designed to transform your body and mind. Each program is crafted with proven methodologies and personalized to your goals.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-24 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <CardHeader className="p-8 md:p-12">
                    <div className="flex items-start gap-4 mb-4">
                      <program.icon className="h-12 w-12 text-primary flex-shrink-0" />
                      <div>
                        <CardTitle className="text-3xl mb-2">{program.title}</CardTitle>
                        <CardDescription className="text-lg">{program.description}</CardDescription>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{program.fullDescription}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Frequency</p>
                        <p className="font-semibold">{program.frequency}</p>
                      </div>
                    </div>
                    <Button className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold" asChild>
                      <Link href={program.href} data-testid={`button-view-${program.title.toLowerCase()}`}>
                        View Program <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                  <CardContent className="p-8 md:p-12 bg-muted/30">
                    <h3 className="font-semibold text-lg mb-4">Program Benefits</h3>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-black/60 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Take the first step today. Schedule your assessment and let's create a personalized plan for your transformation.
          </p>
          <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold text-base" asChild>
            <Link href="/assessment" data-testid="button-schedule-assessment-programs">
              Schedule Your Assessment
            </Link>
          </Button>
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