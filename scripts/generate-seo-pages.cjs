const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'paginas seo', 'ananisign-gráfica-e-comunicação-visual-pages.csv');
const outputPath = path.join(__dirname, '..', 'app', 'seo-pages', 'data.ts');

const csv = fs.readFileSync(csvPath, 'utf-8');
const lines = csv.split('\n').filter(l => l.trim());

const header = lines[0];
const entries = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^"([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"/);
  if (!match) continue;

  const [, slug, title, metaDescription, h1, service, neighborhood, city, qualityScore, url] = match;

  entries.push({
    slug,
    title: title.replace(/Ç/g, 'Ç').replace(/Ã/g, 'Ã').replace(/Ó/g, 'Ó').replace(/É/g, 'É').replace(/Á/g, 'Á').replace(/Ê/g, 'Ê').replace(/Â/g, 'Â').replace(/Ã/g, 'Ã').replace(/Ú/g, 'Ú').replace(/Í/g, 'Í'),
    metaDescription,
    h1,
    service,
    neighborhood,
    city,
  });
}

const typeDef = `export type SeoPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  service: string;
  neighborhood: string;
  city: string;
};

export const seoPages: Record<string, SeoPage> = {`;

const entries_str = entries.map(e => {
  return `  "${e.slug}": {
    slug: "${e.slug.replace(/"/g, '\\"')}",
    title: "${e.title.replace(/"/g, '\\"')}",
    metaDescription: "${e.metaDescription.replace(/"/g, '\\"')}",
    h1: "${e.h1.replace(/"/g, '\\"')}",
    service: "${e.service.replace(/"/g, '\\"')}",
    neighborhood: "${e.neighborhood.replace(/"/g, '\\"')}",
    city: "${e.city.replace(/"/g, '\\"')}",
  },`;
}).join('\n');

const footer = `};

export const seoPageSlugs = Object.keys(seoPages);
`;

const output = typeDef + '\n' + entries_str + '\n' + footer;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`Generated ${entries.length} SEO pages to ${outputPath}`);
