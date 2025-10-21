import VideoCarousel from "@/components/VideoCarousel";
import ContactBlock from "@/components/blocks/ContactBlock";
import FooterBlock from "@/components/blocks/FooterBlock";

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <ContactBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
