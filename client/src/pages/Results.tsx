import VideoCarousel from "@/components/VideoCarousel";
import TestimonialsBlock from "@/components/blocks/TestimonialsBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Results() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <TestimonialsBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
