import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, CheckCircle, Clock, Dumbbell, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Calisthenics() {
  return (
    <div className="min-h-screen relative">
      <VideoCarousel />
      
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#F7C948]/10 text-[#F7C948] border-[#F7C948]/30 mb-4">
                  Most Popular Program
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
                  <Activity className="inline-block h-12 w-12 text-[#F7C948] mr-3" />
                  Calisthenics Training
                </h1>
                <p className="text-lg text-white/90">
                  Control your body, master movement.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F7C948]" />
                      You'll achieve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• First pull‑up → muscle‑up progression</p>
                    <p>• Handstand holds (freestanding)</p>
                    <p>• Control and coordination</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#F7C948]" />
                      Weekly structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• 3x skill days (technique)</p>
                    <p>• 2x strength days (reps)</p>
                    <p>• Active recovery focus</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-[#F7C948]" />
                      Gear
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Pull‑up bar</p>
                    <p>• Parallettes (optional)</p>
                    <p>• Resistance bands</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <Button size="lg" className="bg-[#F7C948] text-black hover:bg-[#F7C948]/90 font-semibold" asChild>
                  <Link href="/assessment">Book Free Assessment</Link>
                </Button>
                <p className="text-sm text-white/70">Start your bodyweight mastery journey today</p>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}