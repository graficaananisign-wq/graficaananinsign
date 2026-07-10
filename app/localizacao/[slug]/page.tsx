import type { Metadata } from "next";
import { locations, locationSlugs } from "../data";
import LocationPageComponent from "./LocationPageComponent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations[slug];
  if (!loc) return {};

  return {
    title: `AnaniSign | Gráfica em ${loc.city} — PA`,
    description: `AnaniSign Gráfica e Comunicação Visual atende ${loc.city} com banners, adesivos, fachadas, brindes e impressão digital. Qualidade profissional e entrega no prazo.`,
    keywords: [
      `gráfica em ${loc.city}`,
      `comunicação visual ${loc.city}`,
      `banner ${loc.city}`,
      `adesivos ${loc.city}`,
      `fachada ACM ${loc.city}`,
      `impressão digital ${loc.city}`,
    ],
    alternates: { canonical: `/localizacao/${slug}` },
    openGraph: {
      title: `AnaniSign | Gráfica em ${loc.city}`,
      description: `Comunicação visual e impressão digital profissional em ${loc.city}-PA.`,
      url: `/localizacao/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = locations[slug];
  if (!loc) return <div>Página não encontrada</div>;

  return <LocationPageComponent location={loc} />;
}
