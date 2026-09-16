import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                RENTAL TECHNOLOGY & AUTOMATION
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
              The Technology Behind Modern Rental Operations.
            </h1>

            <p className="text-xl text-foreground/80 font-medium">
              Reservations. Payments. Check-in. Vehicle access. Customer communication. AI. One connected operation.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ekilibrium Technologies builds software, automation, AI and connected customer experiences for independent vehicle rental companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">
                Book a Rental Tech Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-border hover:bg-muted/50">
                Explore Solutions
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">TODAY'S RENTALS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-xs text-muted-foreground font-mono">LIVE</span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded border border-border hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-mono">9:00 AM</span>
                      <span className="text-sm font-semibold text-foreground">Wrangler 029</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                    <span className="text-xs font-medium text-accent">Ready</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background rounded border border-border hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-mono">10:30 AM</span>
                      <span className="text-sm font-semibold text-foreground">Gladiator 031</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full">
                    <Clock className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-medium text-blue-500">Check-In Sent</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background rounded border border-border hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-mono">12:00 PM</span>
                      <span className="text-sm font-semibold text-foreground">High Tide 042</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium text-green-500">Deposit Held</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-background rounded border border-border hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-mono">2:30 PM</span>
                      <span className="text-sm font-semibold text-foreground">Wrangler 018</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 rounded-full">
                    <AlertCircle className="h-3 w-3 text-orange-500" />
                    <span className="text-xs font-medium text-orange-500">Return Due</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-card rounded-lg border border-border shadow-lg p-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-semibold text-foreground">CU</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/50 rounded-lg px-3 py-2">
                      <p className="text-sm text-foreground">"Can I pick up after 7 PM?"</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 text-right">
                    <div className="bg-accent/10 rounded-lg px-3 py-2 inline-block border border-accent/20">
                      <p className="text-xs text-muted-foreground font-mono mb-1">
                        ✓ Reservation found
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mb-1">
                        ✓ Policy checked
                      </p>
                      <p className="text-xs text-accent font-mono">
                        → Remote pickup available
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent-foreground">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}