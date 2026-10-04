import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.2fr_1fr] md:pt-40">
        <div>
          <p className="eyebrow hero-in">Available for Data Analyst roles</p>
          <h1 className="hero-in mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl" style={{ animationDelay: ".1s" }}>
            Hi, I&apos;m <span className="text-signal">{profile.name}</span>
          </h1>
          <p className="hero-in mt-2 font-display text-2xl text-paper/90 sm:text-3xl" style={{ animationDelay: ".2s" }}>{profile.role}</p>
          <p className="hero-in mt-5 max-w-xl text-lg text-muted" style={{ animationDelay: ".3s" }}>{profile.tagline}</p>
          <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".4s" }}>
            <a href="#projects" className="btn btn-primary">View Projects <ArrowDown size={16} /></a>
            <a href={profile.resume} download className="btn btn-ghost"><Download size={16} /> Download Resume</a>
          </div>
          <div className="hero-in mt-8 flex gap-3" style={{ animationDelay: ".5s" }}>
            {[{ href: profile.github, label: "GitHub", I: Github }, { href: profile.linkedin, label: "LinkedIn", I: Linkedin }, { href: `mailto:${profile.email}`, label: "Email", I: Mail }].map(({ href, label, I }) => (
              <a key={label} href={href} aria-label={label} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer"
                className="rounded-full border border-line p-3 text-muted transition hover:border-signal hover:text-paper"><I size={18} /></a>
            ))}
          </div>
        </div>
        <div className="hero-in float mx-auto w-64 sm:w-80" style={{ animationDelay: ".3s" }}>
          <div className="rounded-3xl border border-line bg-surface p-2 shadow-[0_0_80px_rgba(224,20,44,.18)]">
            <Image src="/images/profile.jpg" alt="Portrait of Shubham Raj" width={640} height={800} priority className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
