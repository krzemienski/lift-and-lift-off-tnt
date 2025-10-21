import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, CheckCircle, Calendar, Dumbbell } from "lucide-react";
import { Link } from "wouter";

export default function FatLoss() {
  return (
    <div className="min-h-screen relative">
      <VideoCarousel />
      
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30 mb-4">
                  Transform Fast
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <Flame className="inline-block h-12 w-12 text-[#D4A017] mr-3" />
                  Fat Loss Program
                </h1>
                <p className="text-lg text-white/90">
                  Nutrition guidance + metabolic conditioning.
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
                    <p>• 1‑2 lbs/week loss</p>
                    <p>• Visible abs</p>
                    <p>• Sustainable habits</p>
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
                    <p>• 3x HIIT sessions</p>
                    <p>• 2x strength circuits</p>
                    <p>• Daily step goals</p>
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
                    <p>• Food scale</p>
                    <p>• Tracking app</p>
                    <p>• Heart rate monitor</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <Button size="lg" className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold" asChild>
                  <Link href="/assessment">Book Free Assessment</Link>
                </Button>
                <p className="text-sm text-white/70">Shed fat, keep muscle, feel amazing</p>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}