import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Brain, Heart, Mountain } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Trainer() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen">
      <VideoCarousel />
      <StickyNav />
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Coach Rico
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              Revelation & Evolution
            </h2>
          </div>

          <div className="space-y-12">
            <Card className="backdrop-blur-sm bg-card/90">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Brain className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Revelation — Why I Became a Trainer
                    </h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        I was born into a fight for breath. Asthma dominated my childhood. 
                        Thanks to my mother's job at Mount Sinai East, I spent too many hours in emergency rooms. 
                        At ten, I chose to put down the inhaler and chase sport. Coaches worried, benched me, 
                        and in that frustration I found fuel—fuel to perform, to prove, to keep showing up.
                      </p>
                      <p className="p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                        In 2019 a freight elevator door collapsed on my head at work. The MRI read: 
                        <span className="font-bold"> severe brain contusions and concussion; cervical spine damage (C1–C5); lumbar damage (L5–L7)</span>. 
                        I spent two years in cognitive and physical therapy, 
                        and a year and a half learning to walk without support.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/90">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Mountain className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Evolution — What I Do Now
                    </h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        Rebuilding my mind, spirit, and body became non-negotiable. In 2024 I formalized that work, 
                        returning to school, earning <span className="font-bold">three personal trainer certifications</span> and 
                        a <span className="font-bold">nutritionist certification</span>, and studying human performance every day. 
                        My coaching is built on that recovery: <em>breath before load, 
                        posture before power, consistency over everything.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-primary/20 border-primary">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4">
                  <Heart className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Philosophy
                    </h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p className="text-xl">
                        Fitness is more than reps. It is capacity—mental, spiritual, physical. 
                        It served and saved me—now it's your turn. <span className="font-bold">Are you ready?</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-8">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  ISSA Certified Personal Trainer
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Sports Nutrition Specialist
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Corrective Exercise Specialist
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Recovery & Rehabilitation Expert
                </Badge>
              </div>
              
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="text-lg px-12"
                data-testid="button-start-transformation"
              >
                Start Your Transformation Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer
        instagramUrl="https://www.instagram.com/tntfitness"
        location="New York, NY"
        email="rico@tntfitness.com"
      />
    </div>
  );
}