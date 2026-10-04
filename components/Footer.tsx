import { profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name} · {profile.location}
    </footer>
  );
}
