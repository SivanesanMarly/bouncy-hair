import { site, highlights } from "@/data/site";
import Photo from "./Photo";

export default function Hero({ image }) {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="chip">★ {site.rating.score} · {site.rating.count} ratings on Justdial</p>
          <h1>Hair that<br /><em>moves with you.</em></h1>
          <p className="lead">{site.intro}</p>
          <div className="row">
            <a href="#book" className="btn">Book an appointment</a>
            <a href="#offers" className="btn btn-ghost">View offers</a>
          </div>
        </div>
        <div className="hero-art">
          <div className="arch"><Photo src={image || site.heroImage} alt="Bouncy Hair Unisex Saloon" icon="curl" className="arch-img" /></div>
          <svg className="seal" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
            <text><textPath href="#c">FESTIVE OFFER · UP TO 25% OFF · </textPath></text>
            <text className="seal-n" x="60" y="68" textAnchor="middle">25%</text>
          </svg>
          <div className="glass float"><b>{site.rating.score}★</b><span>Loved in Trichy since {site.established}</span></div>
        </div>
      </div>
      <div className="wrap stats">
        {highlights.map((h) => <div key={h.small}><b>{h.big}</b><span>{h.small}</span></div>)}
      </div>
    </section>
  );
}
