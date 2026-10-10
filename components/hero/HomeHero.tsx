import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/data/profile";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1424] text-white">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(26,167,161,.22),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(214,179,106,.12),transparent_30%)]" />
      <Container className="relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#71D4CE]">
            Research · Higher Education · Innovation
          </p>
          <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            Dr. Giju Paul
          </h1>
          <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/75 md:text-lg">
            {profile.headline}
          </p>
          <h2 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {profile.positioning}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            {profile.supporting}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#projects">Explore My Work</ButtonLink>
            <ButtonLink href="#collaborate" variant="secondary">
              Collaborate With Me
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-5 rounded-[2rem] border border-[#D6B36A]/30" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#102033] to-[#0A1424] p-6 shadow-2xl">
            <Image
              
                src="/images/profile/dr-giju-paul-portrait.png"
                alt="Professional portrait of Dr. Giju Paul"
                width={1254}
                height={1254}
                priority
                className="h-auto w-full object-contain"
              />
            
          </div>
          <div className="absolute -bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#102033]/95 px-6 py-5 text-center shadow-xl backdrop-blur">
  <p className="text-xs uppercase tracking-[0.22em] text-[#71D4CE]">
    Signature Idea
  </p>

  <p className="mt-2 font-display text-lg leading-relaxed">
    Research → Knowledge → Innovation → Impact
  </p>
</div>
        </div>
      </Container>
    </section>
  );
}
