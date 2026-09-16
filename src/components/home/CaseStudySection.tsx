import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function CaseStudySection() {
  const architecture = [
    "16 VEHICLES",
    "DIRECT BOOKING",
    "AVAILABILITY & PRICING",
    "PAYMENTS & DEPOSITS",
    "DIGITAL CHECK-IN",
    "SMARTCAR / LOCKBOX / IN-PERSON PICKUP",
    "CUSTOMER AUTOMATION",
    "RETURN & DEPOSIT SETTLEMENT",
  ];

  const capabilities = [
    "Direct online reservations",
    "Fleet management",
    "Pricing & availability",
    "Digital customer journey",
    "Security deposits",
    "Digital check-in",
    "Customer communication",
    "AI assistance",
    "Connected vehicles",
    "Remote pickup",
    "System integrations",
  ];

  return (
    <section id="case-study" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
              REAL RENTAL OPERATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Built Around a Real Rental Business.
          </h2>
          <p className="text-lg text-muted-foreground">
            Ekilibrium's rental technology experience is informed by operating and modernizing a real independent rental company.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-lg font-heading font-semibold text-foreground">
                Jeep Adventures Puerto Rico
              </span>
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              16 VEHICLES
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                RENTAL ARCHITECTURE
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {architecture.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="px-4 py-2 bg-muted/50 rounded-lg border border-border text-sm font-medium text-foreground">
                      {step}
                    </div>
                    {index < architecture.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                OPERATIONAL CAPABILITIES
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
            <Link href="#contact">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}