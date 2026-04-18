import { useRef } from "react";
import { Compass, Hammer, TrendingUp } from "lucide-react";
import { useSectionEntrance } from "@/hooks/useSectionEntrance";

const steps = [
  { icon: Compass, title: "Discover & plan", desc: "We map goals, constraints, and architecture before a line of code." },
  { icon: Hammer, title: "Build & iterate", desc: "Senior engineers ship in tight loops with measurable outcomes." },
  { icon: TrendingUp, title: "Scale & optimize", desc: "Performance, cost, and reliability tuned as you grow." },
];

const Process = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionEntrance(ref);
  return (
    <section ref={ref} id="process" className="py-24 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary mb-3">How we work</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            A simple, focused process.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="glass rounded-2xl p-7 card-hover relative">
              <div className="flex items-center justify-between mb-6">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
