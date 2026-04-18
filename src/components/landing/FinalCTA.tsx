import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useSectionEntrance } from "@/hooks/useSectionEntrance";
import { MORASTACK, contactMapsUrl } from "@/lib/contact";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionEntrance(ref);
  const [emailUser, emailDomain] = MORASTACK.email.split("@");
  return (
    <section ref={ref} id="contact" className="py-24 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl glass px-6 py-16 sm:px-8 md:py-24 text-center">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[min(100%,600px)] rounded-full bg-primary/25 blur-[120px]" aria-hidden />

          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              Let&apos;s build something <span className="text-gradient-primary">scalable.</span>
            </h2>
            <p className="mt-4 md:mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Partner with a team that thinks beyond code.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] text-primary-foreground border-0 hover:opacity-95 w-full sm:w-auto shadow-[var(--shadow-glow)] group"
              >
                <a href={`tel:${MORASTACK.phone.tel}`} className="inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  Call us
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-border/50 bg-background/5 w-full sm:w-auto"
              >
                <a href={`mailto:${MORASTACK.email}`} className="inline-flex items-center">
                  <Mail className="mr-2 h-4 w-4" aria-hidden />
                  Email
                </a>
              </Button>
            </div>
          </div>

          <div
            className="relative mt-12 md:mt-16 pt-10 border-t border-border/40"
            id="contact-details"
          >
            <div className="max-w-xl mx-auto w-full text-left space-y-6 sm:space-y-7">
              <div>
                <p className="text-sm font-semibold leading-none">
                  <span className="text-primary">Mora</span>
                  <span className="text-foreground">Stack</span>
                </p>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {MORASTACK.tagline}
                </p>
              </div>

              <a
                href={contactMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group/addr"
              >
                <MapPin className="h-5 w-5 shrink-0 text-primary/90 mt-0.5" aria-hidden />
                <span className="leading-relaxed">{MORASTACK.address.line}</span>
              </a>

              <a
                href={`tel:${MORASTACK.phone.tel}`}
                className="flex gap-3 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                <span>
                  <span className="text-primary">+1</span> <span>(346) 875-8788</span>
                </span>
              </a>

              <a
                href={`mailto:${MORASTACK.email}`}
                className="inline-flex items-start gap-3 text-sm sm:text-base font-medium hover:underline decoration-primary/40 underline-offset-4"
              >
                <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                <span>
                  <span className="text-primary">
                    {emailUser}@
                  </span>
                  <span className="text-muted-foreground">{emailDomain}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
