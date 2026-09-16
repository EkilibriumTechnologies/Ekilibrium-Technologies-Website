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
    <section id="rental-journey" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            El Recorrido de la Renta
          </h2>
          <p className="text-lg text-muted-foreground">
            Software que maneja cada etapa del ciclo de vida de la renta, de principio a fin.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <span className="text-xs font-medium text-accent">{step.status}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}