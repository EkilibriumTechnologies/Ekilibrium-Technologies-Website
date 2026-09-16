import { ArrowRight } from "lucide-react";

export function AutomationSection() {
  const automationFlow = [
    { label: "Reservation Created", type: "trigger" },
    { label: "Confirmation", type: "action" },
    { label: "Operator Notification", type: "action" },
    { label: "Pre-Arrival Reminder", type: "action" },
    { label: "Check-In Link", type: "action" },
    { label: "Deposit Status", type: "check" },
    { label: "Pickup Instructions", type: "action" },
    { label: "Return Reminder", type: "action" },
    { label: "Checkout", type: "action" },
    { label: "Review Request", type: "action" },
    { label: "Repeat Customer Follow-Up", type: "action" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Automate the Work Between the Bookings.
          </h2>
          <p className="text-lg text-muted-foreground">
            From reservation to follow-up, automation handles routine communication and operational tasks so you can focus on running your rental business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4">
            {automationFlow.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    step.type === "trigger"
                      ? "bg-accent/10 border-accent text-accent"
                      : step.type === "check"
                      ? "bg-orange-500/10 border-orange-500 text-orange-500"
                      : "bg-card border-border text-foreground"
                  }`}
                >
                  {step.label}
                </div>
                {index < automationFlow.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-3">
            {automationFlow.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium ${
                    step.type === "trigger"
                      ? "bg-accent/10 border-accent text-accent"
                      : step.type === "check"
                      ? "bg-orange-500/10 border-orange-500 text-orange-500"
                      : "bg-card border-border text-foreground"
                  }`}
                >
                  {step.label}
                </div>
                {index < automationFlow.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}