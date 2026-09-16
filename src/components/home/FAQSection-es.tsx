import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSectionEs() {
  const faqs = [
    {
      question: "¿Cómo se diferencia Ekilibrium de otras plataformas de software de renta?",
      answer:
        "No somos una plataforma SaaS genérica. Construimos soluciones personalizadas específicamente para operaciones de renta de vehículos. Cada sistema se adapta a tus flujos de trabajo exactos, no te forzamos a conformarte con plantillas genéricas.",
    },
    {
      question: "¿Cuál es el tamaño de flota mínimo con el que trabajan?",
      answer:
        "Trabajamos con operaciones desde 5 vehículos en adelante. Si estás manejando reservas manualmente o enfrentando desafíos operativos, probablemente seamos un buen ajuste independientemente del tamaño de tu flota.",
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer:
        "La implementación típica toma 4-8 semanas dependiendo de la complejidad. Sistemas de reservas básicos pueden estar en vivo en 4 semanas. Soluciones completas con agentes de IA e integraciones múltiples usualmente toman 6-8 semanas.",
    },
    {
      question: "¿Necesito cambiar mi software de contabilidad o procesador de pagos?",
      answer:
        "No. Nos integramos con tus herramientas existentes — QuickBooks, Stripe, Square, o lo que estés usando actualmente. El punto es trabajar con tu infraestructura, no reemplazarla.",
    },
    {
      question: "¿Qué pasa si necesito algo personalizado que no ofrecen?",
      answer:
        "Ese es literalmente nuestro negocio. Si lo necesitas y funciona para operaciones de renta, lo construimos. Sin características bloqueadas, sin 'lo añadiremos al roadmap'. Si es crítico para tu operación, lo implementamos.",
    },
    {
      question: "¿Ofrecen soporte continuo después del lanzamiento?",
      answer:
        "Sí. Soporte directo de los desarrolladores que construyeron tu sistema. Sin tickets de soporte de múltiples niveles, sin centros de llamadas. Mantenimiento, actualizaciones y adición de características son parte del servicio continuo.",
    },
    {
      question: "¿Cómo funciona la estructura de precios?",
      answer:
        "Los precios se basan en el alcance del proyecto y requerimientos continuos. Proporcionamos una estimación fija después de la evaluación inicial. Sin costos ocultos, sin cargos sorpresa por características 'premium'.",
    },
    {
      question: "¿Pueden trabajar con operaciones fuera de Puerto Rico?",
      answer:
        "Sí. Aunque estamos basados en Puerto Rico, trabajamos con operaciones de renta en todo Estados Unidos y Caribe. Todo el desarrollo y soporte es remoto.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respuestas comunes sobre cómo trabajamos con operaciones de renta.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}