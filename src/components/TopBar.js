"use client";
import { offers, offerEnds } from "@/data/site";
import useCountdown from "./useCountdown";

export default function TopBar() {
  const c = useCountdown(offerEnds);
  if (c && c.done) return null;
  const o = offers[0];
  const p = (n) => String(n).padStart(2, "0");
  return (
    <div className="topbar">
      <a href="#offers">
        <b>{o.tag} offer</b> Up to {o.badge.replace(" OFF", "")} off · code <u>{o.code}</u>
        {c && <span className="cd"> · ends in {c.d}d {p(c.h)}h {p(c.m)}m {p(c.s)}s</span>}
      </a>
    </div>
  );
}
