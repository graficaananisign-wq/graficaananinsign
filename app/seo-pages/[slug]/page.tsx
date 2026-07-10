import type { Metadata } from "next";
import { seoPages, seoPageSlugs } from "../data";
import SeoPageComponent from "../SeoPageComponent";

export function generateStaticParams() {
  return seoPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages[slug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/seo-pages/${page.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `/seo-pages/${page.slug}`,
      siteName: "AnaniSign",
      title: page.title,
      description: page.metaDescription,
      images: [{ url: "/images/logo-ananisign.jpg", width: 1080, height: 1080, alt: "AnaniSign Impressão Digital" }],
    },
  };
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPages[slug];
  if (!page) return <main><div style={{ padding: "100px 20px", textAlign: "center" }}><h1>Página não encontrada</h1><a href="/">Voltar ao site</a></div></main>;

  return <SeoPageComponent page={page} />;
}
