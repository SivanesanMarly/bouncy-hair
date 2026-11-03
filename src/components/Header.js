"use client";
import { useState } from "react";

const links = [["About", "#about"], ["Services", "#services"], ["Offers", "#offers"], ["Gallery", "#gallery"], ["FAQ", "#faq"], ["Contact", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-in">
        <a href="#top" className="logo">Bouncy<span>.</span></a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#book" className="btn btn-sm" onClick={() => setOpen(false)}>Book now</a>
        </nav>
        <button suppressHydrationWarning className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  );
}
