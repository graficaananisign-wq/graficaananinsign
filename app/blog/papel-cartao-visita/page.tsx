import type { Metadata } from "next";
import ArticlePage from "../ArticlePage";
import { articles } from "../data";
const article = articles["papel-cartao-visita"];
export const metadata: Metadata = { title: `${article.title} | AnaniSign`, description: article.description, keywords: [article.keyword, "gráfica em Ananindeua"], alternates: { canonical: `/blog/${article.slug}` } };
export default function Page() { return <ArticlePage article={article} />; }
