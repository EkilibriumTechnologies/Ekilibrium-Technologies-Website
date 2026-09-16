import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export function LeadFormSectionEs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    fleetSize: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container max-w-2xl">
          <Card className="p-12 text-center bg-card border-border">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">¡Gracias por tu Interés!</h3>
            <p className="text-muted-foreground mb-6">
              Nos comunicaremos contigo dentro de 1 día hábil para discutir tus necesidades de tecnología de renta y agendar tu evaluación.
            </p>
            <Button
              variant="outline"
              onClick={() => setSubmitted(false)}
              className="border-border hover:bg-muted/50"
            >
              Enviar Otra Consulta
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Reserva una Evaluación Tecnológica de Renta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu operación de renta. Discutiremos tus desafíos actuales y describiremos exactamente cómo la tecnología correcta puede escalar tu negocio.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nombre Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-foreground">
                  Nombre del Negocio *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="bg-background border-border"
                  placeholder="Tu Compañía de Renta"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fleetSize" className="text-foreground">
                Tamaño de Flota *
              </Label>
              <Input
                id="fleetSize"
                name="fleetSize"
                required
                value={formData.fleetSize}
                onChange={handleChange}
                className="bg-background border-border"
                placeholder="ej. 12 Jeeps, 6 vans, 8 carritos de golf"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Cuéntanos Sobre Tu Operación *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-background border-border resize-none"
                placeholder="¿Qué vehículos rentas? ¿Cuáles son tus mayores desafíos operativos? ¿Qué te gustaría automatizar?"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Agendar Evaluación
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Nos comunicaremos dentro de 1 día hábil para agendar una llamada de evaluación de 30 minutos.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}