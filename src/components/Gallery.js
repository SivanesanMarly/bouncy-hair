"use client";
import { useEffect, useState } from "react";
import { gallery as fallback } from "@/data/site";
import Photo from "./Photo";

export default function Gallery({ images = [] }) {
  const real = images.length > 0;
  const items = real ? images.map((src, i) => ({ src, alt: `Bouncy salon photo ${i + 1}` })) : fallback.map((g) => ({ ...g, src: g.image }));
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, items.length]);

  return (
    <section id="gallery" className="section alt">
      <div className="wrap">
        <h2>Inside Bouncy</h2>
        <p className="sub">{real ? "Tap a photo to view it larger." : "A look at what we do, from hair spa to bridal looks."}</p>
        <div className="grid-g">
          {items.map((g, i) => (
            <figure key={i} className={`gcell gc${i % 6}`}>
              <button suppressHydrationWarning onClick={() => real && setOpen(i)} aria-label={`Open ${g.alt}`} disabled={!real}>
                <Photo i={i} src={g.src} icon={g.icon} alt={g.alt} className="g" />
              </button>
              {!real && <figcaption>{g.alt}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <img src={items[open].src} alt={items[open].alt} onClick={(e) => e.stopPropagation()} />
          <button suppressHydrationWarning className="lb-x" aria-label="Close">×</button>
          <button suppressHydrationWarning className="lb-n lb-p" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}>‹</button>
          <button suppressHydrationWarning className="lb-n lb-r" aria-label="Next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
