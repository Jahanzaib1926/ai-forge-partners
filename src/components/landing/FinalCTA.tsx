import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl glass px-8 py-20 md:py-28 text-center">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-primary/25 blur-[120px]" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Let's build something <span className="text-gradient-primary">scalable.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Partner with a team that thinks beyond code.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] text-primary-foreground hover:opacity-95 glow group"
              >
                Schedule a call
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
