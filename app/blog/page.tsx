import type { Metadata } from "next";
import { articleList } from "./data";
import { GraphicCover } from "./ArticlePage";

export const metadata: Metadata = {
  title: "Blog de Comunicação Visual e Gráfica em Ananindeua | AnaniSign",
  description: "Guias sobre fachadas, banners, adesivos, cartões de visita e comunicação visual para empresas de Ananindeua.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="blog-page">
      <header className="blog-header">
        <div className="article-shell blog-nav"><a href="/" className="blog-logo-with-image"><img src="/images/logo-ananisign.jpg" alt="Logomarca AnaniSign" /><span className="blog-logo">ANANI<b>SIGN</b><small>impressão digital</small></span></a><nav><a href="/">Voltar ao site</a><a href="https://wa.me/5591984838437" target="_blank" rel="noreferrer">Pedir orçamento ↗</a></nav></div>
      </header>
      <section className="blog-hero"><div className="article-shell"><span>Conteúdo útil</span><h1>Ideias para sua marca<br /><em>ser vista e lembrada.</em></h1><p>Guias práticos sobre materiais gráficos, fachadas, banners, adesivos e comunicação visual em Ananindeua.</p></div></section>
      <section className="blog-list"><div className="article-shell blog-grid">
        {articleList.map((article) => (
          <a className="blog-card" href={`/blog/${article.slug}`} key={article.slug}>
            <div className={`blog-card-cover ${article.cover}`}>{article.image ? <img src={article.image} alt={`Imagem sobre ${article.title}`} loading="lazy" decoding="async" /> : <GraphicCover article={article} />}<span>{article.tag}</span></div>
            <div className="blog-card-body"><small>{article.date} • {article.readTime}</small><h2>{article.title}</h2><p>{article.description}</p><b>Ler artigo ↗</b></div>
          </a>
        ))}
      </div></section>
      <footer className="article-footer"><div className="article-shell"><a href="/" className="blog-logo-with-image"><img src="/images/logo-ananisign.jpg" alt="Logomarca AnaniSign" /><span className="blog-logo">ANANI<b>SIGN</b></span></a><p>Comunicação visual e impressão digital em Ananindeua.</p><span>© 2026 AnaniSign</span></div></footer>
    </main>
  );
}
