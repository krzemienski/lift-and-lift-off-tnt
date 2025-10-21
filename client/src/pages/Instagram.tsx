import VideoCarousel from "@/components/VideoCarousel";
import GalleryBlock from "@/components/blocks/GalleryBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Instagram() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <GalleryBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
