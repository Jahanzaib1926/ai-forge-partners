import { useRef } from "react";
import { Check } from "lucide-react";
import { useSectionEntrance } from "@/hooks/useSectionEntrance";

const models = [
  {
    title: "Dedicated engineers",
    tag: "Most flexible",
    desc: "Senior engineers embedded into your team — billed monthly, scale up or down anytime.",
    points: ["Vetted senior talent", "Your stack, your sprints", "Scale on demand"],
  },
  {
    title: "Full product development",
    tag: "End-to-end",
    desc: "We own delivery from discovery to launch — design, engineering, and infrastructure.",
    points: ["Fixed scope or milestones", "Cross-functional pod", "Production-ready handoff"],
    featured: true,
  },
  {
    title: "Long-term partnership",
    tag: "Strategic",
    desc: "An engineering partner that grows with your roadmap, quarter after quarter.",
    points: ["Dedicated tech leadership", "Architecture & AI advisory", "Continuous optimization"],
  },
];

const Engagements = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionEntrance(ref);
  return (
    <section ref={ref} id="engagements" className="py-24 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary mb-3">Engagement models</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Work with us, your way.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {models.map((m) => (
            <div
              key={m.title}
              className={`rounded-2xl p-7 card-hover relative overflow-hidden ${
                m.featured
                  ? "bg-gradient-to-b from-primary/10 to-transparent border border-primary/30"
                  : "glass"
              }`}
            >
              {m.featured && (
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              )}
              <div className="relative">
                <span className="text-[11px] uppercase tracking-widest text-primary">{m.tag}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                <ul className="space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
