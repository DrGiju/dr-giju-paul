import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    slug: "agribrain",
    title: "AgriBrain",
    category: "Smart Agriculture",
    problem:
      "Agricultural decisions such as irrigation often depend on manual observation rather than continuous field evidence.",
    research:
      "Investigate how sensor data, soil moisture information and machine learning can inform autonomous agricultural decisions.",
    solution:
      "A research-led AI-enabled smart agriculture model designed to progress from pilot testing to larger-scale implementation.",
    impact:
      "A pathway toward evidence-based, resource-efficient farming and scalable agricultural decision support.",
    status: "Research & pilot concept",
    featured: true,
  },
  {
    slug: "micro-research",
    title: "Micro Research Initiative",
    category: "Research Capacity Building",
    problem:
      "Many emerging researchers understand theory but lack experience completing a focused end-to-end research cycle.",
    research:
      "Use bounded, practical research problems to develop capability in framing, methodology, instruments, analysis and academic writing.",
    solution:
      "A structured mentoring model that guides scholars from research idea to a defensible micro-research output.",
    impact:
      "Builds research confidence, methodological discipline and a stronger foundation for larger academic studies.",
    status: "Active",
    featured: true,
  },
  {
    slug: "research-to-product",
    title: "Research-to-Product Model",
    category: "Innovation",
    problem:
      "Research outputs often stop at reports or publications without being translated into usable solutions.",
    research:
      "Explore pathways that connect evidence generation with solution design, validation and implementation.",
    solution:
      "A practical model for moving from research problem to prototype, product, service or institutional intervention.",
    impact:
      "Strengthens the connection between scholarship, innovation and real-world value creation.",
    status: "Developing framework",
    featured: true,
  },
];
