import VideoCarousel from "@/components/VideoCarousel";
import HeroBlock from "@/components/blocks/HeroBlock";
import FeaturesBlock from "@/components/blocks/FeaturesBlock";
import AboutBlock from "@/components/blocks/AboutBlock";
import CommunityBlock from "@/components/blocks/CommunityBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <HeroBlock />
        <FeaturesBlock />
        <AboutBlock />
        <CommunityBlock />
        <FooterBlock />
      </div>
    </div>
  );
}