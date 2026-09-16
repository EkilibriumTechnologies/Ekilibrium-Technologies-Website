import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Clock, Shield, Smartphone, Lock, Users } from "lucide-react";
import Link from "next/link";

export function StreetRentalSection() {
  const operatingModels = [
    {
      title: "TRADITIONAL",
      description: "Reservation → Vehicle assignment → Payments → Deposits → Digital check-in → Pickup → Return",
      icon: Users,
    },
    {
      title: "CONTACTLESS",
      description: "Remote pickup using connected vehicles or lockbox workflows.",
      icon: Lock,
    },
    {
      title: "SCAN & GO",
      description: "Mobile-first self-service rental experiences initiated at the vehicle.",
      icon: Smartphone,
    },
  ];

  const capabilities = [
    "Fleet Management",
    "Reservations",
    "Vehicle Classes",
    "Availability",
    "Pricing",
    "Payments",
    "Security Deposits",
    "Check-in",
    "Checkout",
    "Customer Communication",
    "Web Integration",
    "Connected Vehicles",
    "Operator Administration",
  ];

  return (
    <section id="street-rental" className="py-16 sm:py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider px-3 py-1 bg-accent/20 rounded-full border border-accent/30">
                BUILT BY EKILIBRIUM
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Meet Street Rental.
            </h2>

            <p className="text-lg md:text-xl font-medium text-primary-foreground/90">
              A rental operating platform built for independent vehicle rental companies.
            </p>

            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg font-semibold">
                We don't just integrate rental software.
                <br />
                We build it.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold">Operating Models:</h3>
              {operatingModels.map((model, index) => {
                const Icon = model.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                    <Icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-accent mb-1">
                        {model.title}
                      </div>
                      <p className="text-sm text-primary-foreground/80">
                        {model.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#contact">
                Explore Street Rental
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-card rounded-lg border border-border shadow-2xl overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b border-border">
                <span className="text-sm font-semibold text-foreground">STREET RENTAL PLATFORM</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Product Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {capabilities.map((capability, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                        <span className="break-words">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-border">
                  <div className="text-center p-3 bg-muted/30 rounded">
                    <Car className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-foreground font-semibold">Fleet</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-foreground font-semibold">Availability</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded">
                    <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xs text-foreground font-semibold">Deposits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}