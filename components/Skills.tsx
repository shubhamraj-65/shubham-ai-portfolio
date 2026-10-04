import Reveal from "./Reveal";
import { Code2, BarChart3, LineChart, Sparkles } from "lucide-react";
import { skills } from "@/lib/portfolio";

const icons = [Code2, BarChart3, LineChart, Sparkles];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-h">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 id="skills-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Toolkit</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={g.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition hover:border-signal/60">
                <div className="flex items-center gap-3"><Icon size={20} className="text-signal" /><h3 className="font-display text-lg font-semibold">{g.title}</h3></div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm text-paper/90 transition hover:-translate-y-0.5 hover:border-signal">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
