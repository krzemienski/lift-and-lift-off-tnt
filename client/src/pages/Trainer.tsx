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
                        My road to becoming a trainer wasn't an upbeat story, although with all trials and tribulations{" "}
                        <span className="font-bold text-primary">"To the VICTOR must come the SPOILS"</span>.
                      </p>
                      <p>
                        I was born into a fight for breath. Asthma dominated my childhood—my first day of existence came with an asthma attack. 
                        Thanks to my mother's employment at <span className="font-semibold">Mount Sinai East</span>, I was frequently 
                        seen in the ER without having to wait.
                      </p>
                      <p>
                        At the age of <span className="font-bold">10</span>, I made the decision to stop taking my albuterol medication. 
                        As a youth engaged in many sports programs, my coaches were in constant worry about my health, compelling them 
                        to bench me during games. This frustration became fuel—
                        <span className="font-bold text-primary"> fuel to perform and to keep showing up</span>.
                      </p>
                      <p className="p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                        In <span className="font-bold">July 2019</span>, a freight elevator door collapsed on my head at work due to faulty wires. 
                        The MRI revealed devastating injuries: <span className="font-semibold">severe brain contusions and concussion</span>, 
                        <span className="font-semibold"> cervical spine damage (C1–C5)</span>, and 
                        <span className="font-semibold"> lumbar damage (L5–L7)</span>.
                      </p>
                      <p>
                        This forced me into <span className="font-bold">2 years</span> of cognitive and physical therapy, 
                        and <span className="font-bold">a year and a half</span> learning to walk without support. 
                        The passion that had fueled me as a child would now heal me.
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
                        In <span className="font-bold">2024</span>, my journey of repairing my mental, spiritual, and physical wellness 
                        led me to wanting to know more. I began to learn about the human body through self-study, which developed 
                        into returning to school.
                      </p>
                      <p>
                        I formalized my knowledge and earned:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                          <Award className="h-8 w-8 text-primary" />
                          <span className="font-semibold">Three Personal Trainer Certifications</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                          <Award className="h-8 w-8 text-primary" />
                          <span className="font-semibold">Nutritionist Certification</span>
                        </div>
                      </div>
                      <p>
                        My coaching is built on recovery: <span className="font-bold text-primary">breath before load, 
                        posture before power, consistency over everything</span>.
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
                        Fitness is more than lifting weights. It's more than aesthetic pleasure. 
                        <span className="font-bold text-primary"> Fitness is wellness for the Mind, Spirit, and Body</span>.
                      </p>
                      <p className="text-2xl font-display font-bold text-center py-8">
                        Fitness served and saved me—now it's your turn.
                      </p>
                      <p className="text-3xl font-display font-extrabold text-center text-primary">
                        Are you ready?
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