import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Lost 45 lbs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    content: "Coach Rico's fat loss program completely transformed my life. I've never felt stronger or more confident. The personalized approach made all the difference.",
    rating: 5,
    program: "Fat Loss",
    duration: "4 months"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Gained strength & flexibility",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    content: "The calisthenics program pushed me beyond what I thought possible. I can now do movements I never imagined, and my overall fitness has skyrocketed.",
    rating: 5,
    program: "Calisthenics",
    duration: "6 months"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Built 20 lbs muscle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    content: "The strength training program is incredibly well-structured. Coach Rico knows exactly how to push you while preventing injury. Best investment in myself.",
    rating: 5,
    program: "Strength Training",
    duration: "8 months"
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Marathon ready",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
    content: "Started boxing for cardio, ended up falling in love with the sport. Rico's teaching style is patient yet challenging. I'm in the best shape of my life!",
    rating: 5,
    program: "Boxing",
    duration: "5 months"
  },
  {
    id: 5,
    name: "James Lee",
    role: "Overcame back pain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
    content: "The flexibility program helped me overcome years of back pain. Rico's knowledge of body mechanics and recovery is exceptional.",
    rating: 5,
    program: "Flexibility",
    duration: "3 months"
  },
  {
    id: 6,
    name: "Lisa Martinez",
    role: "Lost 30 lbs",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop",
    content: "Group training with TNT Fitness is amazing! The community support and Rico's energy make every session fun while getting serious results.",
    rating: 5,
    program: "Group Training",
    duration: "7 months"
  }
];

export default function TestimonialsBlock() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Consistency <span className="text-[#D4A017]">compounds.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what clients achieved in 8–12 weeks.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-[#D4A017]/20 bg-gradient-to-br from-[#0B2545]/10 to-[#243B6B]/10">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-8 w-8 text-[#D4A017]/50 mb-6" />
              
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                {testimonials[activeTestimonial].content}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-[#D4A017]/30">
                    <AvatarImage src={testimonials[activeTestimonial].image} />
                    <AvatarFallback>{testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{testimonials[activeTestimonial].program}</Badge>
                  <Badge variant="outline">{testimonials[activeTestimonial].duration}</Badge>
                  <div className="flex">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D4A017] text-[#D4A017]" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeTestimonial 
                    ? 'w-8 bg-[#D4A017]' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
                data-testid={`testimonial-nav-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setActiveTestimonial(testimonials.indexOf(testimonial))}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4A017] text-[#D4A017]" />
                  ))}
                </div>
                
                <p className="text-sm leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-2 border-t">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}