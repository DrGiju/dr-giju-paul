import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="bg-[#07111F] py-14 text-white">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold">{profile.name}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              Research → Knowledge → Innovation → Impact
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#71D4CE]">Explore</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <Link href="#research">Research</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#training">Training</Link>
              <Link href="#insights">Insights</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#71D4CE]">Contact</p>
            <a href={`mailto:${profile.email}`} className="mt-4 block text-sm text-white/70 hover:text-white">
              {profile.email}
            </a>
          </div>
        </div>
        <p className="pt-7 text-xs text-white/40">
          © {new Date().getFullYear()} Dr. Giju Paul. Personal brand website prototype.
        </p>
      </Container>
    </footer>
  );
}
