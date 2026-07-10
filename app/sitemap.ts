import { seoPageSlugs } from "./seo-pages/data";
import { locationSlugs } from "./localizacao/data";

const BASE_URL = "https://graficaananisign.com.br";

const blogSlugs = [
  "papel-cartao-visita",
  "adesivo-vinil-superficies",
  "comunicacao-visual-destaque",
  "fachada-acm-ananindeua",
  "banner-personalizado-ananindeua",
  "adesivo-vitrine-ananindeua",
];

export default function sitemap() {
  const now = new Date().toISOString();

  const mainPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const locationPages = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/localizacao/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const seoPages = seoPageSlugs.map((slug) => ({
    url: `${BASE_URL}/seo-pages/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...mainPages, ...locationPages, ...blogPages, ...seoPages];
}
