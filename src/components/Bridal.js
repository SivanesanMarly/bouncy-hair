import { bridal } from "@/data/site";
import Icon from "./Icon";

export default function Bridal() {
  return (
    <section id="bridal" className="bridal">
      <div className="wrap bridal-in">
        <div>
          <h2>{bridal.title}</h2>
          <p>{bridal.text}</p>
          <a href="#book" className="btn btn-light">Ask about bridal packages</a>
        </div>
        <ul>{bridal.items.map((t) => <li key={t}><Icon name="check" />{t}</li>)}</ul>
      </div>
    </section>
  );
}
