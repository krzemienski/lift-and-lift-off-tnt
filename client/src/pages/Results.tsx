import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Trophy, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";
import VideoCarousel from "@/components/VideoCarousel";

const testimonials = [
  {
    name: "Marcus Johnson",
    program: "Calisthenics",
    duration: "3 months",
    quote: "TNT Fitness changed my life. I went from struggling with basic movements to completing my first muscle-up. Coach Rico's progressive approach made the impossible possible.",
    results: ["First muscle-up", "Lost 20 lbs", "Improved flexibility"],
    rating: 5,
    featured: true
  },
  {
    name: "Sarah Kim",
    program: "Strength Training",
    duration: "4 months",
    quote: "Coach Rico's approach to strength training is methodical and safe. I've gained 15lbs of muscle without a single injury. The form corrections alone were worth everything.",
    results: ["Gained 15 lbs muscle", "Doubled strength", "Perfect form"],
    rating: 5,
    featured: true
  },
  {
    name: "David Lee",
    program: "Boxing",
    duration: "2 months",
    quote: "The boxing program improved my cardio, coordination, and confidence. Best decision I've ever made. I feel like a completely different person.",
    results: ["Elite cardio", "Lost 18 lbs", "Stress relief"],
    rating: 5,
    featured: true
  },
  {
    name: "Maria Rodriguez",
    program: "Fat Loss",
    duration: "4 months",
    quote: "I lost 35 pounds and completely transformed my relationship with food. Coach Rico taught me sustainable habits that I'll use for life.",
    results: ["Lost 35 lbs", "Kept it off", "Lifestyle change"],
    rating: 5
  },
  {
    name: "James Chen",
    program: "Flexibility",
    duration: "6 weeks",
    quote: "Years of desk work had destroyed my mobility. Now I can touch my toes, my back pain is gone, and I move like I'm 20 again.",
    results: ["No more pain", "Full mobility", "Better posture"],
    rating: 5
  },
  {
    name: "Ashley Williams",
    program: "Calisthenics",
    duration: "6 months",
    quote: "From zero pull-ups to handstand push-ups. Coach Rico believed in me when I didn't believe in myself.",
    results: ["10+ pull-ups", "Handstands", "Core strength"],
    rating: 5
  },
  {
    name: "Robert Martinez",
    program: "Strength Training",
    duration: "3 months",
    quote: "At 45, I'm stronger than I was at 25. Coach Rico's expertise in form and programming is unmatched.",
    results: ["PR every lift", "No injuries", "Feel younger"],
    rating: 5
  },
  {
    name: "Emma Thompson",
    program: "Boxing",
    duration: "3 months",
    quote: "Boxing with Coach Rico is therapy and fitness rolled into one. I've never felt more empowered.",
    results: ["Confident", "Strong", "Stress-free"],
    rating: 5
  },
  {
    name: "Michael Davis",
    program: "Fat Loss",
    duration: "5 months",
    quote: "50 pounds down and counting. Coach Rico's nutrition guidance was the missing piece I needed.",
    results: ["Lost 50 lbs", "More energy", "Better sleep"],
    rating: 5
  }
];

const stats = [
  { icon: Users, label: "Clients Transformed", value: "750+" },
  { icon: Trophy, label: "Success Rate", value: "95%" },
  { icon: TrendingUp, label: "Average Results", value: "3 Months" },
  { icon: Star, label: "5-Star Reviews", value: "500+" }
];

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* Video Carousel Background */}
      <VideoCarousel />

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Consistency Compounds
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            See what clients achieved in 8–12 weeks.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 bg-black/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 mt-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="relative py-24 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Featured Transformations
            </h2>
            <p className="text-lg text-white/80" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              These clients chose to start today, not tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="mb-4">
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </blockquote>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.program} • {testimonial.duration}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Results:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {testimonial.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              More Success Stories
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter(t => !t.featured).map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <blockquote className="mb-4">
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </blockquote>
                    
                    <div className="mb-3">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.program} • {testimonial.duration}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {result}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-black/60 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Your Transformation Starts Today
          </h2>
          <p className="text-lg text-white/90 mb-8" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Join hundreds of others who chose to start today, not tomorrow. Your success story is waiting to be written.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold text-base" asChild>
              <Link href="/assessment" data-testid="button-start-transformation">
                Start Your Transformation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/programs" data-testid="button-view-programs-results">
                View Programs
              </Link>
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