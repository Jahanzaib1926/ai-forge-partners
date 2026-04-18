import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-first engineering partner
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            <span className="text-gradient">Build scalable systems,</span>
            <br />
            <span className="text-gradient-primary">not just apps.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design, build, and scale high-performance AI-ready products for startups and enterprises.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] text-primary-foreground hover:opacity-95 glow group">
              <a href="#contact">
                Book a call
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full glass hover:bg-white/5">
              <a href="#work">View work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
