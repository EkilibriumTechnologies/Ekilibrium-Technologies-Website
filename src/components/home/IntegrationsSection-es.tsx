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
    <section id="integrations" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Integraciones de Sistemas
          </h2>
          <p className="text-lg text-muted-foreground">
            Conexión fluida con las herramientas de negocio que ya utilizas. No te hacemos cambiar de sistema — nos integramos con tu infraestructura existente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">{integration.category}</h3>
              </div>
              <div className="space-y-2 mb-4">
                {integration.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{integration.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas una integración específica? Construimos conexiones personalizadas para tu stack tecnológico.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="#contact">Discute Tu Operación de Renta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}