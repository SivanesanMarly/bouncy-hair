import { ticker } from "@/data/site";
export default function Marquee() {
  const row = [...ticker, ...ticker];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{row.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div>
    </div>
  );
}
