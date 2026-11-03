// Real photo when `src` is set, otherwise a luxe illustrated tile so the layout still looks finished.
const bg = [
  ["#3a1650", "#b4558f"], ["#b4558f", "#d9b877"], ["#1a0b22", "#5b2a74"],
  ["#d9b877", "#f4dcd6"], ["#5b2a74", "#d9b877"], ["#2b1238", "#b4558f"],
];
const icons = {
  spa: "M30 48c-10-4-16-12-14-24 8 0 14 4 14 12 0-8 6-12 14-12 2 12-4 20-14 24z",
  comb: "M10 22h40v8H10zM14 30v16M22 30v16M30 30v16M38 30v16M46 30v16",
  drop: "M30 8c10 14 16 22 16 30a16 16 0 0 1-32 0c0-8 6-16 16-30z",
  brush: "M44 8 26 30l4 4L50 14zM24 32c-8 0-10 8-14 12 8 4 20 2 20-8z",
  spark: "M30 8l4 14 14 4-14 4-4 14-4-14-14-4 14-4z",
  chair: "M18 10h24v22H18zM14 32h32v8H14zM22 40v12M38 40v12",
  curl: "M30 8c-12 0-18 12-8 18s2 12-6 14 4 12 14 12 20-10 12-18-12-8-8-14 8-6 4-10-4-2-8-2z",
};
export default function Photo({ src, alt, i = 0, icon = "curl", className = "" }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`photo ${className}`} />;
  const [a, b] = bg[i % bg.length];
  return (
    <div className={`photo ph ${className}`} role="img" aria-label={alt} style={{ background: `radial-gradient(circle at 30% 20%,${b},${a} 70%)` }}>
      <svg viewBox="0 0 60 60" aria-hidden="true"><path d={icons[icon] || icons.curl} fill="none" stroke="#f1deb4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  );
}
