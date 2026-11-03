import { tips } from "@/data/site";

export default function Tips() {
  return (
    <section className="section alt">
      <div className="wrap">
        <h2>Hair and skin care tips</h2>
        <p className="sub">Simple habits our stylists recommend between visits.</p>
        <div className="cards four">
          {tips.map((t) => <article className="card" key={t.title}><h3>{t.title}</h3><p>{t.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
