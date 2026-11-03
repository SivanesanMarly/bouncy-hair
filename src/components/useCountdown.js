"use client";
import { useEffect, useState } from "react";

// Returns null on the server / first paint (avoids hydration mismatch), then a live countdown.
export default function useCountdown(end) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!end) return;
    const t = () => setLeft(Math.max(0, new Date(end).getTime() - Date.now()));
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, [end]);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return { done: left === 0, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}
