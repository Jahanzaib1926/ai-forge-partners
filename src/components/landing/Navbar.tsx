import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#engagements", label: "Engagements" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass w-full max-w-6xl rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 shrink-0 min-w-0">
          <div
            className="h-7 w-7 shrink-0 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))]"
            style={{ boxShadow: "0 0 32px -6px hsl(var(--primary) / 0.45)" }}
            aria-hidden
          />
          <span className="font-semibold tracking-tight">MoraStack</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            <a href="#contact">Book a call</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
