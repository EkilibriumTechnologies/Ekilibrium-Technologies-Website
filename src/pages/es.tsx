import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { RentalOperationsSection } from "@/components/home/RentalOperationsSection";
import { RentalJourneySection } from "@/components/home/RentalJourneySection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { StreetRentalSection } from "@/components/home/StreetRentalSection";
import { AISection } from "@/components/home/AISection";
import { AutomationSection } from "@/components/home/AutomationSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { WhyEkilibriumSection } from "@/components/home/WhyEkilibriumSection";
import { AboutSection } from "@/components/home/AboutSection";
import { LeadFormSection } from "@/components/home/LeadFormSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function EsHome() {
  return (
    <>
      <SEO
        title="Ekilibrium Technologies | Tecnología y Automatización para Rentals"
        description="Software, automatización, IA e integraciones para negocios independientes de renta de vehículos. Especializados en renta de autos, Jeeps, exóticos, vans, carritos de golf y ATVs."
      />
      <style jsx global>{`
        section[id] {
          scroll-margin-top: 80px;
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <RentalOperationsSection />
        <RentalJourneySection />
        <SolutionsSection />
        <StreetRentalSection />
        <AISection />
        <AutomationSection />
        <IntegrationsSection />
        <CaseStudySection />
        <WhyEkilibriumSection />
        <AboutSection />
        <LeadFormSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}