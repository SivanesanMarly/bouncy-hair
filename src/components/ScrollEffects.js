"use client";
import { useEffect, useRef } from "react";

// Scroll progress bar + reveal-on-scroll.
// Safe by design: content is ONLY hidden after this script runs (html.js), every element is
// revealed by a scroll check, and a timer force-reveals everything as a fallback.
const SELECTORS = [
  [".section h2, .rating h2, .bridal h2", ""],
  [".section .sub", ""],
  [".about-photo", "rv-l"],
  [".about > div", "rv-r"],
  [".card, .steps li, .ticket, .tabs, .faq, .form, .gcell, .bridal-in > *, .rating > *, .contact > *", ""],
  [".menu li", ""],
];

export default function ScrollEffects() {
  const bar = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pending = [];
    let raf = 0;

    const check = () => {
      raf = 0;
      const limit = window.innerHeight * 0.94;
      pending = pending.filter((el) => {
        if (!el.isConnected) return false;
        if (el.getBoundingClientRect().top < limit) { el.classList.add("in"); return false; }
        return true;
      });
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(check); };

    const onScroll = () => {
      const p = root.scrollTop / (root.scrollHeight - root.clientHeight || 1);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
      queue();
    };

    const tag = () => {
      SELECTORS.forEach(([sel, extra]) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (el.dataset.rv || el.closest(".hero, .topbar, .header, .lb")) return;
          el.dataset.rv = "1";
          el.classList.add("rv");
          if (extra) el.classList.add(extra);
          const sibs = el.parentElement ? [...el.parentElement.children] : [];
          el.style.setProperty("--d", `${Math.min(Math.max(sibs.indexOf(el), 0), 6) * 0.08}s`);
          pending.push(el);
        });
      });
      queue();
    };

    let mo, timer;
    if (!reduce) {
      root.classList.add("js");
      tag();
      mo = new MutationObserver(tag);
      mo.observe(document.body, { childList: true, subtree: true });
      // Fallback: never leave anything hidden
      timer = setTimeout(() => document.querySelectorAll(".rv").forEach((el) => el.classList.add("in")), 4000);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", queue);
    window.addEventListener("hashchange", () => setTimeout(queue, 600));
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", queue);
      mo && mo.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      root.classList.remove("js");
    };
  }, []);

  return <div ref={bar} className="progress" aria-hidden="true" />;
}
