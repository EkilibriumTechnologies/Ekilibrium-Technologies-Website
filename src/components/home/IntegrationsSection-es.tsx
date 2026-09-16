import { Link as LinkIcon, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function IntegrationsSectionEs() {
  const integrations = [
    {
      category: "Contabilidad",
      services: ["QuickBooks", "Xero", "FreshBooks"],
      description: "Sincroniza automáticamente facturas, pagos y métricas financieras",
    },
    {
      category: "Pagos",
      services: ["Stripe", "Square", "PayPal"],
      description: "Procesamiento de pagos seguro con gestión automatizada de depósitos",
    },
    {
      category: "Comunicaciones",
      services: ["Twilio", "WhatsApp Business", "SendGrid"],
      description: "SMS, WhatsApp y email automatizados para comunicación con clientes",
    },
    {
      category: "Calendarios",
      services: ["Google Calendar", "Outlook", "iCal"],
      description: "Sincroniza disponibilidad y horarios de reservas en todas plataformas",
    },
    {
      category: "Firmas",
      services: ["DocuSign", "HelloSign", "Adobe Sign"],
      description: "Firma electrónica para contratos de renta y documentos legales",
    },
    {
      category: "Analítica",
      services: ["Google Analytics", "Mixpanel", "Segment"],
      description: "Seguimiento de métricas de sitio web y conversión de reservas",
    },
  ];

  return (
    <section id="integrations" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 md:mb-6">
            Integraciones de Sistemas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Conexión fluida con las herramientas de negocio que ya utilizas. No te hacemos cambiar de sistema — nos integramos con tu infraestructura existente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-5 md:p-6 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{integration.category}</h3>
              </div>
              <div className="space-y-2 mb-4">
                {integration.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center gap-2">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground break-words">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">{integration.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            ¿Necesitas una integración específica? Construimos conexiones personalizadas para tu stack tecnológico.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Link href="#contact">Discute Tu Operación de Renta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}