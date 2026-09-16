import { Globe, Smartphone, BarChart, Zap } from "lucide-react";

export function SolutionsSectionEs() {
  const solutions = [
    {
      icon: Globe,
      title: "Presencia Web",
      description: "Sitios de reserva personalizados, gestión de disponibilidad en tiempo real y optimización SEO para tu mercado local.",
      features: ["Motor de Reservas", "Portal del Cliente", "SEO Local"],
    },
    {
      icon: Smartphone,
      title: "Automatización Móvil",
      description: "Automatización SMS/WhatsApp para recordatorios de reservas, actualizaciones de estado y comunicación con clientes.",
      features: ["Mensajería Automatizada", "Seguimiento de Estado", "Alertas de Flota"],
    },
    {
      icon: BarChart,
      title: "Inteligencia Operativa",
      description: "Paneles de control para seguimiento de flota, análisis de ingresos y métricas de rendimiento operativo.",
      features: ["Paneles en Tiempo Real", "Analítica de Ingresos", "Métricas de Flota"],
    },
    {
      icon: Zap,
      title: "Integración de Sistemas",
      description: "Conexión fluida con QuickBooks, Stripe, Twilio y otros servicios esenciales de negocio.",
      features: ["APIs de Contabilidad", "Pagos", "Comunicaciones"],
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluciones Integrales
          </h2>
          <p className="text-lg text-muted-foreground">
            Infraestructura tecnológica de nivel empresarial adaptada para operadores de renta independientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <solution.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}