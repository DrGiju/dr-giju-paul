import { profile } from "@/data/profile";
import { siteConfig } from "@/config/site";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: profile.email,
    knowsAbout: [
      "Research Methodology",
      "Higher Education",
      "AI-Enabled Research",
      "Innovation",
      "Digital Transformation",
      "Training and Capacity Building",
      "Research-to-Product",
    ],
  };
}
