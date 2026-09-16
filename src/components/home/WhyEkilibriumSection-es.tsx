import { Target, Code, Headphones } from "lucide-react";

export function WhyEkilibriumSectionEs() {
  const reasons = [
    {
      icon: Target,
      title: "Enfoque en la Industria",
      description: "Construimos exclusivamente para operaciones de renta de vehículos. No software genérico adaptado — todo está diseñado específicamente para tu negocio.",
    },
    {
      icon: Code,
      title: "Soluciones Personalizadas",
      description: "No cajas cerradas. Construimos software que se ajusta a tu operación, no te forzamos a adaptar tu negocio a plantillas genéricas.",
    },
    {
      icon: Headphones,
      title: "Soporte Directo",
      description: "Hablas directamente con los desarrolladores que construyeron tu sistema. Sin tickets de soporte de múltiples niveles, sin centros de llamadas.",
    },
  ];

  return (
    <section id="why-ekilibrium" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Qué Ekilibrium
          </h2>
          <p className="text-lg text-muted-foreground">
            No somos una plataforma SaaS genérica. Somos desarrolladores que construyen tecnología de renta específica para operadores independientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}