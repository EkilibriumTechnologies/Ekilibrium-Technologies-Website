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

export default function Home() {
  return (
    <>
      <SEO
        title="Ekilibrium Technologies | Rental Technology & Automation"
        description="Software, automation, AI and integrations for independent vehicle rental businesses. Specializing in car, Jeep, exotic, van, golf cart, and ATV rentals."
      />
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
      </main>
      <Footer />
    </>
  );
}