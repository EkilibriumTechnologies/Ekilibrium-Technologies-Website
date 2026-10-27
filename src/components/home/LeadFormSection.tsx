import { useRef, useState } from "react";
import { formText, submitRentalTechAuditForm } from "@/lib/rental-tech-audit-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fleetSize, setFleetSize] = useState("");
  const submitLock = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitLock.current) {
      return;
    }

    submitLock.current = true;
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;

    try {
      const outcome = await submitRentalTechAuditForm({
        firstName: formText(form, "firstName"),
        lastName: formText(form, "lastName"),
        company: formText(form, "company"),
        email: formText(form, "email"),
        phone: formText(form, "phone"),
        fleetSize,
        currentSoftware: formText(form, "currentSoftware"),
        challenge: formText(form, "challenge"),
        language: "en",
        website: formText(form, "website"),
        botField: formText(form, "bot-field"),
      });

      if (outcome.status === "success") {
        setIsSubmitted(true);
        setFleetSize("");
        form.reset();
        return;
      }

      if (outcome.reason === "rejected") {
        console.error("contact_form_submit_failed");
      }
      setError(
        outcome.reason === "fleetSize"
          ? "Select a fleet size before submitting."
          : "There was a problem submitting your request. Please try again.",
      );
    } finally {
      submitLock.current = false;
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Request Received
            </h3>
            <p className="text-muted-foreground mb-6">
              We'll review your rental operation and reach out to discuss how Ekilibrium can help.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="border-accent text-accent hover:bg-accent/10"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              What Is Slowing Down Your Rental Operation?
            </h2>
            <p className="text-lg text-muted-foreground">
              Show us how your rental business operates today. We'll identify where reservations, payments, customer communication, vehicle access and daily operations may be simplified, integrated or automated.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border shadow-lg p-8 md:p-10">
            <form
              name="rental-tech-audit"
              method="POST"
              action="/__forms.html"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="rental-tech-audit" />
              <input type="hidden" name="language" value="en" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  className="border-border"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fleetSize">Fleet Size</Label>
                  <Select required value={fleetSize} onValueChange={setFleetSize}>
                    <SelectTrigger id="fleetSize" className="border-border">
                      <SelectValue placeholder="Select fleet size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 vehicles</SelectItem>
                      <SelectItem value="6-10">6-10 vehicles</SelectItem>
                      <SelectItem value="11-25">11-25 vehicles</SelectItem>
                      <SelectItem value="26-50">26-50 vehicles</SelectItem>
                      <SelectItem value="51-100">51-100 vehicles</SelectItem>
                      <SelectItem value="100+">100+ vehicles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentSoftware">Current Rental Software</Label>
                  <Input
                    id="currentSoftware"
                    name="currentSoftware"
                    placeholder="e.g. Turo, GetAround, Custom"
                    className="border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Biggest Operational Challenge</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  placeholder="Describe your biggest rental operations challenge..."
                  className="border-border resize-none"
                  required
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                >
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Submitting..." : "Book a Rental Tech Audit"}
              </Button>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <label htmlFor="bot-field">Don't fill this out if you're human</label>
                <input
                  id="bot-field"
                  name="bot-field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-6">
              We respect your privacy. Your information will only be used to contact you about rental technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}