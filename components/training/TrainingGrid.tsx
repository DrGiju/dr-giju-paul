import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { training } from "@/data/training";

export function TrainingGrid() {
  return (
    <section id="training" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Training & capacity building"
          title="Practical learning for researchers, academics and professionals"
          intro="Training is designed around capability development: participants should leave with frameworks, tools and methods they can apply."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {training.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-[#0A1424]/10 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F7773]">{item.audience}</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#0A1424]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#667085]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
