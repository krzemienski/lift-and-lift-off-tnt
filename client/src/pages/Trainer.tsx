import VideoCarousel from "@/components/VideoCarousel";
import AboutBlock from "@/components/blocks/AboutBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Trainer() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <AboutBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
