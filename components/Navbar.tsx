"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolio";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled || open ? "bg-ink/85 backdrop-blur border-b border-line" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold">SR<span className="text-signal">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-muted transition hover:text-paper">{l}</a></li>
          ))}
        </ul>
        <a href={profile.resume} download className="btn btn-primary hidden !py-2 md:inline-flex">Resume</a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-paper">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
