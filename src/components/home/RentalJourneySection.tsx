import { ArrowRight } from "lucide-react";

export function RentalJourneySection() {
  const journeySteps = [
    "INQUIRY",
    "AVAILABILITY",
    "QUOTE",
    "RESERVATION",
    "PAYMENT",
    "VEHICLE ASSIGNMENT",
    "CHECK-IN",
    "PICKUP",
    "RENTAL",
    "RETURN",
    "DEPOSIT SETTLEMENT",
    "FOLLOW-UP",
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            From Inquiry to Return.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Instead of adding another disconnected tool, Ekilibrium looks at how the entire rental operation works together.
          </p>
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">
              ONE CONNECTED RENTAL JOURNEY
            </span>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors text-center">
                <span className="text-xs font-mono font-semibold text-foreground">
                  {step}
                </span>
              </div>
              {index < journeySteps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-accent mt-4" />
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-3">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                <span className="text-sm font-mono font-semibold text-foreground">
                  {step}
                </span>
              </div>
              {index < journeySteps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-accent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}