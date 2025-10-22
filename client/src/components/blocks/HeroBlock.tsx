import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Trophy, Zap, Star } from "lucide-react";
import { Link } from "wouter";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Transformed",
    description: "Real people, real results"
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Years Experience",
    description: "Proven expertise"
  },
  {
    icon: Zap,
    value: "95%",
    label: "Success Rate",
    description: "Achieve your goals"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Client satisfaction"
  }
];

const features = [
  "Personalized training programs",
  "Nutrition guidance included",
  "24/7 support via app",
  "Weekly progress tracking"
];

export default function HeroBlock() {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      {/* Content Container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex">
                <Badge 
                  variant="outline" 
                  className="border-[#F7C948]/30 bg-[#F7C948]/10 text-[#F7C948] backdrop-blur-sm px-4 py-2 text-sm font-medium"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  New Year Special - 30% Off
                </Badge>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-heading font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl xl:text-7xl">
                  TODAY,
                  <span className="block text-[#F7C948]">NOT</span>
                  <span className="block">TOMORROW</span>
                </h1>
                <p className="max-w-xl text-lg text-white/90 drop-shadow-md md:text-xl">
                  Immediate, focused coaching across boxing, strength, calisthenics, flexibility, and fat loss—engineered for accountability and results.
                </p>
              </div>

              {/* Features List */}
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/90 drop-shadow-md">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-[#F7C948]" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#F7C948] text-black hover:bg-[#F7C948]/90 font-semibold"
                  asChild
                >
                  <Link href="/assessment" data-testid="button-hero-assessment">
                    Schedule Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  asChild
                >
                  <Link href="/programs" data-testid="button-hero-programs">
                    View Programs
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-600 to-gray-800"
                    />
                  ))}
                </div>
                <div className="text-sm text-white/80 drop-shadow-md">
                  <span className="font-semibold text-white">500+</span> clients achieving their goals
                </div>
              </div>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <Card 
                  key={stat.label} 
                  className="border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <div className="p-6 space-y-3">
                    <stat.icon className="h-8 w-8 text-[#F7C948]" />
                    <div>
                      <p className="text-3xl font-bold text-white drop-shadow-lg">{stat.value}</p>
                      <p className="text-sm font-medium text-[#F7C948] drop-shadow-md">{stat.label}</p>
                      <p className="text-xs text-white/70 drop-shadow-md mt-1">{stat.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Section - Limited Spots */}
          <div className="mt-12 flex items-center justify-center">
            <Badge 
              variant="secondary" 
              className="bg-red-500/10 text-red-400 border-red-500/30 backdrop-blur-sm px-4 py-2"
            >
              <span className="animate-pulse">●</span>
              <span className="ml-2">Limited Spots Available - Only 3 Left This Month</span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}