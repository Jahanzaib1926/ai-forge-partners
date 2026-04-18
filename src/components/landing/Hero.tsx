import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useHeroEntrance } from "@/hooks/useHeroEntrance";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const root = useRef<HTMLElement>(null);
  useHeroEntrance(root);

  return (
    <section ref={root} className="relative pt-36 md:pt-40 pb-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-90" />
      <div
        className="absolute top-1/3 left-1/2 h-[min(50vh,420px)] w-[min(96vw,700px)] -translate-x-1/2 rounded-full bg-primary/12 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-reveal inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-7 md:mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
            AI-first engineering partner
          </div>
          <h1 className="hero-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]">
            <span className="text-gradient">Build scalable systems,</span>
            <br />
            <span className="text-gradient-primary">not just apps.</span>
          </h1>

          <p className="hero-reveal mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design, build, and scale high-performance AI-ready products for startups and enterprises.
          </p>

          <div className="hero-reveal mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] text-primary-foreground border-0 hover:opacity-95 shadow-[var(--shadow-glow)] group"
            >
              <a href="#contact">
                Book a call
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-border/40 dark:border-border/30 bg-background/5 hover:bg-foreground/5"
            >
              <a href="#engagements">View work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
