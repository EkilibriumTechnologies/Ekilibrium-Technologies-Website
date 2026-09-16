import Link from "next/link";

export function FooterEs() {
  const links = [
    { name: "Soluciones", href: "#solutions" },
    { name: "Street Rental", href: "#street-rental" },
    { name: "Agentes de IA", href: "#ai-agents" },
    { name: "Integraciones", href: "#integrations" },
    { name: "Caso de Estudio", href: "#case-study" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="text-base sm:text-lg font-heading font-bold text-primary mb-2">
              Ekilibrium Technologies
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Tecnología de Renta y Automatización
            </div>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Navegación</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Contacto</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Puerto Rico
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-xs text-muted-foreground text-center">
              © 2026 Ekilibrium Technologies. Todos los derechos reservados.
            </p>
            <Link 
              href="/" 
              className="text-xs text-accent hover:text-accent/80 transition-colors"
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}