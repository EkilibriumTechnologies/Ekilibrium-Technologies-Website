export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="bg-muted/50 rounded-lg border border-border p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-heading font-bold text-accent">LH</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                  Llarod Hernaiz
                </h3>
                <p className="text-sm text-muted-foreground">
                  Founder
                </p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  About Ekilibrium
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Ekilibrium Technologies was founded to address the unique operational challenges facing independent vehicle rental companies.
                  </p>
                  <p>
                    The company's approach combines product management experience, business operations knowledge, and hands-on rental industry experience to build technology that actually solves rental operating problems.
                  </p>
                  <p>
                    Rather than forcing operators to replace working systems, Ekilibrium focuses on integrations, automation, and custom development where existing rental software falls short.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    EXPERTISE
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Product Management</li>
                    <li>• Business Operations</li>
                    <li>• Technology Integration</li>
                    <li>• Rental Operations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                    FOCUS
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• SaaS Platforms</li>
                    <li>• Cloud Infrastructure</li>
                    <li>• Automation Systems</li>
                    <li>• Rental Technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}