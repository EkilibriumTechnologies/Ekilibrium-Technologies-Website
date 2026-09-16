import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSectionEs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Zap className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-accent">Tecnología Empresarial para Operaciones de Renta</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
              Software de Flota y Automatización para Negocios de Renta
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 font-medium">
              Tecnología de nivel empresarial para operadores independientes de renta de vehículos. Desde reservas en línea hasta agentes de IA, construimos la infraestructura de software que escala tu operación de renta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                <Link href="#contact">
                  Evaluación Tecnológica Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-border hover:bg-muted/50">
                <Link href="#solutions">Explorar Soluciones</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Nivel Empresarial</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">Escalable</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="p-4 sm:p-6 bg-card border-border shadow-xl">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground truncate">Panel de Operaciones</h3>
                  <div className="flex gap-1 flex-shrink-0">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-foreground truncate">JEP-2024</span>
                    </div>
                    <span className="text-xs font-medium text-accent whitespace-nowrap ml-2">Disponible</span>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-foreground truncate">JEP-2025</span>
                    </div>
                    <span className="text-xs font-medium text-accent whitespace-nowrap ml-2">En Renta</span>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-foreground truncate">VAN-103</span>
                    </div>
                    <span className="text-xs font-medium text-yellow-600 whitespace-nowrap ml-2">Mantenimiento</span>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-foreground truncate">ATV-207</span>
                    </div>
                    <span className="text-xs font-medium text-accent whitespace-nowrap ml-2">Disponible</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-foreground font-mono">42</div>
                      <div className="text-xs text-muted-foreground">Vehículos</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-accent font-mono">89%</div>
                      <div className="text-xs text-muted-foreground">Utilización</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-foreground font-mono">$47K</div>
                      <div className="text-xs text-muted-foreground">MTD</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}