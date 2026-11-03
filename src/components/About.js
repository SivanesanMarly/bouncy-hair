import { about, why } from "@/data/site";
import Photo from "./Photo";
import Icon from "./Icon";

export default function About({ image }) {
  return (
    <>
      <section id="about" className="section">
        <div className="wrap about">
          <Photo src={image} alt="Inside Bouncy Hair Unisex Saloon" icon="chair" i={3} className="about-photo" />
          <div>
            <h2>{about.title}</h2>
            {about.paras.map((t, i) => <p key={i} className="body">{t}</p>)}
          </div>
        </div>
      </section>
      <section className="section alt" id="why">
        <div className="wrap">
          <h2>Why people choose Bouncy</h2>
          <div className="cards">
            {why.map((w) => (
              <article key={w.title} className="card"><Icon name={w.icon} /><h3>{w.title}</h3><p>{w.text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
