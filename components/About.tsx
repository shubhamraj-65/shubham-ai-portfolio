import Reveal from "./Reveal";
import { about, profile } from "@/lib/portfolio";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 id="about-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Data, made useful.</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <p className="mt-6 font-mono text-sm text-paper/70">{profile.location} · {profile.goal}</p>
      </Reveal>
    </section>
  );
}
