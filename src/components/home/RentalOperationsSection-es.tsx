import { Calendar, Users, DollarSign, BarChart3 } from "lucide-react";

export function RentalOperationsSectionEs() {
  const operations = [
    {
      icon: Calendar,
      title: "Reservas y Disponibilidad",
      description: "Gestión de reservas en tiempo real con sincronización de calendarios y prevención de doble reserva.",
    },
    {
      icon: Users,
      title: "Gestión de Clientes",
      description: "Seguimiento de contratos, historial de rentas, verificación de licencias y automatización de comunicaciones.",
    },
    {
      icon: DollarSign,
      title: "Facturación y Pagos",
      description: "Procesamiento automatizado de pagos, seguimiento de depósitos e integración con contabilidad.",
    },
    {
      icon: BarChart3,
      title: "Analítica de Flota",
      description: "Tasas de utilización, métricas de ingresos y datos de rendimiento de vehículos.",
    },
  ];

  return (
    <section id="rental-operations" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Operaciones de Renta Unificadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas para operar tu negocio de renta de vehículos, desde la primera consulta hasta el retorno final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {operations.map((operation, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <operation.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{operation.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{operation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}