import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VideoCarousel from "@/components/VideoCarousel";
import { useToast } from "@/hooks/use-toast";
import { 
  Activity, Target, Shield, Dumbbell, Flame, 
  Star, ArrowRight, CheckCircle, Calendar, 
  Users, Award, Instagram, Mail, MapPin, Phone,
  ChevronRight, Trophy, Heart, Zap
} from "lucide-react";
import { Link } from "wouter";
import { AnimatedSection } from "@/hooks/use-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const programs = [
    {
      icon: Activity,
      title: "Calisthenics",
      description: "Control your body, master movement.",
      features: ["Bodyweight Training", "Progressive Skills", "Flexibility"],
      href: "/programs/calisthenics",
      badge: "Most Popular",
      level: "All Levels"
    },
    {
      icon: Target,
      title: "Flexibility",
      description: "Mobility work to move pain-free.",
      features: ["Joint Mobility", "Stretching", "Recovery"],
      href: "/programs/flexibility",
      level: "Beginner"
    },
    {
      icon: Shield,
      title: "Boxing",
      description: "Conditioning + technique for ring stamina.",
      features: ["Technique", "Cardio", "Mental Toughness"],
      href: "/programs/boxing",
      badge: "High Intensity",
      level: "Intermediate"
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Progressive overload, durable gains.",
      features: ["Compound Lifts", "Muscle Building", "Power"],
      href: "/programs/strength",
      level: "All Levels"
    },
    {
      icon: Flame,
      title: "Fat Loss",
      description: "Nutrition guidance + metabolic conditioning.",
      features: ["HIIT Training", "Nutrition Plans", "Accountability"],
      href: "/programs/fat-loss",
      badge: "Results Guaranteed",
      level: "Beginner"
    },
  ];

  const testimonials = [
    {
      quote: "TNT Fitness changed my life. I went from struggling with basic movements to completing my first muscle-up in just 3 months.",
      name: "Marcus J.",
      program: "Calisthenics",
      rating: 5,
      avatar: "/images/transformation.png",
      results: "Lost 30lbs, Gained Strength"
    },
    {
      quote: "Coach Rico's approach to strength training is methodical and safe. I've gained 15lbs of muscle without a single injury.",
      name: "Sarah K.",
      program: "Strength Training", 
      rating: 5,
      avatar: "/images/transformation.png",
      results: "15lbs Muscle Gained"
    },
    {
      quote: "The boxing program improved my cardio, coordination, and confidence. Best decision I've ever made.",
      name: "David L.",
      program: "Boxing",
      rating: 5,
      avatar: "/images/transformation.png",
      results: "Marathon Ready"
    },
    {
      quote: "Flexibility training with Coach Rico helped me overcome years of back pain. Now I move better than I did in my 20s.",
      name: "Jennifer M.",
      program: "Flexibility",
      rating: 5,
      avatar: "/images/transformation.png",
      results: "Pain-Free Movement"
    },
    {
      quote: "The accountability and nutrition guidance was exactly what I needed. Down 40lbs and feeling incredible!",
      name: "Robert T.",
      program: "Fat Loss",
      rating: 5,
      avatar: "/images/transformation.png",
      results: "40lbs Lost in 4 Months"
    },
    {
      quote: "From zero push-ups to sets of 20. Coach Rico's programming is progressive and sustainable.",
      name: "Emily R.",
      program: "Calisthenics",
      rating: 5,
      avatar: "/images/transformation.png",
      results: "10x Strength Increase"
    }
  ];

  const stats = [
    { value: "500+", label: "Clients Transformed", icon: Users },
    { value: "98%", label: "Success Rate", icon: Trophy },
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "5.0", label: "Average Rating", icon: Star }
  ];

  const instagramPosts = [
    { id: 1, type: "transformation", likes: "324", comments: "42" },
    { id: 2, type: "workout", likes: "567", comments: "89" },
    { id: 3, type: "nutrition", likes: "234", comments: "31" },
    { id: 4, type: "motivation", likes: "892", comments: "156" },
    { id: 5, type: "technique", likes: "445", comments: "67" },
    { id: 6, type: "results", likes: "723", comments: "94" },
    { id: 7, type: "tips", likes: "356", comments: "48" },
    { id: 8, type: "community", likes: "612", comments: "103" },
    { id: 9, type: "progress", likes: "489", comments: "71" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to TNT Fitness!",
      description: "You've been added to our newsletter. Check your email for a welcome gift!",
    });
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Video Carousel Background */}
      <VideoCarousel />

      {/* HERO SECTION - Enhanced Shadcn Hero Block */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 pt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2">
                <Badge variant="default" className="px-4 py-1" data-testid="badge-special-offer">
                  <Zap className="w-3 h-3 mr-1" />
                  New Year Special - 30% Off
                </Badge>
                <Badge variant="outline" className="px-4 py-1 bg-white/10 backdrop-blur-sm" data-testid="badge-limited-spots">
                  Limited Spots Available
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight"
                    style={{ textShadow: '3px 3px 6px rgba(11, 37, 69, 0.9), 0 0 30px rgba(212, 160, 23, 0.3)' }}>
                  TODAY,<br/>
                  <span className="text-[#D4A017]">NOT TOMORROW</span>
                </h1>
                <p className="text-xl text-white/90" style={{ textShadow: '2px 2px 4px rgba(11, 37, 69, 0.8)' }}>
                  Explosive fitness transformations with Coach Rico. Join 500+ successful clients who chose action over excuses.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold shadow-xl"
                  data-testid="button-start-transformation"
                  asChild
                >
                  <Link href="/assessment">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-view-success-stories"
                  asChild
                >
                  <Link href="/results">View Success Stories</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2" data-testid="indicator-free-assessment">
                  <CheckCircle className="h-5 w-5 text-[#D4A017]" />
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2" data-testid="indicator-personalized-plans">
                  <CheckCircle className="h-5 w-5 text-[#D4A017]" />
                  <span>Personalized Plans</span>
                </div>
                <div className="flex items-center gap-2" data-testid="indicator-results-guaranteed">
                  <CheckCircle className="h-5 w-5 text-[#D4A017]" />
                  <span>Results Guaranteed</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Cards - Right Side */}
          <AnimatedSection animation="fade-in-scale" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover-elevate" data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardHeader className="pb-2">
                    <stat.icon className="h-8 w-8 text-[#D4A017] mb-2" />
                    <CardTitle className="text-3xl font-bold text-white" data-testid={`text-stat-value-${index}`}>{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80" data-testid={`text-stat-label-${index}`}>{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROGRAMS SECTION - Enhanced Card Grid Blocks */}
      <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/80 to-[#243B6B]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-in-scale" className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-programs-count">
              <Trophy className="w-3 h-3 mr-1" />
              5 Specialized Programs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                style={{ textShadow: '2px 2px 6px rgba(11, 37, 69, 0.9), 0 0 20px rgba(212, 160, 23, 0.2)' }}
                data-testid="heading-programs">
              Choose Your Training Path
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto"
               style={{ textShadow: '1px 1px 3px rgba(11, 37, 69, 0.8)' }}
               data-testid="text-programs-description">
              Each program is designed with proven methodologies, progressive programming, and includes nutrition guidance.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="hover-elevate card-lift group relative overflow-hidden" data-testid={`card-program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {program.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-[#D4A017] text-[#0B2545]" data-testid={`badge-program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {program.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <program.icon className="h-12 w-12 text-[#D4A017] mb-4 group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary" data-testid={`badge-level-${program.title.toLowerCase().replace(/\s+/g, '-')}`}>{program.level}</Badge>
                    </div>
                    <CardTitle className="text-2xl" data-testid={`text-program-title-${index}`}>{program.title}</CardTitle>
                    <CardDescription className="text-base" data-testid={`text-program-description-${index}`}>
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-muted-foreground" data-testid={`feature-${program.title.toLowerCase().replace(/\s+/g, '-')}-${idx}`}>
                          <CheckCircle className="h-4 w-4 text-[#D4A017]" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full group" asChild data-testid={`button-view-${program.title.toLowerCase().replace(' ', '-')}`}>
                      <Link href={program.href}>
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold" asChild data-testid="button-compare-programs">
              <Link href="/programs">
                Compare All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COACH PROFILE SECTION - Shadcn Profile/About Block */}
      <section className="relative py-24 bg-gradient-to-b from-[#243B6B]/60 to-[#0B2545]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-full min-h-[400px] md:min-h-[600px]">
                  <img 
                    src="/images/coach_rico.png"
                    alt="Coach Rico - TNT Fitness"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-[#D4A017] text-[#0B2545] mb-3">
                      Head Coach & Founder
                    </Badge>
                    <h3 className="text-3xl font-display font-bold text-white mb-2"
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                      Coach Rico
                    </h3>
                    <p className="text-white/90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                      ISSA Certified • 10+ Years Experience
                    </p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <Badge variant="outline" data-testid="badge-coach-story">My Story</Badge>
                    <h2 className="text-3xl font-display font-bold">
                      From Setbacks to Strength
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#D4A017] mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Education & Certifications
                      </h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Equinox Fitness Training Institute Graduate</li>
                        <li>• ISSA Certified Personal Trainer</li>
                        <li>• Nutrition & Wellness Specialist</li>
                        <li>• Boxing & Combat Sports Certified</li>
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-[#D4A017] mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        My Journey
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        Started with asthma and early setbacks. Fitness became the discipline that fueled my recovery and performance.
                      </p>
                      <p className="text-muted-foreground">
                        In 2019, I suffered severe head and spinal injuries and spent two years rehabbing. This experience taught me the true value of resilience and proper training methodology.
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-[#D4A017] mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Training Philosophy
                      </h4>
                      <p className="font-semibold mb-2">
                        "Fitness is wellness for mind, spirit, and body."
                      </p>
                      <p className="text-muted-foreground">
                        Every program I design addresses not just physical transformation, but mental resilience and sustainable lifestyle change. Fitness served and saved me—now it's your turn.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <Button size="lg" className="w-full bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold" asChild>
                      <Link href="/assessment" data-testid="button-book-free-consultation">
                        Book Free Consultation
                        <Calendar className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full" asChild>
                      <Link href="/trainer" data-testid="button-full-story">
                        Read Full Story
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Shadcn Testimonial Blocks */}
      <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/80 to-[#243B6B]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-in-scale" className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-success-stories">
              <Star className="w-3 h-3 mr-1" />
              500+ Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                style={{ textShadow: '2px 2px 6px rgba(11, 37, 69, 0.9), 0 0 20px rgba(212, 160, 23, 0.2)' }}
                data-testid="heading-testimonials">
              Real People. Real Results.
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto"
               style={{ textShadow: '1px 1px 3px rgba(11, 37, 69, 0.8)' }}
               data-testid="text-testimonials-description">
              Join hundreds of clients who transformed their lives with TNT Fitness
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="hover-elevate relative" data-testid={`card-testimonial-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar data-testid={`avatar-testimonial-${index}`}>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-program-${index}`}>{testimonial.program}</p>
                        </div>
                      </div>
                      <div className="flex gap-1" data-testid={`rating-testimonial-${index}`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#D4A017] text-[#D4A017]" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-muted-foreground mb-4" data-testid={`text-testimonial-quote-${index}`}>"{testimonial.quote}"</p>
                    <Badge variant="secondary" className="w-full justify-center" data-testid={`badge-testimonial-results-${index}`}>
                      <Trophy className="h-3 w-3 mr-1" />
                      {testimonial.results}
                    </Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold" asChild data-testid="button-all-testimonials">
              <Link href="/results">
                View All Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-white/80" data-testid="text-satisfaction-rate">Over 98% client satisfaction rate</p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY SECTION - Shadcn Gallery Blocks */}
      <section className="relative py-24 bg-gradient-to-b from-[#243B6B]/60 to-[#0B2545]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fade-in-scale" className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-instagram-updates">
              <Instagram className="w-3 h-3 mr-1" />
              Daily Updates
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                style={{ textShadow: '2px 2px 6px rgba(11, 37, 69, 0.9), 0 0 20px rgba(212, 160, 23, 0.2)' }}
                data-testid="heading-instagram">
              Follow @tntfitness
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto"
               style={{ textShadow: '1px 1px 3px rgba(11, 37, 69, 0.8)' }}
               data-testid="text-instagram-description">
              Join our community for daily workouts, nutrition tips, and transformation updates
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 mb-8">
            {instagramPosts.map((post, index) => (
              <AnimatedSection key={index} animation="fade-in-scale" delay={index * 50}>
                <Card className="group cursor-pointer hover-elevate relative overflow-hidden aspect-square" data-testid={`card-instagram-post-${post.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/20 to-[#0B2545]/20 group-hover:from-[#D4A017]/30 group-hover:to-[#0B2545]/30 transition-colors" />
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Instagram className="h-8 w-8 text-white/50 mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-white/50 text-sm" data-testid={`text-instagram-type-${post.id}`}>#{post.type}</p>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <span data-testid={`text-instagram-likes-${post.id}`}>❤️ {post.likes}</span>
                    <span data-testid={`text-instagram-comments-${post.id}`}>💬 {post.comments}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold" asChild data-testid="button-follow-instagram">
              <a href="https://www.instagram.com/tntfitness" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <Link href="/instagram" data-testid="button-view-gallery">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Final Call to Action */}
      <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/90 to-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-in-scale">
            <Badge className="mb-6" variant="default" data-testid="badge-limited-offer">
              <Zap className="w-3 h-3 mr-1" />
              Limited Time Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                style={{ textShadow: '2px 2px 6px rgba(11, 37, 69, 0.9), 0 0 20px rgba(212, 160, 23, 0.2)' }}>
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
               style={{ textShadow: '1px 1px 3px rgba(11, 37, 69, 0.8)' }}>
              Join 500+ successful clients. Get your free assessment and personalized transformation plan today.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-bold text-lg px-8" asChild>
                <Link href="/assessment" data-testid="button-final-cta">
                  Start Your Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8" asChild>
                <Link href="/contact" data-testid="button-contact-cta">
                  Questions? Let's Talk
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle, text: "Free Assessment" },
                { icon: Users, text: "Expert Coaching" },
                { icon: Trophy, text: "Proven Results" },
                { icon: Heart, text: "Lifetime Support" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-white/90" data-testid={`indicator-${item.text.toLowerCase().replace(/\s+/g, '-')}`}>
                  <item.icon className="h-8 w-8 text-[#D4A017]" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER SECTION - Enhanced Shadcn Footer Blocks */}
      <footer className="relative py-16 bg-black/90 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-[#D4A017]">TNT FITNESS</h3>
              <p className="text-white/70 text-sm">
                Today, Not Tomorrow - Explosive fitness transformations with Coach Rico.
              </p>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="https://www.instagram.com/tntfitness" target="_blank" rel="noopener noreferrer" data-testid="button-footer-instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="mailto:rico@tntfitness.com" data-testid="button-footer-email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <a href="tel:+12125550123" data-testid="button-footer-phone">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Programs</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/programs/calisthenics" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-calisthenics">Calisthenics</Link></li>
                <li><Link href="/programs/flexibility" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-flexibility">Flexibility</Link></li>
                <li><Link href="/programs/boxing" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-boxing">Boxing</Link></li>
                <li><Link href="/programs/strength" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-strength">Strength Training</Link></li>
                <li><Link href="/programs/fat-loss" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-fat-loss">Fat Loss</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Resources</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="/assessment" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-assessment">Free Assessment</Link></li>
                <li><Link href="/trainer" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-trainer">About Coach Rico</Link></li>
                <li><Link href="/results" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-results">Success Stories</Link></li>
                <li><Link href="/instagram" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-instagram-feed">Instagram Feed</Link></li>
                <li><Link href="/contact" className="hover:text-[#D4A017] transition-colors" data-testid="link-footer-contact">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Stay Motivated</h4>
              <p className="text-white/70 text-sm">
                Get weekly fitness tips and exclusive offers
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="input-newsletter"
                />
                <Button type="submit" className="w-full bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0B2545] font-semibold" data-testid="button-newsletter-submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 TNT Fitness. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                New York, NY
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1 (212) 555-0123
              </span>
              <a href="mailto:rico@tntfitness.com" className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
                <Mail className="h-4 w-4" />
                rico@tntfitness.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}