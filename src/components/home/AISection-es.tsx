import { MessageSquare, Calendar, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AISectionEs() {
  const agents = [
    {
      icon: MessageSquare,
      title: "Asistente de Reservas",
      description: "Responde preguntas sobre disponibilidad, precios y políticas 24/7. Califica leads y escala consultas complejas.",
      capability: "Lenguaje Natural + Base de Conocimiento",
    },
    {
      icon: Calendar,
      title: "Coordinador de Agenda",
      description: "Gestiona horarios de recogida/devolución, envía recordatorios y maneja solicitudes de cambio.",
      capability: "Automatización de Calendario",
    },
    {
      icon: Users,
      title: "Especialista en Clientes",
      description: "Seguimiento post-renta, solicitudes de reseñas y manejo de problemas comunes de servicio.",
      capability: "CRM Conversacional",
    },
    {
      icon: TrendingUp,
      title: "Analista de Operaciones",
      description: "Monitorea métricas de flota, identifica problemas de ingresos y sugiere ajustes operativos.",
      capability: "Análisis Predictivo",
    },
  ];

  return (
    <section id="ai-agents" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agentes de IA para Rentas
          </h2>
          <p className="text-lg text-muted-foreground">
            Agentes de IA especializados que manejan tareas operativas de rutina, permitiéndote concentrarte en hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <agent.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{agent.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{agent.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-xs font-medium text-accent">{agent.capability}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg border border-accent/30 bg-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Operaciones Aumentadas por IA</h3>
            <p className="text-muted-foreground leading-relaxed">
              No estamos reemplazando tu equipo — estamos aumentándolo. Los agentes de IA manejan tareas repetitivas de alto volumen mientras tu personal se enfoca en experiencias excepcionales para los clientes y decisiones estratégicas de negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}