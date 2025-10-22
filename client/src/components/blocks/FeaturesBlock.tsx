import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";
import kettlebellIcon from "/icons/png/kettlebell.png";
import barbellIcon from "/icons/png/barbell.png";
import heartRateIcon from "/icons/png/heart-rate.png";
import boxingGloveIcon from "/icons/png/boxing-glove.png";
import stretchBandIcon from "/icons/png/stretch-band.png";

const programs = [
  {
    title: "Calisthenics",
    description: "Control your body, master movement.",
    iconSrc: kettlebellIcon,
    badge: "Most Popular",
    features: ["No equipment needed", "Build functional strength", "Improve flexibility"],
    link: "/programs/calisthenics",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Strength Training",
    description: "Progressive overload, durable gains.",
    iconSrc: barbellIcon,
    badge: "Results Guaranteed",
    features: ["Progressive overload", "Compound movements", "Personalized splits"],
    link: "/programs/strength",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Fat Loss",
    description: "Nutrition guidance + metabolic conditioning.",
    iconSrc: heartRateIcon,
    badge: "Transform Fast",
    features: ["HIIT workouts", "Meal planning", "Weekly check-ins"],
    link: "/programs/fat-loss",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    title: "Boxing",
    description: "Conditioning + technique for ring stamina.",
    iconSrc: boxingGloveIcon,
    badge: "High Energy",
    features: ["Technique drills", "Cardio conditioning", "Stress relief"],
    link: "/programs/boxing",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "Flexibility",
    description: "Mobility work to move pain‑free.",
    iconSrc: stretchBandIcon,
    badge: "Recovery Focus",
    features: ["Dynamic stretching", "Yoga elements", "Injury prevention"],
    link: "/programs/flexibility",
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/30"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Train on your time with 24/7 gym access"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Weekly measurements and performance metrics"
  },
  {
    icon: Award,
    title: "Certified Coach",
    description: "ISSA certified with 10+ years experience"
  }
];

export default function FeaturesBlock() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            Training Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white drop-shadow-lg">
            Choose Your <span className="text-[#D4A017]">Transformation Path</span>
          </h2>
          <p className="text-lg text-white/90 drop-shadow-md">
            Choose a proven path. Each track pairs technique with conditioning and smart recovery.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {programs.map((program) => (
            <Card 
              key={program.title}
              className={`group relative overflow-hidden ${program.borderColor} border bg-gradient-to-br ${program.color} backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl`}
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                  {program.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm">
                    <img 
                      src={program.iconSrc} 
                      alt={program.title} 
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4A017] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-[#D4A017] group-hover:text-black group-hover:border-[#D4A017] transition-all"
                  asChild
                >
                  <Link href={program.link} data-testid={`button-program-${program.title.toLowerCase()}`}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Row */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-[#D4A017]/10 flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-white">{benefit.title}</h3>
                <p className="text-sm text-white/80 drop-shadow-md">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-[#D4A017] text-black hover:bg-[#D4A017]/90 font-semibold"
            asChild
          >
            <Link href="/assessment" data-testid="button-features-cta">
              Get Your Free Assessment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}