import { Search, Calendar, FileCheck, Key, RefreshCw } from "lucide-react";

export function RentalJourneySectionEs() {
  const steps = [
    {
      icon: Search,
      title: "Consulta en Línea",
      description: "El cliente busca disponibilidad y precios en tu sitio web",
      status: "Captura de Lead Automatizada",
    },
    {
      icon: Calendar,
      title: "Reserva y Pago",
      description: "Reserva instantánea con verificación de disponibilidad en tiempo real",
      status: "Confirmación Automática",
    },
    {
      icon: FileCheck,
      title: "Pre-Renta",
      description: "Verificación de documentos, firma digital de contratos, seguimiento de depósitos",
      status: "Preparación de Flota",
    },
    {
      icon: Key,
      title: "Recogida",
      description: "Proceso de check-out con inspección del vehículo e instrucciones",
      status: "Vehículo Activo",
    },
    {
      icon: RefreshCw,
      title: "Devolución",
      description: "Check-in, inspección de daños, procesamiento de cargos finales",
      status: "Facturación Completada",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            El Recorrido de la Renta
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Software que maneja cada etapa del ciclo de vida de la renta, de principio a fin.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <step.icon className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">{step.description}</p>
                  <span className="text-xs font-medium text-accent">{step.status}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-7 md:top-8 left-[calc(50%+1.75rem)] md:left-[calc(50%+2rem)] w-[calc(100%-3.5rem)] md:w-[calc(100%-4rem)] h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 break-words">{step.description}</p>
                <span className="text-xs font-medium text-accent">{step.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}