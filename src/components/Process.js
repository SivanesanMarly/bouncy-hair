import { steps } from "@/data/site";

export default function Process() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>How a visit works</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}><span>{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
