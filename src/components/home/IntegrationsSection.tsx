export function IntegrationsSection() {
  const categories = [
    { name: "Payments", techs: ["Stripe"] },
    { name: "Vehicle Connectivity", techs: ["Smartcar"] },
    { name: "Communications", techs: ["Telnyx"] },
    { name: "Automation", techs: ["n8n"] },
    { name: "Marketing", techs: ["Mailchimp"] },
    { name: "Mapping", techs: ["Mapbox"] },
    { name: "Infrastructure", techs: ["Supabase", "Netlify", "Railway"] },
  ];

  return (
    <section id="integrations" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Connect the Tools Your Rental Business Already Uses.
          </h2>
          <p className="text-xl font-semibold text-foreground/80 mb-4">
            Keep the systems that work. Connect what doesn't.
          </p>
          <p className="text-base text-muted-foreground">
            Ekilibrium integrates with existing rental technology rather than forcing unnecessary replacement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-muted/30 rounded text-sm font-medium text-foreground"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Technologies We Work With
          </p>
        </div>
      </div>
    </section>
  );
}