import {
  BrainCircuit,
  FlaskConical,
  Landmark,
  Presentation,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/data/expertise";

const icons = {
  BrainCircuit,
  FlaskConical,
  Landmark,
  Presentation,
  Rocket,
  Sparkles,
};

export function ExpertiseGrid() {
  return (
    <section className="bg-[#F8F7F3] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What I work on"
          title="Research-led work across scholarship, institutions and innovation"
          intro="A connected practice spanning rigorous research, higher education leadership, AI-enabled inquiry, innovation and capacity building."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <article
                key={item.title}
                className="group rounded-[20px] border border-[#0A1424]/8 bg-white p-7 shadow-[0_16px_40px_rgba(10,20,36,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(10,20,36,.10)]"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-[#0A1424] text-[#71D4CE]">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#0A1424]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
