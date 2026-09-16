import { Lightbulb, Bot, MessageCircle, Workflow, Smartphone, Key, Globe, CreditCard, Link as LinkIcon, Code } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Lightbulb,
      title: "Rental Operations Consulting",
      description: "Analyze existing workflows and determine what should be simplified, integrated or automated.",
    },
    {
      icon: Bot,
      title: "AI Reservation Assistants",
      description: "Help customers navigate vehicles, availability, pricing, policies and the booking journey.",
    },
    {
      icon: MessageCircle,
      title: "Rental FAQ AI",
      description: "Answer business-specific questions about deposits, insurance, driver requirements, pickup, returns, extensions, cancellation and policies.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate reservation confirmations, check-in links, pickup instructions, return reminders, internal alerts, customer follow-ups, review requests and abandoned inquiry recovery.",
    },
    {
      icon: Smartphone,
      title: "Digital Check-In & Check-Out",
      description: "Support mobile-first license collection, driver information, terms acceptance, agreements, security deposits, vehicle confirmation and return workflows.",
    },
    {
      icon: Key,
      title: "Contactless Rental Technology",
      description: "Support remote pickup, connected vehicles, lockbox workflows, hybrid pickup and self-service rental experiences.",
    },
    {
      icon: Globe,
      title: "Direct Booking Experiences",
      description: "Build rental websites around vehicle presentation, availability, pricing, booking and customer experience.",
    },
    {
      icon: CreditCard,
      title: "Payments & Deposits",
      description: "Handle rental payments, deposit authorization, deposit capture, partial capture, deposit release and refund workflows.",
    },
    {
      icon: LinkIcon,
      title: "Integrations",
      description: "Connect existing rental technology rather than forcing unnecessary replacement.",
    },
    {
      icon: Code,
      title: "Custom Rental Software",
      description: "Build specialized technology when existing rental systems cannot support the workflow.",
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Technology Built Around Your Rental Operation.
          </h2>
          <p className="text-lg text-muted-foreground">
            From operational consulting to custom software development, Ekilibrium provides the technology infrastructure independent rental companies need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}