import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import PortfolioPreview from "../components/home/PortfolioPreview";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import CTABanner from "../components/home/CTABanner";
import RevealSection from "../components/ui/RevealSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <HeroSection />
      <RevealSection>
        <ServicesPreview />
      </RevealSection>
      <RevealSection delay={100}>
        <PortfolioPreview />
      </RevealSection>
      <RevealSection delay={100}>
        <TestimonialsPreview />
      </RevealSection>
      <RevealSection delay={100}>
        <CTABanner />
      </RevealSection>
    </div>
  );
}
