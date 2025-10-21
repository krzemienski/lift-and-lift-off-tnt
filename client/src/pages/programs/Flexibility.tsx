import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, CheckCircle, Calendar, Dumbbell } from "lucide-react";
import { Link } from "wouter";

export default function Flexibility() {
  return (
    <div className="min-h-screen relative">
      <VideoCarousel />
      
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30 mb-4">
                  Recovery Focus
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <Target className="inline-block h-12 w-12 text-[#D4A017] mr-3" />
                  Flexibility Training
                </h1>
                <p className="text-lg text-white/90">
                  Mobility work to move pain‑free.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#D4A017]" />
                      You'll achieve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-white/90">
                    <p>• Touch toes → full splits</p>
                    <p>• Pain‑free movement</p>
                    <p>• Joint stability</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#D4A017]" />
                      Weekly structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-white/90">
                    <p>• 4x mobility sessions</p>
                    <p>• 2x yoga flows</p>
                    <p>• Daily 10‑min routines</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-[#D4A017]" />
                      Gear
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-white/90">
                    <p>• Yoga mat</p>
                    <p>• Foam roller</p>
                    <p>• Stretching strap</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <Button size="lg" className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold" asChild>
                  <Link href="/assessment">Book Free Assessment</Link>
                </Button>
                <p className="text-sm text-white/70">Unlock your body's full range of motion</p>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}