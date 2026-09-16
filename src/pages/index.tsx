import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Ekilibrium Technologies | Rental Technology & Automation"
        description="Software, automation, AI and integrations for independent vehicle rental businesses. Specializing in car, Jeep, exotic, van, golf cart, and ATV rentals."
      />
      <Header />
      <main className="min-h-screen">
        <div className="container py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Ekilibrium Technologies
          </h1>
          <p className="text-xl text-muted-foreground">
            Rental Technology & Automation
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}