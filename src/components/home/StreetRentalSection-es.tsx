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
    <section id="street-rental" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-xs sm:text-sm font-medium text-accent">Producto Principal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Street Rental
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Software completo de gestión de rentas construido para operadores independientes. Sitio web, reservas, pagos, contratos y automatización — todo en una sola plataforma.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Específicamente diseñado para negocios de renta de car, Jeep, exotic, van, golf cart y ATV que manejan operaciones locales y quieren el nivel de tecnología de las empresas grandes.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
            >
              <Link href="#contact">
                Explorar Street Rental
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div>
            <Card className="p-5 md:p-6 bg-card border-border">
              <div className="space-y-5 md:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{feature.description}</p>
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