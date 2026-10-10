import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured work"
            title="Research and innovation projects"
            intro="Selected initiatives are presented through a practical narrative: problem, research, solution and impact."
          />
          <ButtonLink href="#collaborate" variant="text">Discuss a Project</ButtonLink>
        </div>

        <div className="mt-14 grid gap-6">
          {projects.filter((p) => p.featured).map((project, index) => (
            <article
              key={project.slug}
              className="grid overflow-hidden rounded-[24px] border border-[#0A1424]/10 bg-[#F8F7F3] lg:grid-cols-[.75fr_1.25fr]"
            >
              <div className="flex min-h-[280px] flex-col justify-between bg-[#0A1424] p-8 text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#71D4CE]">
                    {project.category}
                  </p>
                  <h3 className="mt-5 font-display text-4xl font-semibold">{project.title}</h3>
                </div>
                <p className="mt-10 text-sm text-white/50">{project.status}</p>
              </div>

              <div className="grid gap-6 p-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0F7773]">Problem</p>
                  <p className="mt-3 leading-7 text-[#475467]">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0F7773]">Research</p>
                  <p className="mt-3 leading-7 text-[#475467]">{project.research}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0F7773]">Solution</p>
                  <p className="mt-3 leading-7 text-[#475467]">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0F7773]">Impact</p>
                  <p className="mt-3 leading-7 text-[#475467]">{project.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
