import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HigherEducationLeadership() {
  return (
    <section className="bg-[#0A1424] py-24 text-white md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#71D4CE]">
            Higher Education Leadership
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Building research culture, academic systems and future-ready institutions
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-white/65">
            Higher education leadership requires more than administration. It connects academic quality,
            research development, institutional strategy, digital learning, innovation and the student
            experience into a coherent system.
          </p>
          <div className="mt-8">
            <ButtonLink href="#collaborate" variant="secondary">
              Explore Institutional Collaboration
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
