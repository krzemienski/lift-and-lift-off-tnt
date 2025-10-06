import SpecialtiesGrid from "../SpecialtiesGrid";
import { Dumbbell, Heart, Trophy, Scale, Flower2 } from "lucide-react";

export default function SpecialtiesGridExample() {
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

  return <SpecialtiesGrid specialties={specialties} />;
}
