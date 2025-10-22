import VideoCarousel from "@/components/VideoCarousel";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, CheckCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Strength() {
  return (
    <div className="min-h-screen relative">
      <VideoCarousel />
      
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#F7C948]/10 text-[#F7C948] border-[#F7C948]/30 mb-4">
                  Results Guaranteed
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
                  <Dumbbell className="inline-block h-12 w-12 text-[#F7C948] mr-3" />
                  Strength Training
                </h1>
                <p className="text-lg text-white/90">
                  Progressive overload, durable gains.
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
                    <p>• 2x bodyweight squat</p>
                    <p>• 1.5x bench press</p>
                    <p>• 2.5x deadlift</p>
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
                    <p>• Push/Pull/Legs split</p>
                    <p>• Progressive overload</p>
                    <p>• Deload every 4th week</p>
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
                    <p>• Gym membership</p>
                    <p>• Lifting belt</p>
                    <p>• Tracking notebook</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center space-y-4">
                <Button size="lg" className="bg-[#F7C948] text-black hover:bg-[#F7C948]/90 font-semibold" asChild>
                  <Link href="/assessment">Book Free Assessment</Link>
                </Button>
                <p className="text-sm text-white/70">Build real, lasting strength</p>
              </div>
            </div>
          </div>
        </section>
        <FooterBlock />
      </div>
    </div>
  );
}