import { Workflow, MessageCircle, Bell, FileText } from "lucide-react";

export function AutomationSectionEs() {
  const automations = [
    {
      icon: Workflow,
      title: "Flujos de Reserva",
      description: "Confirmación → Recordatorio Pre-Renta → Instrucciones de Recogida → Recordatorio de Devolución → Solicitud de Reseña",
      trigger: "Activado por Nueva Reserva",
    },
    {
      icon: MessageCircle,
      title: "Comunicación con Clientes",
      description: "Mensajes SMS/WhatsApp automatizados para actualizaciones de estado, alertas de pago e información de reserva",
      trigger: "Activado por Eventos de Estado",
    },
    {
      icon: Bell,
      title: "Alertas Operacionales",
      description: "Notificaciones para devoluciones vencidas, problemas de mantenimiento, solicitudes de extensión y alertas de disponibilidad",
      trigger: "Activado por Condiciones de Sistema",
    },
    {
      icon: FileText,
      title: "Procesamiento de Documentos",
      description: "Generación automática de contratos, envío de facturas, procesamiento de comprobantes y archivado de documentos",
      trigger: "Activado por Transacciones",
    },
  ];

  return (
    <section id="automation" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automatización de Operaciones
          </h2>
          <p className="text-lg text-muted-foreground">
            Flujos de trabajo automatizados que manejan tareas rutinarias, reducen trabajo manual y aseguran procesos consistentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {automations.map((automation, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <automation.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{automation.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{automation.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-muted-foreground">{automation.trigger}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}