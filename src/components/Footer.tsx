import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Solutions", href: "#solutions" },
    { name: "Street Rental", href: "#street-rental" },
    { name: "AI for Rentals", href: "#ai-rentals" },
    { name: "Integrations", href: "#integrations" },
    { name: "Case Study", href: "#case-study" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const legal = [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-lg font-heading font-bold text-primary mb-2">
              Ekilibrium Technologies
            </div>
            <div className="text-sm text-muted-foreground">
              Rental Technology & Automation
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} Ekilibrium Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}