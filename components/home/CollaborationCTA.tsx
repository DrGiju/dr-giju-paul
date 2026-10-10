import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/data/profile";

export function CollaborationCTA() {
  return (
    <section id="collaborate" className="bg-[#1AA7A1] py-20 text-[#07111F] md:py-24">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em]">Collaboration</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Let&apos;s turn research and ideas into impact.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#07111F]/70">
            Collaborate on research, institutional development, training, innovation,
            higher-education strategy or research-to-product initiatives.
          </p>
        </div>
        <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
          Contact Dr. Giju Paul
        </ButtonLink>
      </Container>
    </section>
  );
}
