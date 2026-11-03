"use client";
import { useEffect, useState } from "react";
import { services, timeSlots, site } from "@/data/site";
import { validateBooking } from "@/lib/validate";

const empty = { name: "", phone: "", service: "", date: "", time: "", notes: "", coupon: "" };
const fmt = (t) => { const h = +t.split(":")[0]; return `${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "pm" : "am"}`; };

export default function Booking() {
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | done | fail
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const h = (e) => setF((p) => ({ ...p, service: e.detail }));
    const o = (e) => setF((p) => ({ ...p, coupon: e.detail.code, service: e.detail.service || p.service }));
    window.addEventListener("pick-service", h);
    window.addEventListener("pick-offer", o);
    return () => { window.removeEventListener("pick-service", h); window.removeEventListener("pick-offer", o); };
  }, []);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const v = validateBooking(f);
    setErr(v);
    if (Object.keys(v).length) return;
    setState("sending");
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (!r.ok) throw new Error();
      setState("done");
    } catch { setState("fail"); }
  }

  if (state === "done") {
    const msg = encodeURIComponent(`Hi, I booked ${f.service} on ${f.date} at ${fmt(f.time)}. Name: ${f.name}`);
    return (
      <section id="book" className="section alt"><div className="wrap narrow done">
        <h2>Request received, {f.name.split(" ")[0]}.</h2>
        <p>We'll confirm {f.service} on {f.date} at {fmt(f.time)} by phone or WhatsApp shortly.{f.coupon && <> Offer code {f.coupon} noted.</>}</p>
        <div className="row">
          <a className="btn" href={`https://wa.me/${site.whatsapp}?text=${msg}`}>Confirm on WhatsApp</a>
          <button suppressHydrationWarning className="btn btn-ghost" onClick={() => { setF(empty); setState("idle"); }}>Make another booking</button>
        </div>
      </div></section>
    );
  }

  const field = (k, label, el) => (
    <label className={err[k] ? "bad" : ""}>{label}{el}{err[k] && <em role="alert">{err[k]}</em>}</label>
  );

  return (
    <section id="book" className="section alt">
      <div className="wrap narrow">
        <h2>Book an appointment</h2>
        <p className="sub">Choose a service and a time. We'll confirm by phone or WhatsApp.</p>
        <form onSubmit={submit} noValidate className="form">
          {field("name", "Your name", <input suppressHydrationWarning value={f.name} onChange={set("name")} autoComplete="name" />)}
          {field("phone", "Mobile number", <input suppressHydrationWarning value={f.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" placeholder="98765 43210" />)}
          {field("service", "Service", (
            <select suppressHydrationWarning value={f.service} onChange={set("service")}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
          ))}
          {field("date", "Date", <input suppressHydrationWarning type="date" min={today} value={f.date} onChange={set("date")} />)}
          {field("time", "Time", (
            <select suppressHydrationWarning value={f.time} onChange={set("time")}>
              <option value="">Select a time</option>
              {timeSlots.map((t) => <option key={t} value={t}>{fmt(t)}</option>)}
            </select>
          ))}
          <label className="full">Coupon code (optional)<input suppressHydrationWarning value={f.coupon} onChange={(e) => setF({ ...f, coupon: e.target.value.toUpperCase() })} placeholder="e.g. DIWALI25" autoCapitalize="characters" /></label>
          <label className="full">Notes (optional)<textarea suppressHydrationWarning rows="3" value={f.notes} onChange={set("notes")} maxLength={500} /></label>
          <button suppressHydrationWarning className="btn full" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Request appointment"}</button>
          {state === "fail" && <p className="full fail" role="alert">Couldn't send your request. Please call {site.phone}.</p>}
        </form>
      </div>
    </section>
  );
}
