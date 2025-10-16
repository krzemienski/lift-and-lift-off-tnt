import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, CheckCircle, Clock, Calendar, Users } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function Flexibility() {
  const phases = [
    {
      week: "Weeks 1-2",
      title: "Foundation & Assessment",
      focus: "Evaluate current mobility and establish baseline flexibility",
      techniques: ["Static stretching", "Foam rolling", "Breathing exercises", "Joint mobility"]
    },
    {
      week: "Weeks 3-5",
      title: "Progressive Mobility",
      focus: "Increase range of motion and address restrictions",
      techniques: ["Dynamic stretching", "PNF stretching", "Yoga flows", "Myofascial release"]
    },
    {
      week: "Weeks 6-8",
      title: "Advanced Flexibility",
      focus: "Master complex positions and maintain gains",
      techniques: ["Advanced yoga poses", "Splits progression", "Back bridges", "Active flexibility"]
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
              <Target className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              FLEXIBILITY
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Mobility work to move pain-free.
            </p>
          </div>

          {/* Program Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">8 Weeks</p>
                <p className="text-sm text-muted-foreground">Program Duration</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">5x/Week</p>
                <p className="text-sm text-muted-foreground">Training Frequency</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/90 text-center">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">45 Min</p>
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
                <p className="text-lg">Mobility flows · Joint health · Pain-free range.</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle>Weekly Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">3–4 days/week · 30–45 min · Spine/hips/shoulders blocks.</p>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle>Gear Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Mat, strap.</p>
              </CardContent>
            </Card>
          </div>

          {/* Training Phases */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              8-Week Progression
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
                      {phase.techniques.map((technique, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {technique}
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
                <h3 className="text-2xl font-display font-bold mb-4">Ready to Move Pain-Free?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Assessment screens ankles, hips, and thoracic rotation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-black font-semibold" asChild>
                    <Link href="/assessment" data-testid="button-book-assessment-flexibility">
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