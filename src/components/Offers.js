"use client";
import { useState } from "react";
import { offers } from "@/data/site";
import useCountdown from "./useCountdown";

function Ticket({ o }) {
  const [copied, setCopied] = useState(false);
  const c = useCountdown(o.ends);
  const p = (n) => String(n).padStart(2, "0");
  if (o.ends && c && c.done) return null;

  async function copy() {
    try { await navigator.clipboard.writeText(o.code); } catch {}
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  }
  function claim() {
    window.dispatchEvent(new CustomEvent("pick-offer", { detail: { code: o.code, service: o.service } }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <article className="ticket">
      <div className="t-badge"><span>{o.badge.replace(" OFF", "")}</span><small>OFF</small></div>
      <div className="t-body">
        <p className="t-tag">{o.tag}</p>
        <h3>{o.title}</h3>
        <p>{o.text}</p>
        {o.ends && c && <p className="t-time">Ends in {c.d}d {p(c.h)}h {p(c.m)}m {p(c.s)}s</p>}
        <div className="t-actions">
          <button suppressHydrationWarning className="code" onClick={copy} aria-label={`Copy code ${o.code}`}>{copied ? "Copied" : o.code}</button>
          <button suppressHydrationWarning className="claim" onClick={claim}>Claim offer</button>
        </div>
      </div>
    </article>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="section offers-sec">
      <div className="wrap">
        <h2>Offers this season</h2>
        <p className="sub">Copy a code or tap Claim offer. We apply it when you visit. Offers cannot be combined.</p>
        <div className="tickets">{offers.map((o) => <Ticket key={o.code} o={o} />)}</div>
      </div>
    </section>
  );
}
