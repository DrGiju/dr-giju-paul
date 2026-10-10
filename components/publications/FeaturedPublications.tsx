import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/data/publications";

export function FeaturedPublications() {
  return (
    <section id="publications" className="bg-[#F8F7F3] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Publications & writing"
          title="Academic work, books and thought leadership"
          intro="This section is already structured for future publications and writing; only verified bibliographic records will be published."
        />
        <div className="mt-14 divide-y divide-[#0A1424]/10 border-y border-[#0A1424]/10">
          {publications.map((item) => (
            <article key={item.type} className="grid gap-4 py-8 md:grid-cols-[.4fr_1fr_.35fr] md:items-center">
              <p className="text-sm font-semibold text-[#0F7773]">{item.type}</p>
              <div>
                <h3 className="text-xl font-semibold text-[#0A1424]">{item.title}</h3>
                <p className="mt-2 leading-7 text-[#667085]">{item.summary}</p>
              </div>
              <p className="text-sm text-[#98A2B3] md:text-right">{item.status}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
