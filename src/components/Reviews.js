import { site } from "@/data/site";

export default function Reviews() {
  const full = Math.round(site.rating.score);
  return (
    <section id="reviews" className="section dark">
      <div className="wrap rating">
        <div className="score">{site.rating.score}</div>
        <div>
          <div className="stars" aria-label={`${site.rating.score} out of 5`}>{"★".repeat(full)}{"☆".repeat(5 - full)}</div>
          <h2>Trusted by {site.rating.count} Trichy customers</h2>
          <p>Rated {site.rating.score} out of 5 on Justdial. Read what customers say about their hair spa, styling and makeup.</p>
          <a className="btn" target="_blank" rel="noreferrer" href={site.justdialUrl}>Read reviews on Justdial</a>
        </div>
      </div>
    </section>
  );
}
