import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { GymGallery } from "@/components/ui/gym-gallery";
import { FeaturesSection } from "@/components/ui/features-section";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { BMICalculator } from "@/components/ui/bmi-calculator";
import { InstagramFeed } from "@/components/ui/instagram-feed";
import { FAQSection } from "@/components/ui/faq-section";
import { Footer } from "@/components/ui/footer";
import { WhatsAppFAB } from "@/components/ui/whatsapp-fab";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Gym Gallery - Hero altına */}
      <GymGallery />

      {/* Features/Services */}
      <FeaturesSection />

      {/* Before-After */}
      <BeforeAfterSection />

      {/* Pricing */}
      <PricingSection />

      {/* BMI Calculator */}
      <BMICalculator />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* FAQ */}
      <FAQSection />

      {/* Footer with Map & Contact */}
      <Footer />

      {/* WhatsApp FAB */}
      <WhatsAppFAB />
    </main>
  );
}
