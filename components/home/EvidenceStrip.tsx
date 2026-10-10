import { Container } from "@/components/layout/Container";

const evidence = [
  ["Research", "Methodology, supervision and applied inquiry"],
  ["Higher Education", "Leadership, administration and institutional development"],
  ["Innovation", "Research-to-product and digital transformation"],
  ["Training", "Capacity building for scholars, faculty and professionals"],
];

export function EvidenceStrip() {
  return (
    <section className="border-y border-[#0A1424]/10 bg-white py-12">
      <Container>
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#0F7773]">
          Professional evidence areas
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {evidence.map(([title, text]) => (
            <div key={title}>
              <p className="font-display text-2xl font-semibold text-[#0A1424]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-[#98A2B3]">
          Numeric professional metrics will be added only after verification.
        </p>
      </Container>
    </section>
  );
}
