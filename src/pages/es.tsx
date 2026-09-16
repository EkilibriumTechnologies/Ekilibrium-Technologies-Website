import { SEO } from "@/components/SEO";
import { HeaderEs } from "@/components/Header-es";
import { FooterEs } from "@/components/Footer-es";
import { HeroSectionEs } from "@/components/home/HeroSection-es";
import { RentalOperationsSectionEs } from "@/components/home/RentalOperationsSection-es";
import { RentalJourneySectionEs } from "@/components/home/RentalJourneySection-es";
import { SolutionsSectionEs } from "@/components/home/SolutionsSection-es";
import { StreetRentalSectionEs } from "@/components/home/StreetRentalSection-es";
import { AISectionEs } from "@/components/home/AISection-es";
import { AutomationSectionEs } from "@/components/home/AutomationSection-es";
import { IntegrationsSectionEs } from "@/components/home/IntegrationsSection-es";
import { CaseStudySectionEs } from "@/components/home/CaseStudySection-es";
import { WhyEkilibriumSectionEs } from "@/components/home/WhyEkilibriumSection-es";
import { AboutSectionEs } from "@/components/home/AboutSection-es";
import { LeadFormSectionEs } from "@/components/home/LeadFormSection-es";
import { FAQSectionEs } from "@/components/home/FAQSection-es";

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
      <HeaderEs />
      <main>
        <HeroSectionEs />
        <RentalOperationsSectionEs />
        <RentalJourneySectionEs />
        <SolutionsSectionEs />
        <StreetRentalSectionEs />
        <AISectionEs />
        <AutomationSectionEs />
        <IntegrationsSectionEs />
        <CaseStudySectionEs />
        <WhyEkilibriumSectionEs />
        <AboutSectionEs />
        <LeadFormSectionEs />
        <FAQSectionEs />
      </main>
      <FooterEs />
    </>
  );
}