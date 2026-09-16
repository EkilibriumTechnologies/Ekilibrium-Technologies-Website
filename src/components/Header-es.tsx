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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container px-4 sm:px-6 flex items-center justify-between py-4">
        <Link href="/es" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-none">
          <img 
            src="/Meditative_Metallic_Logo_Design.png" 
            alt="Ekilibrium Technologies" 
            className="h-8 sm:h-10 w-auto flex-shrink-0"
          />
          <div className="text-base sm:text-lg md:text-xl font-heading font-bold text-primary truncate">
            Ekilibrium Technologies
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-foreground/60 hover:text-accent transition-colors">
              EN
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="font-medium text-accent">ES</span>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="#contact">Evaluación Tecnológica</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

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
            <div className="flex items-center gap-3 py-2 border-t border-border mt-2">
              <span className="text-sm text-muted-foreground">Idioma:</span>
              <Link 
                href="/" 
                className="text-sm text-foreground/60 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                EN
              </Link>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-sm font-medium text-accent">ES</span>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full">
              <Link href="#contact">Evaluación Tecnológica</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}