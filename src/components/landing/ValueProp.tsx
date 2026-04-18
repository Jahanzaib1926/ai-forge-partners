import { X, Check } from "lucide-react";

const problems = [
  "Slow, brittle systems",
  "Poor architecture decisions",
  "Runaway cloud costs",
  "Messy, untested code",
];
const solutions = [
  "Scalable, resilient systems",
  "Clean, deliberate architecture",
  "Optimized infra & performance",
  "Faster, safer delivery",
];

const ValueProp = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary mb-3">Why teams switch to us</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            From technical debt to leverage.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl p-8 border border-border bg-card/40">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Before</p>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-7 w-7 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                    <X className="h-4 w-4 text-destructive" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-8 glass relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <p className="text-xs uppercase tracking-widest text-primary mb-6 relative">After</p>
            <ul className="space-y-4 relative">
              {solutions.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
