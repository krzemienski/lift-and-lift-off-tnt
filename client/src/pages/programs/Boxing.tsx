import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Calendar, Dumbbell } from "lucide-react";
import { Link } from "wouter";

export default function Boxing() {
  return (
    <div className="min-h-screen relative">
      <VideoCarousel />
      
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#F7C948]/10 text-[#F7C948] border-[#F7C948]/30 mb-4">
                  High Energy
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
                  <Shield className="inline-block h-12 w-12 text-[#F7C948] mr-3" />
                  Boxing Training
                </h1>
                <p className="text-lg text-white/90">
                  Conditioning + technique for ring stamina.
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
                    <p>• Clean combinations</p>
                    <p>• 12‑round stamina</p>
                    <p>• Fight‑ready conditioning</p>
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
                    <p>• 3x technique (pads/bag)</p>
                    <p>• 2x conditioning circuits</p>
                    <p>• 1x sparring (optional)</p>
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
                    <p>• Boxing gloves (12‑16oz)</p>
                    <p>• Hand wraps</p>
                    <p>• Jump rope</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <Button size="lg" className="bg-[#F7C948] text-black hover:bg-[#F7C948]/90 font-semibold" asChild>
                  <Link href="/assessment">Book Free Assessment</Link>
                </Button>
                <p className="text-sm text-white/70">Step into the ring with confidence</p>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}