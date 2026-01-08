import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Heart, Users, Quote, Sparkles } from "lucide-react";

export default function CommunityBlock() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/90 to-[#0B2545]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            Community Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white drop-shadow-lg">
            Community <span className="text-[#D4A017]">Movements</span>
          </h2>
        </div>

        {/* Coach Rico Quote */}
        <Card className="border-[#D4A017]/30 bg-[#D4A017]/5 backdrop-blur-sm mb-12 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <Quote className="h-12 w-12 text-[#D4A017] opacity-50" />
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                "ANYTHING THAT DOESN'T MOVE DOESN'T LIVE"
              </blockquote>
              <cite className="text-[#D4A017] font-semibold text-lg">— Coach Rico</cite>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Program Description */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-[#D4A017]" />
                <h3 className="text-xl font-bold text-white">About The Program</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                This program is based solely on movement. Cardio, calisthenics, yoga and dance moves. 
                Upbeat music with choice of the participants just to keep us grooving and participating. 
                Participants also get a chance to give weekly regiments and lead the class with their activities.
              </p>
            </CardContent>
          </Card>

          {/* Movement is Medicine Philosophy */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-[#D4A017]" />
                <h3 className="text-xl font-bold text-white">Movement is Medicine</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Even though food is nutritious for your body, feedback from peers can feed the soul and mind. 
                Open conversation after a week of class keeps us engaged and building off each other's experience.
              </p>
              <p className="text-[#D4A017] font-bold text-lg">
                PHYSICALLY FIT, MENTALLY FIT AND SPIRITUALLY FIT.
              </p>
              <p className="text-white font-semibold text-lg italic">
                Let movement be our medicine.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Inclusive Statement */}
        <Card className="border-[#D4A017]/20 bg-[#D4A017]/10 backdrop-blur-sm mb-12 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <Sparkles className="h-8 w-8 text-[#D4A017]" />
              <p className="text-xl text-white font-semibold leading-relaxed">
                Discrimination is never tolerated! We are all smelly and soaked after class.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card 
          className="border-[#D4A017]/30 max-w-2xl mx-auto"
          style={{
            background: 'linear-gradient(to bottom right, rgba(11, 37, 69, 0.95), rgba(36, 59, 107, 0.95))'
          }}
        >
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30">
                Get Involved
              </Badge>
              <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
              <p className="text-white/80">
                Ready to start moving? Reach out to us today!
              </p>
              
              <div className="flex justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold"
                  asChild
                >
                  <a href="mailto:fittodaynottomorrow@gmail.com" data-testid="link-community-email">
                    <Mail className="mr-2 h-5 w-5" />
                    fittodaynottomorrow@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
