import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchAreas } from "@/data/research";

export function ResearchAcademicWork() {
  return (
    <section id="research" className="bg-[#F8F7F3] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Research & academic work"
          title="Methodological rigour with practical relevance"
          intro="The research portfolio brings together supervision, research design, applied inquiry, instrumentation and advanced analytical thinking."
        />

        <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((item, index) => (
            <article key={item.title} className="border-t border-[#0A1424]/15 pt-6">
              <p className="text-xs font-bold tracking-[0.18em] text-[#D6B36A]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#0A1424]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#667085]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
