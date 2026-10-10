import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { speaking } from "@/data/speaking";

export function SpeakingHighlights() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Speaking & engagement"
          title="Speaking, teaching and engaging with ideas"
          intro="A future archive will bring together conferences, lectures, workshops, panels and media appearances."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {speaking.map((item) => (
            <article key={item.type} className="rounded-[20px] bg-[#102033] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#71D4CE]">{item.type}</p>
              <h3 className="mt-5 font-display text-3xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/60">{item.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
