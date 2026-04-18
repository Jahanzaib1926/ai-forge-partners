import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#engagements", label: "Engagements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass w-full max-w-6xl rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] glow" />
          <span className="font-semibold tracking-tight">Stackforge</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
          <a href="#contact">Book a call</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
