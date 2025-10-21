import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, CheckCircle, Clock, Users, Target } from "lucide-react";
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
                <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30 mb-4">
                  Most Popular Program
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <Activity className="inline-block h-12 w-12 text-[#D4A017] mr-3" />
                  Calisthenics Training
                </h1>
                <p className="text-lg text-white/90">
                  Master bodyweight training with progressive exercises
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Target className="h-5 w-5 text-[#D4A017]" />
                      What You'll Achieve
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-white/90">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#D4A017] mt-1" />
                      <span>First muscle-up within 3 months</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#D4A017] mt-1" />
                      <span>Handstand mastery</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#D4A017] mt-1" />
                      <span>Full body control and strength</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#D4A017]" />
                      Program Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-white/90">
                    <p><strong>Duration:</strong> 12 weeks</p>
                    <p><strong>Frequency:</strong> 4x per week</p>
                    <p><strong>Session Length:</strong> 45-60 minutes</p>
                    <p><strong>Equipment:</strong> Pull-up bar, parallel bars</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold" asChild>
                  <Link href="/assessment">Start Your Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}
