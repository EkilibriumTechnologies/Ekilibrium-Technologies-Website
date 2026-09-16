import { Users, Calendar, CreditCard, Shield, Key, MessageSquare, MapPin, RotateCcw } from "lucide-react";

export function RentalOperationsSection() {
  const operations = [
    { icon: Users, label: "Customer questions" },
    { icon: Calendar, label: "Availability" },
    { icon: Calendar, label: "Reservations" },
    { icon: CreditCard, label: "Payments" },
    { icon: Shield, label: "Security deposits" },
    { icon: Key, label: "Vehicle assignment" },
    { icon: MessageSquare, label: "Check-in" },
    { icon: MapPin, label: "Pickup coordination" },
    { icon: MessageSquare, label: "Customer communication" },
    { icon: RotateCcw, label: "Returns" },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Rental Operations Get Complicated Fast.
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple systems. Manual coordination. Customer questions. Vehicle logistics. Payment processing. All competing for attention.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {operations.map((operation, index) => {
            const Icon = operation.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-accent mb-3" />
                <span className="text-sm text-center text-foreground font-medium">
                  {operation.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-primary">
            Ekilibrium connects the pieces.
          </p>
        </div>
      </div>
    </section>
  );
}