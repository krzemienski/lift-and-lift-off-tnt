import VideoCarousel from "@/components/VideoCarousel";
import ContactBlock from "@/components/blocks/ContactBlock";
import FooterBlock from "@/components/blocks/FooterBlock";
import { Badge } from "@/components/ui/badge";

export default function Assessment() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Parallax Video Background */}
      <VideoCarousel />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <section className="relative py-24 bg-gradient-to-b from-[#0B2545]/70 to-[#243B6B]/60 backdrop-blur-md">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Badge className="bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30 mb-4">
              Free Assessment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-[#D4A017]">Free Assessment</span>
            </h1>
            <p className="text-lg text-white/90 mb-8">
              20‑min call · Movement screen · Program fit · Next steps.
            </p>
          </div>
        </section>
        <ContactBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
