import HeroSection from "@/components/HeroSection";
import CoachProfile from "@/components/CoachProfile";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import StickyNav from "@/components/StickyNav";
import { Dumbbell, Activity, Shield, Target, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InstagramPost } from "@shared/schema";
import heroVideo from "@assets/download_1760056534924.mp4";
import { useEffect, useRef } from "react";

export default function Home() {
  const { toast } = useToast();
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (videoContainerRef.current) {
            const scrollY = window.scrollY;
            videoContainerRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: instagramData, isLoading: instagramLoading } = useQuery<{ posts: InstagramPost[] }>({
    queryKey: ["/api/instagram/posts"],
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (data: any) => {
    contactMutation.mutate(data);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSpecialties = () => {
    document.getElementById("specialties")?.scrollIntoView({ behavior: "smooth" });
  };

  const specialties = [
    {
      icon: Activity,
      title: "Calisthenics",
      description: "Master bodyweight training with progressive exercises that build functional strength, coordination, and control without equipment.",
    },
    {
      icon: Target,
      title: "Flexibility",
      description: "Improve your range of motion, prevent injuries, and enhance performance through targeted mobility and stretching techniques.",
    },
    {
      icon: Shield,
      title: "Boxing",
      description: "High-intensity boxing workouts that combine cardio, coordination, and stress relief while building mental toughness.",
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Progressive resistance programs designed to build muscle, increase power, and transform your physique effectively.",
    },
    {
      icon: Flame,
      title: "Fat Loss",
      description: "Science-based fat burning strategies combining HIIT, strength training, and nutrition coaching for sustainable results.",
    },
  ];

  const instagramPosts = instagramData?.posts || [];

  return (
    <div className="min-h-screen">
      {/* Global Parallax Video Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div
          ref={videoContainerRef}
          className="absolute inset-0 -top-[20vh]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[140vh] w-full object-cover object-center"
            style={{
              transformOrigin: 'center',
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <StickyNav />

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection
        title="TODAY, NOT TOMORROW"
        subtitle="Stop waiting, start transforming. Expert fitness coaching by Coach Rico at TNT Fitness"
        primaryCTA="Start Now"
        secondaryCTA="View Programs"
        onPrimaryCTA={scrollToContact}
        onSecondaryCTA={scrollToSpecialties}
      />

      <div id="about">
        <CoachProfile
          name="Coach Rico"
          location="New York, USA"
          imageSrc={undefined}
          bio="Today, Not Tomorrow - that's more than just our motto at TNT Fitness, it's our way of life. I specialize in explosive transformations through calisthenics, boxing, and strength training. With ISSA certification and years of experience, I'll push you beyond your limits to achieve the results you've been waiting for."
          certifications={["ISSA Certified", "Athletic Performance Specialist", "Bodyweight Training Expert", "Sports Nutrition"]}
          stats={[
            { label: "Years Experience", value: "10+" },
            { label: "Clients Transformed", value: "750+" },
            { label: "Success Rate", value: "95%" },
          ]}
        />
      </div>

      <div id="specialties">
        <SpecialtiesGrid specialties={specialties} />
      </div>

      <InstagramFeed
        username="tntfitness"
        posts={instagramPosts}
        profileUrl="https://www.instagram.com/tntfitness"
      />

      <div id="contact">
        <ContactForm
          onSubmit={handleContactSubmit}
          trainingGoals={[
            "Calisthenics",
            "Flexibility Training",
            "Boxing",
            "Strength Training",
            "Fat Loss",
            "Athletic Performance",
          ]}
          contactInfo={{
            email: "rico@tntfitness.com",
            phone: "+1 (212) 555-0123",
            location: "New York, NY",
            instagram: "https://www.instagram.com/tntfitness",
          }}
        />
      </div>

      <Footer
        instagramUrl="https://www.instagram.com/tntfitness"
        location="New York, NY"
        email="rico@tntfitness.com"
      />
    </div>
  );
}
