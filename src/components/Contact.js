import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <div>
          <h2>Visit us</h2>
          <p>{site.address}</p>
          <p><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>{site.email && <><br /><a href={`mailto:${site.email}`}>{site.email}</a></>}</p>
          <h3>Opening hours</h3>
          <dl className="hours">{site.hours.map((h) => <div key={h.day}><dt>{h.day}</dt><dd>{h.time}</dd></div>)}</dl>
          <a className="btn btn-ghost" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}>Get directions</a>
        </div>
        <iframe title="Map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} />
      </div>
    </section>
  );
}
