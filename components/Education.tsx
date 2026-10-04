import Reveal from "./Reveal";
import { education } from "@/lib/portfolio";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-h">
      <Reveal>
        <p className="eyebrow">Education</p>
        <h2 id="edu-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Academic background</h2>
        <ol className="mt-10 space-y-4 border-l border-line pl-6">
          {education.map((e) => (
            <li key={e.title} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-signal" />
              <h3 className="font-display text-lg font-semibold">{e.title}</h3>
              <p className="text-muted">{e.place}{e.period && ` · ${e.period}`}{e.note && ` · ${e.note}`}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
