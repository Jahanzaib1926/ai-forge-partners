import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades the section in on scroll. Call `ctx.revert()` on unmount via gsap context.
 */
export function useSectionEntrance<T extends HTMLElement>(ref: RefObject<T | null>, enabled = true) {
  useLayoutEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, enabled]);
}
