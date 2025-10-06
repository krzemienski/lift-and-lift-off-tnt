import HeroSection from "@/components/HeroSection";
import CoachProfile from "@/components/CoachProfile";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Dumbbell, Heart, Trophy, Scale, Flower2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InstagramPost } from "@shared/schema";
import heroVideo from "@assets/20251004_1852_Loop Video_loop_01k6rpsmebeqbany0na4a9jjdq_1759788986675.mp4";
import coachImage from "@assets/IMG_8895_Original_1759789084126.jpeg";
import { useEffect, useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
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
      icon: Heart,
      title: "Middle Age Fitness Goals",
      description: "Tailored programs focusing on longevity, mobility, and sustainable fitness for adults 40+. Build strength while protecting your joints.",
    },
    {
      icon: Dumbbell,
      title: "Muscle Gain",
      description: "Progressive resistance training and nutrition guidance to help you build lean muscle mass and increase strength effectively.",
    },
    {
      icon: Trophy,
      title: "Sports Specific Training",
      description: "Performance-focused workouts designed to enhance your athletic abilities and excel in your chosen sport.",
    },
    {
      icon: Scale,
      title: "Weight Loss",
      description: "Evidence-based approach combining cardio, strength training, and nutrition to achieve sustainable weight loss results.",
    },
    {
      icon: Flower2,
      title: "Yoga",
      description: "Mind-body practice improving flexibility, balance, and mental clarity through traditional and modern yoga techniques.",
    },
  ];

  const instagramPosts = instagramData?.posts || [];

  return (
    <div className="min-h-screen">
      {/* Global Parallax Video Background */}
      <div className="fixed inset-0 -z-50">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[120vh] w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection
        title="Transform Your Body, Elevate Your Life"
        subtitle="Expert personal training tailored to your goals with certified coach Lillian Rolle"
        primaryCTA="Start Your Transformation"
        secondaryCTA="View My Programs"
        onPrimaryCTA={scrollToContact}
        onSecondaryCTA={scrollToSpecialties}
      />

      <div id="about">
        <CoachProfile
          name="Lillian Rolle"
          location="Havana, Cuba"
          imageSrc={coachImage}
          bio="With a passion for transforming lives through fitness, I bring authentic Cuban energy and certified expertise to every training session. My approach combines proven techniques with personalized attention to help you achieve sustainable results, no matter your age or fitness level."
          certifications={["ECP - EFTI/Lionel (NBFE)", "Certified Yoga Instructor", "Sports Nutrition Specialist"]}
          stats={[
            { label: "Years Experience", value: "8+" },
            { label: "Clients Trained", value: "500+" },
            { label: "Success Stories", value: "200+" },
          ]}
        />
      </div>

      <div id="specialties">
        <SpecialtiesGrid specialties={specialties} />
      </div>

      <InstagramFeed
        username="ellorylil"
        posts={instagramPosts}
        profileUrl="https://www.instagram.com/ellorylil"
      />

      <div id="contact">
        <ContactForm
          onSubmit={handleContactSubmit}
          trainingGoals={[
            "Middle Age Fitness",
            "Muscle Gain",
            "Sports Training",
            "Weight Loss",
            "Yoga",
            "General Fitness",
          ]}
          contactInfo={{
            email: "lillian@rolletraining.com",
            phone: "+1 (305) 555-0123",
            location: "Miami, FL",
            instagram: "https://www.instagram.com/ellorylil",
          }}
        />
      </div>

      <Footer
        instagramUrl="https://www.instagram.com/ellorylil"
        location="Miami, FL"
        email="lillian@rolletraining.com"
      />
    </div>
  );
}
