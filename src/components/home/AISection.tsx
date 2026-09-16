import { Brain, MessageSquare, Zap } from "lucide-react";

export function AISection() {
  const aiCapabilities = [
    {
      icon: MessageSquare,
      title: "Reservation Assistant",
      description: "Help customers find vehicles, check availability, understand pricing and complete bookings.",
      examples: [
        '"Do you have a Jeep available Friday through Monday?"',
        '"How much is the security deposit?"',
        '"Can I pick up after hours?"',
      ],
    },
    {
      icon: Brain,
      title: "FAQ Assistant",
      description: "Answer business-specific questions about policies, procedures and rental operations.",
      examples: [
        '"Can I extend my rental?"',
        '"Where do I return the vehicle?"',
        '"Can I add another driver?"',
      ],
    },
    {
      icon: Zap,
      title: "Operator Automation Assistant",
      description: "Automate internal workflows, status updates and operational communications.",
      examples: [
        "Send check-in links 24 hours before pickup",
        "Alert staff when deposits clear",
        "Trigger return reminders automatically",
      ],
    },
  ];

  return (
    <section id="ai-agents" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            AI That Understands Rental Operations.
          </h2>
          <p className="text-lg text-muted-foreground">
            AI assistants that can interact with business knowledge, rental policies, availability, reservations and customer data — where appropriate integrations exist.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="bg-card rounded-lg border border-border p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
                <div className="space-y-2 pt-2">
                  {capability.examples.map((example, i) => (
                    <div key={i} className="bg-muted/50 rounded px-3 py-2">
                      <p className="text-xs text-foreground/80">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto p-6 bg-accent/5 rounded-lg border border-accent/20">
          <p className="text-sm text-center text-foreground">
            All AI interactions include <span className="font-semibold text-accent">human escalation</span> for exceptions and complex scenarios that require operator judgment.
          </p>
        </div>
      </div>
    </section>
  );
}