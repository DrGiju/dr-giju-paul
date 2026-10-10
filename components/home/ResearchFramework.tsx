import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Research", "Identify and investigate meaningful problems."],
  ["Knowledge", "Generate credible evidence, understanding and insight."],
  ["Innovation", "Translate evidence into models, prototypes, products or solutions."],
  ["Impact", "Apply research to institutions, organisations and society."],
];

export function ResearchFramework() {
  return (
    <section className="bg-[#102033] py-24 text-white md:py-32">
      <Container>
        <SectionHeading
          dark
          eyebrow="Signature framework"
          title="Research → Knowledge → Innovation → Impact"
          intro="The website is built around one core idea: research becomes more valuable when evidence moves beyond the report and into practice."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <div key={title} className="relative rounded-[20px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B36A]">
                0{index + 1}
              </p>
              <h3 className="mt-5 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/60">{description}</p>
              {index < steps.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 hidden text-[#71D4CE] lg:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
