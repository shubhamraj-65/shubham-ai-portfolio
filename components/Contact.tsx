import { Github, Linkedin, Mail, Download } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/portfolio";

export default function Contact() {
  const items = [
    { href: `mailto:${profile.email}`, label: "Email", value: profile.email, I: Mail },
    { href: profile.github, label: "GitHub", value: profile.github.replace("https://", ""), I: Github },
    { href: "https://www.linkedin.com/in/shubham-raj-6bb8b7273/", label: "LinkedIn", value: "Connect on LinkedIn", I: Linkedin },
  ];
  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <Reveal>
        <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-h" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Let&apos;s work together</h2>
          <p className="mt-3 max-w-xl text-muted">Open to Data Analyst, Data Analytics and Junior Data roles. Reach out any time.</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {items.map(({ href, label, value, I }) => (
              <li key={label}>
                <a href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer"
                  className="flex h-full items-center gap-3 rounded-xl border border-line p-4 transition hover:border-signal">
                  <I size={20} className="shrink-0 text-signal" />
                  <span className="min-w-0"><span className="block text-xs text-muted">{label}</span><span className="block truncate text-sm">{value}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} download className="btn btn-primary mt-8"><Download size={16} /> Download Resume</a>
        </div>
      </Reveal>
    </section>
  );
}
