type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, intro, dark = false }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-[#71D4CE]" : "text-[#0F7773]"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${dark ? "text-white" : "text-[#0A1424]"}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/70" : "text-[#667085]"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
