import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "#solutions" },
    { name: "Street Rental", href: "#street-rental" },
    { name: "AI for Rentals", href: "#ai-rentals" },
    { name: "Integrations", href: "#integrations" },
    { name: "Case Study", href: "#case-study" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-heading font-bold text-primary">
            Ekilibrium Technologies
          </div>
          <div className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-2 ml-2">
            Rental Technology & Automation
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Book a Rental Tech Audit
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
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
              Book a Rental Tech Audit
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}