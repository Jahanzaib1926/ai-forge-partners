import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const LandingBackground = () => {
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    const c = cRef.current;
    const g = gridRef.current;
    if (!a || !b || !c) return;

    const ctx = gsap.context(() => {
      const ambient = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
      ambient.to(a, { x: "4%", y: "-2%", scale: 1.06, duration: 7 }, 0);
      ambient.to(b, { x: "-3%", y: "3%", scale: 1.1, duration: 9 }, 0);
      ambient.to(c, { x: "2%", y: "1%", scale: 1.05, duration: 8 }, 0);
      if (g) {
        gsap.to(g, {
          y: 12,
          x: 8,
          duration: 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute top-0 left-1/2 w-[min(100vw,900px)] h-[min(55vh,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[100px]"
        ref={aRef}
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute top-1/3 right-0 w-[min(70vw,560px)] h-[min(45vh,400px)] translate-x-1/4 rounded-full bg-[hsl(var(--primary-glow))]/9 blur-[90px]"
        ref={bRef}
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[min(60vw,480px)] h-[40vh] -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/6 blur-[80px]"
        ref={cRef}
        style={{ willChange: "transform" }}
      />
      <div
        ref={gridRef}
        className="bg-mesh-drift absolute inset-0 opacity-[0.22] dark:opacity-25"
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default LandingBackground;
