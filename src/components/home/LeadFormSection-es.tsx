import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LeadFormSectionEs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fleetSize, setFleetSize] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fields = Object.fromEntries(formData.entries());
    const data = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      company: fields.company,
      email: fields.email,
      phone: fields.phone,
      fleetSize,
      currentSoftware: fields.currentSoftware,
      challenge: fields.challenge,
      language: "es" as const,
      website: fields.website,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFleetSize("");
        (e.target as HTMLFormElement).reset();
      } else {
        setError("Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Solicitud Recibida
            </h3>
            <p className="text-muted-foreground mb-6">
              Revisaremos tu operación de renta y nos comunicaremos para discutir cómo Ekilibrium puede ayudarte.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="border-accent text-accent hover:bg-accent/10"
            >
              Enviar Otra Solicitud
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              ¿Qué Está Frenando Tu Operación de Renta?
            </h2>
            <p className="text-lg text-muted-foreground">
              Muéstranos cómo opera tu negocio de renta hoy. Identificaremos dónde las reservaciones, pagos, comunicación con clientes, acceso a vehículos y operaciones diarias pueden simplificarse, integrarse o automatizarse.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border shadow-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Compañía *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fleetSize">Tamaño de Flota *</Label>
                  <Select name="fleetSize" required onValueChange={setFleetSize}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Selecciona tamaño de flota" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 vehículos</SelectItem>
                      <SelectItem value="6-10">6-10 vehículos</SelectItem>
                      <SelectItem value="11-25">11-25 vehículos</SelectItem>
                      <SelectItem value="26-50">26-50 vehículos</SelectItem>
                      <SelectItem value="51-100">51-100 vehículos</SelectItem>
                      <SelectItem value="100+">100+ vehículos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentSoftware">Software de Renta Actual</Label>
                  <Input
                    id="currentSoftware"
                    name="currentSoftware"
                    placeholder="ej. Turo, GetAround, Personalizado"
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Mayor Desafío Operacional *</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder="Describe tu mayor desafío en operaciones de renta..."
                  className="border-border resize-none"
                  required
                />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Enviando..." : "Reservar Evaluación Tecnológica"}
              </Button>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Respetamos tu privacidad. Tu información solo se usará para contactarte sobre soluciones de tecnología de renta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}