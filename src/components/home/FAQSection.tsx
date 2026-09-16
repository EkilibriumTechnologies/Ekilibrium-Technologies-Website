import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need to replace my existing rental software?",
      answer: "Not necessarily. Ekilibrium's integration-first approach means we can often connect and enhance your current systems rather than forcing a complete replacement. We only recommend custom software when existing solutions cannot support your specific workflows.",
    },
    {
      question: "Can Ekilibrium integrate with my current reservation system?",
      answer: "Yes, most reservation systems can be integrated through APIs, webhooks, or automation platforms. We evaluate your current technology stack and determine the best integration approach for your specific setup.",
    },
    {
      question: "Can AI check actual vehicle availability?",
      answer: "Yes, when properly integrated with your reservation system. AI assistants can access real-time availability data, rental policies, and pricing information to provide accurate responses to customer inquiries.",
    },
    {
      question: "Can you automate SMS and email communication?",
      answer: "Yes, Ekilibrium can automate reservation confirmations, check-in instructions, pickup details, return reminders, and follow-up communications through integrated messaging platforms like Telnyx and email services.",
    },
    {
      question: "Can an AI assistant learn our rental policies?",
      answer: "Yes, AI assistants can be trained on your specific rental policies, deposit requirements, insurance options, driver requirements, pickup procedures, and operational guidelines to provide accurate, business-specific responses.",
    },
    {
      question: "Can security deposit workflows be automated?",
      answer: "Yes, through payment processor integrations like Stripe. Deposits can be authorized at booking, captured when necessary, partially captured for damages, released automatically, and managed through automated workflows.",
    },
    {
      question: "Can you support contactless rentals?",
      answer: "Yes, Ekilibrium supports contactless rental workflows through connected vehicle technology (Smartcar), lockbox systems, digital check-in/checkout, remote vehicle access, and automated communication flows.",
    },
    {
      question: "Can you create a direct booking website?",
      answer: "Yes, Ekilibrium builds custom rental websites focused on vehicle presentation, availability display, pricing transparency, reservation flow, and customer experience that integrate with your rental operations.",
    },
    {
      question: "What is Street Rental?",
      answer: "Street Rental is Ekilibrium's own rental operating platform built for independent vehicle rental companies. It supports traditional, contactless, and scan-and-go rental models with capabilities for fleet management, reservations, payments, deposits, check-in, and customer communication.",
    },
    {
      question: "Do you work with small fleets?",
      answer: "Yes, Ekilibrium works with independent rental companies ranging from small operations (5-10 vehicles) to larger multi-location businesses (100+ vehicles). Our solutions are designed to scale with your operation.",
    },
    {
      question: "Can you build custom rental workflows?",
      answer: "Yes, when existing rental software cannot support your specific operational requirements, Ekilibrium can design and build custom rental technology tailored to your business workflows and customer experience goals.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about rental technology and operations.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-heading font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}