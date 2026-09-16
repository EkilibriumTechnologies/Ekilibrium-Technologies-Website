import { Button } from "@/components/ui/button";
import { Globe, MessageSquare, Settings, Shield, Key, TrendingUp } from "lucide-react";

export function IntegrationsSection() {
  const capabilities = [
    {
      icon: Globe,
      title: "Book & Convert",
      areas: [
        "Direct booking websites",
        "Reservation experiences",
        "AI reservation assistants",
        "Availability",
        "Quotes",
        "Pricing",
        "Booking workflows",
      ],
      description: "Turn customer interest into confirmed rentals with connected booking experiences built around your fleet and operating model.",
    },
    {
      icon: MessageSquare,
      title: "Serve Customers",
      areas: [
        "Rental FAQ AI",
        "SMS communication",
        "Email communication",
        "Pickup instructions",
        "After-hours assistance",
        "Extensions",
        "Customer self-service",
        "Policy questions",
      ],
      description: "Give customers fast, consistent answers and automate communication throughout the rental journey.",
    },
    {
      icon: Settings,
      title: "Run the Operation",
      areas: [
        "Vehicle assignment",
        "Digital check-in",
        "Digital checkout",
        "Driver information",
        "License collection",
        "Rental agreements",
        "Internal workflows",
        "Staff notifications",
        "Return processes",
      ],
      description: "Reduce repetitive operational work and create a cleaner workflow for both customers and staff.",
    },
    {
      icon: Shield,
      title: "Pay & Protect",
      areas: [
        "Rental payments",
        "Security deposits",
        "Authorizations",
        "Deposit capture",
        "Partial capture",
        "Deposit release",
        "Refunds",
        "Payment workflows",
      ],
      description: "Design payment and deposit workflows around the way the rental business actually operates.",
    },
    {
      icon: Key,
      title: "Access & Manage the Fleet",
      areas: [
        "Connected vehicles",
        "Remote pickup",
        "Lockbox pickup",
        "In-person pickup",
        "Vehicle status",
        "Fleet availability",
        "Vehicle access workflows",
      ],
      description: "Support traditional, remote and contactless rental models without forcing every operator into the same process.",
    },
    {
      icon: TrendingUp,
      title: "Automate & Grow",
      areas: [
        "Abandoned inquiries",
        "Review requests",
        "Repeat renter communication",
        "Lead automation",
        "Customer follow-up",
        "Operational alerts",
        "Reporting",
        "Custom workflows",
        "Rental business automation",
      ],
      description: "Automate repetitive work while creating better visibility and more opportunities to recover and retain customers.",
    },
  ];

  return (
    <section id="integrations" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            One Partner Across Your Rental Operation.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            From the first customer inquiry to the final deposit release, we design the technology around how your rental business actually operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-8 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary pt-1">
                    {capability.title}
                  </h3>
                </div>
                <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                  {capability.areas.map((area, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/70 leading-relaxed border-t border-border pt-4">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Already have software you want to keep?
            </h3>
            <p className="text-base md:text-lg text-foreground/80 mb-6">
              We can work around it, connect it, extend it—or build what's missing.
            </p>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Ekilibrium does not require operators to replace their entire technology stack. We can integrate with existing rental systems, automate gaps between systems, create customer-facing experiences, or develop custom rental technology when off-the-shelf software is not enough.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Discuss Your Rental Operation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}