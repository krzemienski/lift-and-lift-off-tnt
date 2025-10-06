import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      videoSrc="/assets/fitness-hero.mp4"
      title="Transform Your Body, Elevate Your Life"
      subtitle="Expert personal training tailored to your goals with certified coach Lillian Rolle"
      primaryCTA="Start Your Transformation"
      secondaryCTA="View My Programs"
      onPrimaryCTA={() => console.log("Primary CTA clicked")}
      onSecondaryCTA={() => console.log("Secondary CTA clicked")}
    />
  );
}
