import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Calendar, Users } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function Boxing() {
  const phases = [
    {
      week: "Weeks 1-3",
      title: "Fundamentals",
      focus: "Master basic stance, footwork, and punching technique",
      skills: ["Jab & Cross", "Basic footwork", "Defensive stance", "Shadow boxing"]
    },
    {
      week: "Weeks 4-7",
      title: "Combinations & Defense",
      focus: "Build complex combinations and defensive movements",
      skills: ["Hook & Uppercut", "Slip & Roll", "3-4 punch combos", "Heavy bag work"]
    },
    {
      week: "Weeks 8-10",
      title: "Ring Ready",
      focus: "Advanced techniques and conditioning for real performance",
      skills: ["Advanced combos", "Counter punching", "Mitt work", "Sparring drills"]
    }
  ];

  return (
    <div className="min-h-screen">
      <VideoCarousel />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              BOXING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Conditioning + technique for real ring stamina. Build elite cardio, mental toughness, and self-defense skills.
            </p>
          </div>

          {/* Program Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">10 Weeks</p>
                <p className="text-sm text-muted-foreground">Program Duration</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">3x/Week</p>
                <p className="text-sm text-muted-foreground">Training Frequency</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">90 Min</p>
                <p className="text-sm text-muted-foreground">Session Length</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">All Levels</p>
                <p className="text-sm text-muted-foreground">Suitable For</p>
              </CardContent>
            </Card>
          </div>

          {/* Program Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle>What You'll Achieve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Elite cardiovascular conditioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Master boxing technique and footwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Develop mental toughness and focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Build functional self-defense skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improve coordination and reflexes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle>Program Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Jump Rope:</span>
                      <span className="text-muted-foreground"> 15 minutes warm-up and footwork</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Technique Work:</span>
                      <span className="text-muted-foreground"> 20 minutes skills and drills</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Bag/Mitt Work:</span>
                      <span className="text-muted-foreground"> 30 minutes intensive training</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Conditioning:</span>
                      <span className="text-muted-foreground"> 20 minutes HIIT and core work</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Training Phases */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              10-Week Progression
            </h2>
            <div className="grid gap-6">
              {phases.map((phase, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/90">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{phase.title}</CardTitle>
                        <CardDescription className="text-primary">{phase.week}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{phase.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="backdrop-blur-sm bg-primary/10 border-primary">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-display font-bold mb-4">Ready to Step Into the Ring?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Start your boxing journey today. Book a free assessment and unleash your inner fighter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold" asChild>
                    <Link href="/assessment" data-testid="button-book-assessment-boxing">
                      Book Free Assessment
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/programs" data-testid="button-view-all-programs">
                      View All Programs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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