import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Award, Calendar, Users, Target, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const achievements = [
  "ISSA Certified Personal Trainer",
  "Nutrition Specialist Certification",
  "10+ Years Training Experience",
  "500+ Client Transformations",
  "Former Competitive Athlete",
  "Specialized in Body Recomposition"
];

const stats = [
  { icon: Users, value: "500+", label: "Clients Transformed" },
  { icon: Calendar, value: "10+", label: "Years Experience" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: Star, value: "4.9/5", label: "Client Rating" }
];

const specialties = [
  { title: "Weight Loss", description: "Sustainable fat loss strategies" },
  { title: "Muscle Building", description: "Lean muscle development" },
  { title: "Athletic Performance", description: "Sport-specific training" },
  { title: "Injury Recovery", description: "Rehabilitation and prevention" },
  { title: "Nutrition Coaching", description: "Personalized meal planning" },
  { title: "Mindset Training", description: "Mental strength development" }
];

export default function AboutBlock() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            Meet Your Coach
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white drop-shadow-lg">
            Coach <span className="text-[#D4A017]">Rico Martinez</span>
          </h2>
          <p className="text-lg text-white/90 drop-shadow-md">
            Your dedicated partner in achieving explosive fitness transformations
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          {/* Left Column - Image and Quick Stats */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop"
                  alt="Coach Rico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Rico Martinez</h3>
                  <p className="text-[#D4A017]">Founder & Head Coach</p>
                </div>
              </div>
            </Card>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-4">
                    <stat.icon className="h-6 w-6 text-[#D4A017] mx-auto mb-2" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Story and Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revelation & Evolution</CardTitle>
                <CardDescription>My Journey to TNT Fitness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#D4A017]">Revelation — Why I Became a Trainer</h4>
                  <p className="leading-relaxed">
                    I was born into a fight for breath. Asthma dominated my childhood. Thanks to my mother's job at Mount Sinai East, 
                    I spent too many hours in emergency rooms. At ten, I chose to put down the inhaler and chase sport. Coaches worried, 
                    benched me, and in that frustration I found fuel—fuel to perform, to prove, to keep showing up.
                  </p>
                  <p className="leading-relaxed">
                    In 2019 a freight elevator door collapsed on my head at work. The MRI read: <strong>severe brain contusions and concussion; 
                    cervical spine damage (C1–C5); lumbar damage (L5–L7)</strong>. I spent two years in cognitive and physical therapy, 
                    and a year and a half learning to walk without support.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#D4A017]">Evolution — What I Do Now</h4>
                  <p className="leading-relaxed">
                    Rebuilding my mind, spirit, and body became non‑negotiable. In 2024 I formalized that work, returning to school, 
                    earning <strong>three personal trainer certifications</strong> and a <strong>nutritionist certification</strong>, 
                    and studying human performance every day. My coaching is built on that recovery: <em>breath before load, posture 
                    before power, consistency over everything.</em>
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#D4A017]">Philosophy</h4>
                  <p className="leading-relaxed">
                    Fitness is more than reps. It is capacity—mental, spiritual, physical. It served and saved me—now it's your turn.
                  </p>
                  <p className="leading-relaxed font-bold text-[#D4A017]">
                    Are you ready?
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#D4A017] flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white drop-shadow-md">
            Areas of <span className="text-[#D4A017]">Expertise</span>
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <Card key={specialty.title} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[#D4A017] mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">{specialty.title}</h4>
                      <p className="text-sm text-muted-foreground">{specialty.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Philosophy */}
        <Card className="bg-gradient-to-br from-[#0B2545]/10 to-[#243B6B]/10 border-[#D4A017]/20">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-[#D4A017]/20 text-[#D4A017] border-[#D4A017]/30">
                My Promise
              </Badge>
              <h3 className="text-3xl font-bold text-white drop-shadow-md">
                "Your Success Is My Mission"
              </h3>
              <p className="text-lg leading-relaxed text-white/90 drop-shadow-md">
                When you train with me, you're not just another client—you're part of the TNT family. 
                I'll be there every step of your journey, celebrating your victories and pushing through 
                challenges together. Your transformation becomes my personal mission.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold"
                  asChild
                >
                  <Link href="/assessment" data-testid="button-about-assessment">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link href="/results" data-testid="button-about-results">
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}