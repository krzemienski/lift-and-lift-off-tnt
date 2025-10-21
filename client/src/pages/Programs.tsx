import VideoCarousel from "@/components/VideoCarousel";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Programs() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <FeaturesBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
