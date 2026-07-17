import rawData from "./knowledge-data.json";

export type KnowledgeCategory = { key: string; name: string };
export type KnowledgeSource = { label: string; href: string };
export type KnowledgeQuestion = {
  id: number;
  category: string;
  question: string;
  answer: string;
  guideSlug: string;
  guideTitle: string;
};
export type KnowledgeGuide = {
  slug: string;
  title: string;
  navTitle: string;
  category: string;
  description: string;
  quickAnswer: string;
  fieldNotes: string[];
  checklist: string[];
  mistakes: string[];
  table: { headers: string[]; rows: string[][] };
  faq: { q: string; a: string }[];
  sources: KnowledgeSource[];
};
export type KnowledgeDownload = { label: string; href: string; description: string };
export type KnowledgeConfig = {
  key: KnowledgeVertical;
  name: string;
  shortName: string;
  context: string;
  hubTitle: string;
  hubLead: string;
  heroImage: string;
  heroAlt: string;
  featureImages: string[];
  featureAlts: string[];
  categories: KnowledgeCategory[];
  guides: KnowledgeGuide[];
  questions: KnowledgeQuestion[];
  downloads: KnowledgeDownload[];
  sources: KnowledgeSource[];
  safetyGates: [string, string][];
};

export type KnowledgeVertical = "farm" | "business" | "vehicles";

export const knowledgeVerticals = rawData.verticals as unknown as Record<KnowledgeVertical, KnowledgeConfig>;
export const knowledgeKeys = Object.keys(knowledgeVerticals) as KnowledgeVertical[];

export function isKnowledgeVertical(value: string): value is KnowledgeVertical {
  return knowledgeKeys.includes(value as KnowledgeVertical);
}

export function knowledgeConfig(value: string): KnowledgeConfig | null {
  return isKnowledgeVertical(value) ? knowledgeVerticals[value] : null;
}

export function guideFor(config: KnowledgeConfig, slug: string): KnowledgeGuide | null {
  return config.guides.find((guide) => guide.slug === slug) ?? null;
}

export function relatedGuides(config: KnowledgeConfig, guide: KnowledgeGuide): KnowledgeGuide[] {
  const sameCategory = config.guides.filter((item) => item.category === guide.category && item.slug !== guide.slug);
  const otherCategories = config.guides.filter((item) => item.category !== guide.category);
  return [...sameCategory, ...otherCategories].slice(0, 3);
}

export function categoryName(config: KnowledgeConfig, category: string): string {
  return config.categories.find((item) => item.key === category)?.name ?? category.replaceAll("-", " ");
}

export function categoryImage(config: KnowledgeConfig, category: string): { src: string; alt: string } {
  const index = config.categories.findIndex((item) => item.key === category);
  const imageIndex = index < 0 ? 0 : index % config.featureImages.length;
  return { src: config.featureImages[imageIndex], alt: config.featureAlts[imageIndex] };
}

export function categoryDownload(config: KnowledgeConfig, category: string): KnowledgeDownload {
  const index = config.categories.findIndex((item) => item.key === category);
  if (index <= 1) return config.downloads[0];
  if (index <= 3) return config.downloads[1];
  if (index <= 5) return config.downloads[2];
  return config.downloads[3];
}
