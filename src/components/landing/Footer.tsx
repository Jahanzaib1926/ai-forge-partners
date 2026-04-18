import { useRef } from "react";
import { useSectionEntrance } from "@/hooks/useSectionEntrance";
import { MORASTACK, contactMapsUrl } from "@/lib/contact";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionEntrance(ref);
  return (
    <footer ref={ref} className="border-t border-border/50 py-9 md:py-10">
      <div className="container flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-sm text-muted-foreground">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="h-5 w-5 rounded-md bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))]"
                aria-hidden
              />
              <span className="font-semibold text-foreground">
                <span className="text-primary">Mora</span>Stack
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm max-w-md text-pretty leading-relaxed">
              {MORASTACK.tagline}
            </p>
            <a
              href={contactMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-xs text-muted-foreground/80 max-w-md block hover:text-foreground/90 transition-colors"
            >
              {MORASTACK.address.line}
            </a>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5 sm:text-right">
            <a
              href={`tel:${MORASTACK.phone.tel}`}
              className="text-foreground/90 hover:text-primary transition-colors font-medium tabular-nums"
            >
              {MORASTACK.phone.display}
            </a>
            <a
              href={`mailto:${MORASTACK.email}`}
              className="hover:text-foreground text-muted-foreground transition-colors"
            >
              {MORASTACK.email}
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-border/30 text-xs sm:text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} MoraStack. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
