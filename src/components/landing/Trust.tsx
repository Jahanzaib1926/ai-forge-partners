import { useLayoutEffect, useRef, type ComponentType, type SVGProps } from "react";
import gsap from "gsap";
import { Cloud, Layers, Palette, TestTubes } from "lucide-react";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiGrafana,
  SiGraphql,
  SiJenkins,
  SiJira,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { useSectionEntrance } from "@/hooks/useSectionEntrance";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const tech: { id: string; label: string; Icon: Icon }[] = [
  { id: "fs", label: "Full stack", Icon: Layers },
  { id: "mern", label: "MERN", Icon: SiMongodb },
  { id: "mevn", label: "MEVN", Icon: SiVuedotjs },
  { id: "mean", label: "MEAN", Icon: SiAngular },
  { id: "express", label: "Express", Icon: SiExpress },
  { id: "qa", label: "QA & testing", Icon: TestTubes },
  { id: "design", label: "Graphic design", Icon: Palette },
  { id: "gh", label: "GitHub", Icon: SiGithub },
  { id: "docker", label: "Docker", Icon: SiDocker },
  { id: "ts", label: "TypeScript", Icon: SiTypescript },
  { id: "react", label: "React", Icon: SiReact },
  { id: "node", label: "Node.js", Icon: SiNodedotjs },
  { id: "k8s", label: "Kubernetes", Icon: SiKubernetes },
  { id: "figma", label: "Figma", Icon: SiFigma },
  { id: "aws", label: "AWS & cloud", Icon: Cloud },
  { id: "cicd", label: "CI / CD", Icon: SiGithubactions },
  { id: "api", label: "REST & GraphQL", Icon: SiGraphql },
  { id: "jira", label: "Agile", Icon: SiJira },
  { id: "test", label: "Jest", Icon: SiJest },
  { id: "sql", label: "SQL & data", Icon: SiPostgresql },
  { id: "devops", label: "DevOps", Icon: SiGrafana },
  { id: "jenkins", label: "Jenkins", Icon: SiJenkins },
];

const CHIP_SPEED_PX = 38;

function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const paused = useRef(false);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const play = () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
      gsap.set(track, { x: 0 });
      const w = track.scrollWidth / 2;
      if (w <= 0) return;
      const duration = w / CHIP_SPEED_PX;
      tweenRef.current = gsap.to(track, {
        x: -w,
        duration,
        ease: "none",
        repeat: -1,
        paused: paused.current,
      });
    };

    play();
    const ro = new ResizeObserver(() => play());
    ro.observe(track);

    return () => {
      ro.disconnect();
      tweenRef.current?.kill();
      gsap.set(track, { clearProps: "x" });
    };
  }, []);

  const onEnter = () => {
    paused.current = true;
    tweenRef.current?.pause();
  };
  const onLeave = () => {
    paused.current = false;
    tweenRef.current?.resume();
  };

  return (
    <div
      className="group relative w-full -mx-4 sm:mx-0"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent"
        aria-hidden
      />
      <div className="overflow-hidden py-2">
        <div ref={trackRef} className="flex w-max items-center gap-3 sm:gap-4 will-change-transform">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex w-max min-w-0 items-center gap-3 sm:gap-4"
              aria-hidden={dup === 1}
            >
              {tech.map((t) => (
                <div
                  key={`${dup}-${t.id}`}
                  className="inline-flex h-10 sm:h-11 min-w-0 max-w-[220px] shrink-0 select-none items-center justify-center gap-2.5 rounded-full border border-border/40 bg-card/40 pl-2.5 pr-4 sm:pl-3 sm:pr-5 text-left shadow-sm backdrop-blur-sm transition-[border-color,box-shadow] duration-300 group-hover:border-border/50"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary sm:h-9 sm:w-9">
                    <t.Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 text-xs font-medium leading-tight text-foreground/90 sm:text-sm">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Scrolling list of technologies: {tech.map((t) => t.label).join(", ")}
      </p>
    </div>
  );
}

const Trust = () => {
  const ref = useRef<HTMLElement>(null);
  useSectionEntrance(ref);
  return (
    <section ref={ref} className="py-12 sm:py-16 border-y border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          <p className="text-sm font-medium text-foreground/90 sm:text-base">
            Technologies, stacks, and tools we use
          </p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
            across full-stack development, design, and delivery
          </p>
        </div>
        <TechMarquee />
      </div>
    </section>
  );
};

export default Trust;
