import { Calendar, CreditCard, MapPin, Shield, Clock, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function StreetRentalSectionEs() {
  const features = [
    {
      icon: Calendar,
      title: "Reservas Instantáneas",
      description: "Los clientes reservan directamente en tu sitio web con confirmación en tiempo real",
    },
    {
      icon: CreditCard,
      title: "Pagos Integrados",
      description: "Stripe, Square, PayPal — procesamiento de pagos seguro y automatizado",
    },
    {
      icon: MapPin,
      title: "SEO Local",
      description: "Optimizado para búsquedas de 'renta de jeeps cerca de mí' en tu mercado",
    },
    {
      icon: Shield,
      title: "Documentos Digitales",
      description: "Contratos electrónicos, verificación de licencias y firma digital de documentos",
    },
    {
      icon: Clock,
      title: "Recordatorios Automáticos",
      description: "SMS y email automatizados para confirmaciones, recordatorios y seguimientos",
    },
    {
      icon: Smartphone,
      title: "Optimizado para Móvil",
      description: "Experiencia de reserva perfecta en cualquier dispositivo",
    },
  ];

  return (
    <section id="street-rental" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Producto Principal</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Street Rental
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Software completo de gestión de rentas construido para operadores independientes. Sitio web, reservas, pagos, contratos y automatización — todo en una sola plataforma.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Específicamente diseñado para negocios de renta de car, Jeep, exotic, van, golf cart y ATV que manejan operaciones locales y quieren el nivel de tecnología de las empresas grandes.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#contact">
                Explorar Street Rental
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div>
            <Card className="p-6 bg-card border-border">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}