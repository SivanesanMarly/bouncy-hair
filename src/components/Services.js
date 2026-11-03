"use client";
import { useState } from "react";
import { services, categories, site } from "@/data/site";

export default function Services() {
  const [cat, setCat] = useState("All");
  const list = services.filter((s) => cat === "All" || s.for === cat);
  return (
    <section id="services" className="section">
      <div className="wrap">
        <h2>Services</h2>
        <p className="sub">Call or message us for current prices. Home services are also offered.</p>
        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button suppressHydrationWarning key={c} role="tab" aria-selected={cat === c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <ul className="menu">
          {list.map((s) => (
            <li key={s.name}>
              <div><h3>{s.name}</h3><p>{s.note}</p></div>
              <strong>{s.price ? `₹${s.price.toLocaleString("en-IN")}` : "Ask for price"}</strong>
              <a href="#book" className="pick" onClick={() => window.dispatchEvent(new CustomEvent("pick-service", { detail: s.name }))}>Book</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
