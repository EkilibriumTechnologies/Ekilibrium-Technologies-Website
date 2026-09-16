import { TrendingUp, Users, DollarSign, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CaseStudySectionEs() {
  const metrics = [
    { icon: TrendingUp, label: "Aumento en Reservas", value: "156%" },
    { icon: Users, label: "Reducción en Abandonos", value: "67%" },
    { icon: DollarSign, label: "Crecimiento de Ingresos", value: "$180K" },
    { icon: Clock, label: "Ahorro de Horas Admin", value: "25hrs/sem" },
  ];

  return (
    <section id="case-study" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-sm font-medium text-accent">Caso de Estudio</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Jeep Adventures PR
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Operador de renta de Jeeps en Puerto Rico que pasó de reservas telefónicas a una plataforma completa de reservas en línea con procesamiento automatizado de pagos y agentes de IA.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">El Desafío:</strong> Gestión manual de reservas, dobles reservas, consultas perdidas después de horas y sin presencia en línea en un mercado impulsado por turistas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">La Solución:</strong> Sistema completo de reservas con disponibilidad en tiempo real, pagos automatizados, asistente de reservas con IA y portal del cliente. Implementado en 6 semanas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 bg-card border-border text-center">
                  <metric.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1 font-mono">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-accent/5 border-accent/30">
              <p className="text-foreground italic leading-relaxed">
                "Pasamos de perder reservas por la noche a capturar cada lead. El asistente de IA maneja preguntas básicas mientras dormimos, y el sistema de reservas evita conflictos de programación. Nuestros ingresos crecieron 180K en el primer año."
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                — Carlos Méndez, Propietario, Jeep Adventures PR
              </p>
            </Card>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
            <Link href="#contact">
              Ver Caso de Estudio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}