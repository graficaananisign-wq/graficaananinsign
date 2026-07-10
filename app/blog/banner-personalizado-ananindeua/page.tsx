import type { Metadata } from "next";
import ArticlePage from "../ArticlePage";
import { articles } from "../data";
const article = articles["banner-personalizado-ananindeua"];
export const metadata: Metadata = { title: `${article.title} | AnaniSign`, description: article.description, keywords: [article.keyword, "impressão de banner Ananindeua", "banner em lona"], alternates: { canonical: `/blog/${article.slug}` } };
export default function Page() { return <ArticlePage article={article} />; }
