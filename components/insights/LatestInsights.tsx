import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insights } from "@/data/insights";

export function LatestInsights() {
  return (
    <section id="insights" className="bg-[#F8F7F3] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Ideas at the intersection of research, AI, education and innovation"
          intro="The final site will use MDX for a scalable thought-leadership archive. These prototype cards demonstrate the editorial direction."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {insights.map((item) => (
            <article key={item.title} className="rounded-[20px] border border-[#0A1424]/10 bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0F7773]">{item.category}</p>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-[#0A1424]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[#667085]">{item.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
