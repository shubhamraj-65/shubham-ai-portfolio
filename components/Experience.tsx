import Reveal from "./Reveal";
import { experience as e } from "@/lib/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-h">
      <Reveal>
        <p className="eyebrow">Experience</p>
        <h2 id="exp-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Where I&apos;ve worked</h2>
        <article className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold">{e.role} <span className="text-signal">· {e.company}</span></h3>
            <span className="font-mono text-sm text-muted">{e.period}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{e.location}</p>
          <ul className="mt-5 space-y-3 text-paper/85">
            {e.points.map((p) => (
              <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />{p}</li>
            ))}
          </ul>
        </article>
      </Reveal>
    </section>
  );
}
