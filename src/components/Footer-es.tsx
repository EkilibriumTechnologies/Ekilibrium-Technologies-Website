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
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/es" className="inline-flex items-center gap-2 mb-4">
              <img src="/Meditative_Metallic_Logo_Design.png" alt="Ekilibrium Technologies" className="h-8 w-8" />
              <span className="font-bold text-lg tracking-tight">Ekilibrium</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Tecnología empresarial para operadores independientes de renta de vehículos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contacto</h3>
            <p className="text-sm text-muted-foreground">
              Puerto Rico
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Ekilibrium Technologies. Todos los derechos reservados.
          </p>
          <Link href="/" className="text-sm text-accent hover:text-accent/80 transition-colors">
            English
          </Link>
        </div>
      </div>
    </footer>
  );
}