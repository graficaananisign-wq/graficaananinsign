import type { Article } from "./data";

const whatsapp = "https://wa.me/5591984838437";

function Brand() {
  return (
    <span className="article-brand">
      <img className="article-brand-logo" src="/images/logo-ananisign.jpg" alt="" />
      <span><strong>ANANI</strong><b>SIGN</b><small>impressão digital</small></span>
    </span>
  );
}

export default function ArticlePage({ article }: { article: Article }) {
  const message = `Olá! Li o artigo “${article.title}” e gostaria de solicitar um orçamento.`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    author: { "@type": "Organization", name: "Gráfica AnaniSign" },
    publisher: { "@type": "Organization", name: "Gráfica AnaniSign", logo: { "@type": "ImageObject", url: "https://graficaananisign.netlify.app/images/logo-ananisign.jpg" } },
    mainEntityOfPage: `https://graficaananisign.netlify.app/blog/${article.slug}`,
    keywords: [article.keyword, "gráfica em Ananindeua", "comunicação visual em Ananindeua"],
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="article-header">
        <div className="article-shell article-nav">
          <a href="/" aria-label="Voltar ao início"><Brand /></a>
          <nav><a href="/">Início</a><a href="/blog">Todos os artigos</a><a className="article-nav-cta" href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">Orçamento ↗</a></nav>
        </div>
      </header>

      <section className="article-hero">
        <div className="article-shell article-hero-grid">
          <div className="article-hero-copy">
            <a className="article-back" href="/blog">← Voltar ao blog</a>
            <span className="article-tag">{article.tag}</span>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="article-meta"><span>{article.date}</span><i /> <span>{article.readTime}</span></div>
          </div>
          <div className={`article-hero-visual ${article.cover}`}>
            {article.image ? <img src={article.image} alt={`Imagem sobre ${article.title}`} /> : <GraphicCover article={article} />}
          </div>
        </div>
      </section>

      <div className="article-shell article-layout">
        <article className="article-content">
          <div className="article-lead">
            {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}

          <div className="article-conclusion">
            <span>Conclusão</span>
            <p>{article.conclusion}</p>
          </div>

          <div className="article-cta">
            <div><span>Atendimento em Ananindeua e região</span><h2>Vamos produzir seu projeto?</h2><p>Envie as medidas, quantidade e prazo. Respondemos com orientação e orçamento sem compromisso.</p></div>
            <a href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">{article.cta} <b>↗</b></a>
          </div>
        </article>

        <aside className="article-aside">
          <div><span>Palavra-chave principal</span><strong>{article.keyword}</strong></div>
          <div><span>Precisa de ajuda?</span><p>Fale diretamente com a AnaniSign e descubra o material ideal para seu projeto.</p><a href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a></div>
          <div><span>Endereço</span><p>Av. Principal, 975 — Centro<br />Ananindeua — PA</p></div>
        </aside>
      </div>

      <section className="article-more">
        <div className="article-shell"><span>Continue aprendendo</span><h2>Mais dicas para sua marca</h2><a href="/blog">Ver todos os artigos <b>↗</b></a></div>
      </section>

      <footer className="article-footer">
        <div className="article-shell"><Brand /><p>Comunicação visual e impressão digital profissional em Ananindeua.</p><span>© 2026 AnaniSign</span></div>
      </footer>
    </main>
  );
}

export function GraphicCover({ article }: { article: Article }) {
  return (
    <div className="graphic-cover" aria-hidden="true">
      <span className="graphic-grid" />
      <span className="graphic-kicker">ANANISIGN / GUIA</span>
      <strong>{article.keyword}</strong>
      <span className="graphic-mark"><i /><i /><i /><i /></span>
      <small>COMUNICAÇÃO VISUAL • ANANINDEUA</small>
    </div>
  );
}
