import { Code2, Server, Cloud, Brain, Palette, Users } from "lucide-react";

const services = [
  { icon: Code2, title: "Full-stack development", desc: "Production-grade web and mobile apps built with modern, type-safe stacks." },
  { icon: Server, title: "Backend & APIs", desc: "Resilient services and APIs designed for scale, security, and clean architecture." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure as code, CI/CD, and observability across AWS, GCP, and Azure." },
  { icon: Brain, title: "AI integration", desc: "LLMs, RAG, agents, and automations woven into your product workflows." },
  { icon: Palette, title: "UI / UX design", desc: "Premium interfaces that convert — crafted with clarity and intent." },
  { icon: Users, title: "Dedicated teams", desc: "Senior engineers embedded with your team to ship faster, longer." },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary mb-3">What we do</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Engineering that compounds.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One partner across product, platform, and AI — so you ship without the seams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass card-hover rounded-2xl p-7 group">
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
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

export default Services;
