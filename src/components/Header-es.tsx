import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function HeaderEs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Soluciones", href: "#solutions" },
    { name: "Street Rental", href: "#street-rental" },
    { name: "Agentes de IA", href: "#ai-agents" },
    { name: "Integraciones", href: "#integrations" },
    { name: "Caso de Estudio", href: "#case-study" },
    { name: "Nosotros", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/es" className="flex items-center gap-2">
          <img src="/Meditative_Metallic_Logo_Design.png" alt="Ekilibrium Technologies" className="h-8 w-8" />
          <span className="font-bold text-lg md:text-xl tracking-tight">Ekilibrium</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="#contact">Evaluación Tecnológica</Link>
          </Button>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full">
              <Link href="#contact">Evaluación Tecnológica</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}