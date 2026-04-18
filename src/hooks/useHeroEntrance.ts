import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

const SELECTOR = ".hero-reveal";

export function useHeroEntrance(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>(SELECTOR);
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { autoAlpha: 0, y: 28 });
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.08,
        clearProps: "transform",
      });
    }, root);

    return () => ctx.revert();
  }, [ref]);
}
