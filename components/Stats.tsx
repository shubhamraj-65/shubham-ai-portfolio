import Reveal from "./Reveal";
import { stats } from "@/lib/portfolio";

export default function Stats() {
  return (
    <section id="achievements" className="section !py-12" aria-label="Key stats">
      <Reveal>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-surface p-5 text-center">
              <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-signal">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
