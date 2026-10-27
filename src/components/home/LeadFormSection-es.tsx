import { useRef, useState } from "react";
import { formText, submitRentalTechAuditForm } from "@/lib/rental-tech-audit-form";
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
  const submitLock = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitLock.current) {
      return;
    }

    submitLock.current = true;
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;

    try {
      const outcome = await submitRentalTechAuditForm({
        firstName: formText(form, "firstName"),
        lastName: formText(form, "lastName"),
        company: formText(form, "company"),
        email: formText(form, "email"),
        phone: formText(form, "phone"),
        fleetSize,
        currentSoftware: formText(form, "currentSoftware"),
        challenge: formText(form, "challenge"),
        language: "es",
        website: formText(form, "website"),
        botField: formText(form, "bot-field"),
      });

      if (outcome.status === "success") {
        setIsSubmitted(true);
        setFleetSize("");
        form.reset();
        return;
      }

      if (outcome.reason === "rejected") {
        console.error("contact_form_submit_failed");
      }
      setError(
        outcome.reason === "fleetSize"
          ? "Selecciona el tamaño de la flota antes de enviar."
          : "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
      );
    } finally {
      submitLock.current = false;
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
            <form
              name="rental-tech-audit"
              method="POST"
              action="/__forms.html"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="rental-tech-audit" />
              <input type="hidden" name="language" value="es" />
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
                  <Select required value={fleetSize} onValueChange={setFleetSize}>
                    <SelectTrigger id="fleetSize" className="border-border">
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
                <div
                  role="alert"
                  className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                >
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
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
                <label htmlFor="bot-field">No llenes este campo</label>
                <input
                  id="bot-field"
                  name="bot-field"
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