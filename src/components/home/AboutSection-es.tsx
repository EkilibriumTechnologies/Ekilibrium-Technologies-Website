import { User, MapPin, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSectionEs() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre Ekilibrium
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <User className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Fundador y Desarrollador Principal</h3>
              <p className="text-lg text-muted-foreground">Michael Brito</p>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Ekilibrium Technologies fue fundada para llevar tecnología de nivel empresarial a operadores independientes de renta de vehículos — el tipo de software que las grandes empresas tienen internamente, pero construido específicamente para negocios más pequeños.
            </p>

            <p>
              Después de años construyendo sistemas empresariales para compañías Fortune 500, vi que los operadores independientes de renta enfrentaban los mismos desafíos operativos pero carecían del acceso a soluciones tecnológicas adecuadas. No necesitaban software empresarial complejo — necesitaban herramientas precisas construidas para sus flujos de trabajo específicos.
            </p>

            <p>
              Trabajamos directamente con operadores de renta para construir software que se ajusta a cómo realmente funcionan sus negocios. No plantillas genéricas, no suscripciones SaaS infladas — solo tecnología sólida que resuelve problemas reales de operaciones de renta.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Basado en Puerto Rico</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Enfoque en Industria de Renta</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}