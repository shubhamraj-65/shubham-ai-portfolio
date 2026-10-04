import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="proj-h">
      <Reveal>
        <p className="eyebrow">Projects</p>
        <h2 id="proj-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Selected work</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80} className={p.featured ? "md:col-span-2" : ""}>
            <article className={`group h-full overflow-hidden rounded-2xl border bg-surface transition hover:-translate-y-1 hover:border-signal/70 ${p.featured ? "border-signal/40 md:grid md:grid-cols-2" : "border-line"}`}>
              <div className="overflow-hidden">
                <Image src={p.image} alt={`${p.title} preview`} width={1200} height={750} loading={i === 0 ? "eager" : "lazy"}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col p-6">
                <p className="eyebrow">{p.category}{p.featured ? " · Featured" : ""}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key metrics">
                  {p.metrics.map((m) => <li key={m} className="rounded-md bg-signal-dim/50 px-2.5 py-1 font-mono text-xs text-paper">{m}</li>)}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">{t}</li>)}
                </ul>
                <div className="mt-auto flex gap-3 pt-6">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2"><Github size={16} /> GitHub</a>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2"><ExternalLink size={16} /> Live Demo</a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
