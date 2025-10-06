import HeroSection from "@/components/HeroSection";
import CoachProfile from "@/components/CoachProfile";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Dumbbell, Heart, Trophy, Scale, Flower2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleContactSubmit = (data: any) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
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

  const instagramPosts = [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop",
      caption: "Morning HIIT session! 🔥 Let's crush those fitness goals together",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop",
      caption: "Yoga flow for flexibility and inner peace 🧘‍♀️",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop",
      caption: "Client success story! Down 20lbs and feeling stronger than ever 💪",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "4",
      imageUrl: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&auto=format&fit=crop",
      caption: "Outdoor training in beautiful weather ☀️",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "5",
      imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&auto=format&fit=crop",
      caption: "Strength training fundamentals - proper form is everything! 🏋️‍♀️",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "6",
      imageUrl: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&auto=format&fit=crop",
      caption: "Nutrition tips: Fuel your body right for maximum results 🥗",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "7",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&auto=format&fit=crop",
      caption: "Boxing for cardio and stress relief 🥊",
      permalink: "https://www.instagram.com/ellorylil",
    },
    {
      id: "8",
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop",
      caption: "Recovery is just as important as training! 💆‍♀️",
      permalink: "https://www.instagram.com/ellorylil",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection
        videoSrc="/attached_assets/20251004_1852_Loop Video_loop_01k6rpsmebeqbany0na4a9jjdq_1759788986675.mp4"
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
          imageSrc="/attached_assets/IMG_8895_Original_1759789084126.jpeg"
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
