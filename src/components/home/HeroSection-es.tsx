import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSectionEs() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Tecnología Empresarial para Operaciones de Renta</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Software de Flota y Automatización para Negocios de Renta
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
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

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Nivel Empresarial</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Escalable</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card className="p-6 bg-card border-border shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <h3 className="font-semibold text-foreground">Panel de Operaciones de Flota</h3>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-mono text-foreground">JEP-2024</span>
                      <span className="text-xs text-muted-foreground">Jeep Wrangler Rubicon</span>
                    </div>
                    <span className="text-xs font-medium text-accent">Disponible</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-sm font-mono text-foreground">JEP-2025</span>
                      <span className="text-xs text-muted-foreground">Jeep Gladiator Mojave</span>
                    </div>
                    <span className="text-xs font-medium text-accent">En Renta</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm font-mono text-foreground">VAN-103</span>
                      <span className="text-xs text-muted-foreground">Mercedes Sprinter</span>
                    </div>
                    <span className="text-xs font-medium text-yellow-600 dark:text-yellow-500">Mantenimiento</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-mono text-foreground">ATV-207</span>
                      <span className="text-xs text-muted-foreground">Polaris RZR XP 1000</span>
                    </div>
                    <span className="text-xs font-medium text-accent">Disponible</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-foreground font-mono">42</div>
                      <div className="text-xs text-muted-foreground">Vehículos Totales</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent font-mono">89%</div>
                      <div className="text-xs text-muted-foreground">Utilización</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground font-mono">$47K</div>
                      <div className="text-xs text-muted-foreground">Ingresos MTD</div>
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