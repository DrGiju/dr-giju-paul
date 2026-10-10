import { HomeHero } from "@/components/hero/HomeHero";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ResearchFramework } from "@/components/home/ResearchFramework";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ResearchAcademicWork } from "@/components/research/ResearchAcademicWork";
import { EvidenceStrip } from "@/components/home/EvidenceStrip";
import { HigherEducationLeadership } from "@/components/home/HigherEducationLeadership";
import { TrainingGrid } from "@/components/training/TrainingGrid";
import { FeaturedPublications } from "@/components/publications/FeaturedPublications";
import { SpeakingHighlights } from "@/components/speaking/SpeakingHighlights";
import { LatestInsights } from "@/components/insights/LatestInsights";
import { CollaborationCTA } from "@/components/home/CollaborationCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { getPersonSchema } from "@/lib/schema/person";
import { getWebsiteSchema } from "@/lib/schema/website";

export default function HomePage() {
  return (
    <>
      <StructuredData data={getPersonSchema()} />
      <StructuredData data={getWebsiteSchema()} />
      <main id="main">
        <HomeHero />
        <ExpertiseGrid />
        <ResearchFramework />
        <FeaturedProjects />
        <ResearchAcademicWork />
        <EvidenceStrip />
        <HigherEducationLeadership />
        <TrainingGrid />
        <FeaturedPublications />
        <SpeakingHighlights />
        <LatestInsights />
        <CollaborationCTA />
      </main>
    </>
  );
}
