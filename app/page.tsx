"use client";

import { FormEvent, useEffect, useState } from "react";

const whatsapp = "https://wa.me/5591984838437";

function trackEvent(eventName: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const locations = [
  { city: "Belém", neighborhoods: "Centro, Batista Campos, Marco, Telégrafo", link: "/localizacao/belem" },
  { city: "Ananindeua", neighborhoods: "Centro, São José, Condor, Cidade Nova", link: "/localizacao/ananindeua" },
  { city: "Marituba", neighborhoods: "Centro, Ipsep, Paraisópolis", link: "/localizacao/marituba" },
];

const services = [
  { number: "01", icon: "▱", title: "Banners e lonas", text: "Impressão em alta resolução para eventos, fachadas, painéis e campanhas que precisam chamar atenção." },
  { number: "02", icon: "◫", title: "Adesivos personalizados", text: "Vinil com corte preciso para vitrines, paredes, veículos, embalagens e sinalização interna ou externa." },
  { number: "03", icon: "◇", title: "Fachadas e letreiros", text: "Comunicação visual completa para transformar sua fachada em um ponto de referência em Belém, Ananindeua e Marituba." },
  { number: "04", icon: "✦", title: "Camisas personalizadas", text: "Uniformes, eventos e equipes com impressão durável, cores vivas e acabamento profissional." },
  { number: "05", icon: "○", title: "Canecas e brindes", text: "Presentes, campanhas e lembranças personalizadas que colocam sua marca nas mãos do cliente." },
  { number: "06", icon: "▤", title: "Materiais gráficos", text: "Cartões de visita, panfletos, convites e impressos pensados para fortalecer sua apresentação." },
];

const projects = [
  { image: "/images/work-2-crop.png", tag: "Impressão digital", title: "Comunicação visual completa", className: "project-wide" },
  { image: "/images/work-1-crop.png", tag: "Personalizados", title: "Projetos que ganham vida", className: "project-tall" },
  { image: "/images/work-3-crop.png", tag: "Brindes", title: "Sua ideia em qualquer formato", className: "project-tall" },
];

const reviews = [
  { quote: "Tem um prazo muito bom para entrega, comparado com outros locais.", name: "Daniel Braga Pinheiro", initial: "D" },
  { quote: "Excelente o trabalho e o tratamento.", name: "Sabrina Vitelli", initial: "S" },
  { quote: "Serviço de ótima qualidade, super indico.", name: "Patrícia Rodrigues", initial: "P" },
];

const blogArticles = [
  { image: "/blog/dicas-melhor-papel-cartao-visita-ananindeua.jpg.png", tag: "Dicas", title: "Qual o melhor papel para cartão de visita?", slug: "papel-cartao-visita", cover: "cover-paper" },
  { image: "/blog/adesivo-vinil-ideal-para-cada-superficie-ananindeua.jpg.png", tag: "Guia", title: "Adesivo em vinil: o ideal para cada superfície", slug: "adesivo-vinil-superficies", cover: "cover-vinyl" },
  { image: "/blog/comunicacao-visual-como-destacar-sua-empresa-ananindeua.jpg.png", tag: "Negócios", title: "Como destacar sua empresa com comunicação visual", slug: "comunicacao-visual-destaque", cover: "cover-brand" },
  { image: "/blog/ananisign-fachada-acm.png", tag: "Fachadas", title: "Fachada em ACM em Ananindeua: como valorizar sua empresa", slug: "fachada-acm-ananindeua", cover: "cover-acm" },
  { image: "/blog/ananisign-banner-personalizado.png", tag: "Impressão", title: "Banner personalizado em Ananindeua: tamanhos e acabamento", slug: "banner-personalizado-ananindeua", cover: "cover-banner" },
  { image: "/blog/ananisign-adesivo-vitrine.png", tag: "Vitrines", title: "Adesivo para vitrine em Ananindeua: guia para atrair clientes", slug: "adesivo-vitrine-ananindeua", cover: "cover-window" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const trackId = link.getAttribute("data-track") || "";
      const section = link.closest("section");
      const sectionId = section?.id || "unknown";

      if (href.includes("wa.me")) {
        trackEvent("whatsapp_click", { link_id: trackId, section: sectionId, url: href });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_id: trackId, section: sectionId });
      } else if (href.includes("instagram.com")) {
        trackEvent("social_click", { platform: "instagram", section: sectionId });
      } else if (href.includes("facebook.com")) {
        trackEvent("social_click", { platform: "facebook", section: sectionId });
      } else if (href.includes("maps.google.com")) {
        trackEvent("map_click", { section: sectionId });
      } else if (href.includes("g.page")) {
        trackEvent("google_review_click", { section: sectionId });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function sendBudget(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = data.get("service") as string;
    const message = [
      "Olá! Vim pelo novo site da AnaniSign e gostaria de solicitar um orçamento.",
      `Nome: ${data.get("name")}`,
      `Serviço: ${service}`,
      `Detalhes: ${data.get("message")}`,
    ].join("\n");

    trackEvent("form_submit", {
      service: service || "nao_informado",
      form_type: "orcamento_rapido",
    });

    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="topline">
        <div className="shell topline-inner">
          <span>Belém • Ananindeua • Marituba — Impressão digital & comunicação visual</span>
          <a href="tel:+5591984838437" data-track="phone-topline">(91) 98483-8437</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#inicio" aria-label="AnaniSign — início" onClick={closeMenu}>
            <img className="brand-logo-img" src="/images/logo-ananisign.jpg" alt="" aria-hidden="true" />
            <span className="brand-copy"><strong>ANANI</strong><b>SIGN</b><small>impressão digital</small></span>
          </a>

          <button className={`menu-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            <span /><span />
          </button>

          <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#trabalhos" onClick={closeMenu}>Trabalhos</a>
            <a href="#processo" onClick={closeMenu}>Como funciona</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a className="nav-button" href={`${whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site da AnaniSign e gostaria de solicitar um orçamento.")}`} target="_blank" rel="noreferrer" data-track="whatsapp-header">Fazer orçamento <span>↗</span></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grain" />
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><i /> Gráfica em Belém, Ananindeua e Marituba — PA</div>
            <h1>Sua ideia merece <em>impressionar.</em></h1>
            <p>Transformamos sua marca em banners, adesivos, fachadas, brindes e materiais gráficos com cores vivas, acabamento profissional e entrega no prazo.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`${whatsapp}?text=${encodeURIComponent("Olá! Quero transformar minha ideia em um projeto com a AnaniSign.")}`} target="_blank" rel="noreferrer" data-track="whatsapp-hero">Quero um orçamento <span>↗</span></a>
              <a className="button button-ghost" href="#trabalhos">Ver projetos <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars"><span>D</span><span>S</span><span>P</span><span>+</span></div>
              <div><b>5,0 no Google</b><small><span>★★★★★</span> clientes satisfeitos</small></div>
            </div>
          </div>

          <div className="printer-scene reveal" aria-label="Animação de uma impressora plotter produzindo um banner AnaniSign">
            <div className="scene-glow" />
            <div className="machine-card">
              <div className="machine-head">
                <span className="machine-label">ANANISIGN / LARGE FORMAT</span>
                <div className="machine-status"><i /> IMPRIMINDO</div>
              </div>
              <div className="plotter">
                <div className="plotter-top"><span /><span /><span /></div>
                <div className="rail"><div className="carriage"><b>AS</b><i /></div></div>
                <div className="print-slot" />
                <div className="banner-sheet">
                  <div className="banner-grid" />
                  <div className="banner-symbol"><span /><span /><span /></div>
                  <small>COMUNICAÇÃO VISUAL</small>
                  <strong>SUA MARCA<br /><em>EM DESTAQUE.</em></strong>
                  <div className="banner-line"><i /><b>ANANISIGN</b></div>
                </div>
                <div className="roller roller-left" /><div className="roller roller-right" />
              </div>
              <div className="machine-footer">
                <span>CMYK</span><div className="color-dots"><i /><i /><i /><i /></div><b>100% QUALIDADE</b>
              </div>
            </div>
            <div className="floating-chip chip-one"><i>✓</i><span><b>Alta resolução</b><small>Cores que impressionam</small></span></div>
            <div className="floating-chip chip-two"><i>⚡</i><span><b>Produção ágil</b><small>Prazo respeitado</small></span></div>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div><span>BANNERS E LONAS</span><i>✦</i><span>ADESIVOS</span><i>✦</i><span>FACHADAS</span><i>✦</i><span>PERSONALIZADOS</span><i>✦</i><span>IMPRESSÃO DIGITAL</span><i>✦</i><span>BANNERS E LONAS</span><i>✦</i><span>ADESIVOS</span><i>✦</i></div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="kicker">O que fazemos</span><h2>Tudo para sua marca ser <em>vista e lembrada.</em></h2></div>
            <p>Da primeira ideia ao acabamento final, cuidamos de cada detalhe para você receber um material bonito, resistente e pronto para gerar impacto.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-top"><span className="service-icon">{service.icon}</span><small>{service.number}</small></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <a href={`${whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${service.title}.`)}`} target="_blank" rel="noreferrer" data-track={`whatsapp-service-${service.number}`}>Solicitar orçamento <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="shell quality-grid">
          <div className="quality-copy reveal">
            <span className="kicker light">Padrão AnaniSign</span>
            <h2>Não é só imprimir.<br />É entregar <em>presença.</em></h2>
            <p>Materiais escolhidos com cuidado, impressão nítida e um time que acompanha seu projeto de verdade.</p>
            <div className="quality-list">
              <span><i>01</i> Cores vivas e definição impecável</span>
              <span><i>02</i> Acabamento profissional</span>
              <span><i>03</i> Atendimento próximo e transparente</span>
              <span><i>04</i> Entrega dentro do combinado</span>
            </div>
          </div>
          <div className="quality-art reveal" aria-hidden="true">
            <div className="color-fan fan-c"><b>C</b></div><div className="color-fan fan-m"><b>M</b></div><div className="color-fan fan-y"><b>Y</b></div><div className="color-fan fan-k"><b>K</b></div>
            <span className="registration-mark top-left">+</span><span className="registration-mark bottom-right">+</span>
          </div>
        </div>
      </section>

      <section className="section projects" id="trabalhos">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="kicker">Projetos recentes</span><h2>Ideias reais.<br /><em>Resultados visíveis.</em></h2></div>
            <a className="text-link" href="https://www.instagram.com/ananisign/" target="_blank" rel="noreferrer" data-track="instagram-projects">Ver mais no Instagram <span>↗</span></a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project ${project.className} reveal`} key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-shade" />
                <div className="project-info"><span>{project.tag}</span><h3>{project.title}</h3></div>
              </article>
            ))}
            <a className="project-callout reveal" href={`${whatsapp}?text=${encodeURIComponent("Olá! Vi os trabalhos da AnaniSign e quero criar meu projeto.")}`} target="_blank" rel="noreferrer" data-track="whatsapp-projects">
              <span>Seu projeto<br />pode ser o<br /><em>próximo.</em></span><i>↗</i>
            </a>
          </div>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="shell">
          <div className="process-intro reveal"><span className="kicker">Simples do início ao fim</span><h2>Da ideia à entrega<br />em <em>4 passos.</em></h2></div>
          <div className="process-steps">
            {[
              ["01", "Conte sua ideia", "Chame no WhatsApp e explique o que você precisa."],
              ["02", "Receba o orçamento", "Apresentamos a melhor solução com valor e prazo claros."],
              ["03", "Aprove seu projeto", "Conferimos a arte e os detalhes antes de produzir."],
              ["04", "Pronto para destacar", "Produzimos com qualidade e entregamos no combinado."],
            ].map(([number, title, text]) => <article className="process-step reveal" key={number}><span>{number}</span><i /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="shell about-grid">
          <div className="about-visual reveal">
            <div className="about-logo"><img src="/images/logo-ananisign.jpg" alt="Símbolo AnaniSign" /></div>
            <div className="about-badge"><strong>+1.200</strong><span>clientes atendidos</span></div>
            <div className="about-caption">Feito em Ananindeua<br />para marcas de Belém, Ananindeua e Marituba.</div>
          </div>
          <div className="about-copy reveal">
            <span className="kicker">Quem somos</span>
            <h2>Uma gráfica local com olhar <em>grande para sua marca.</em></h2>
            <p>A AnaniSign nasceu para ajudar empresas e pessoas a se comunicarem com mais qualidade. Unimos atendimento próximo, produção ágil e cuidado nos detalhes para transformar cada pedido em um resultado que dá orgulho de mostrar.</p>
            <div className="about-numbers"><div><strong>941+</strong><span>projetos realizados</span></div><div><strong>5,0</strong><span>avaliação média</span></div><div><strong>2022</strong><span>desde</span></div></div>
            <a className="button button-dark" href="#contato">Conhecer a AnaniSign <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="shell">
          <div className="section-heading reveal"><div><span className="kicker">Quem já imprimiu, recomenda</span><h2>Confiança que se<br /><em>transforma em retorno.</em></h2></div><div className="rating-block"><strong>5,0</strong><span>★★★★★</span><small>Avaliações no Google</small></div></div>
          <div className="reviews-grid">
            {reviews.map((review) => <article className="review-card reveal" key={review.name}><span className="quote-mark">“</span><div className="stars">★★★★★</div><blockquote>{review.quote}</blockquote><footer><i>{review.initial}</i><div><b>{review.name}</b><small>Cliente verificado</small></div></footer></article>)}
          </div>
          <a className="google-review reveal" href="https://g.page/r/CfAvt_9BcT90EBM/review" target="_blank" rel="noreferrer" data-track="google-review">Conte sua experiência no Google <span>↗</span></a>
        </div>
      </section>

      <section className="section insights">
        <div className="shell">
          <div className="section-heading reveal"><div><span className="kicker">Conteúdo útil</span><h2>Escolha o material certo<br />para cada <em>ideia.</em></h2></div></div>
          <div className="insights-grid">
            {blogArticles.map((article) => <a className="insight-card reveal" href={`/blog/${article.slug}`} key={article.title}><div className={article.cover}>{article.image ? <img src={article.image} alt={`Imagem sobre ${article.title}`} loading="lazy" decoding="async" /> : <div className="mini-cover"><i>ANANISIGN / GUIA</i><strong>{article.tag}</strong><b>ANANINDEUA</b></div>}<span>{article.tag}</span></div><h3>{article.title}</h3><p>Ler artigo <b>↗</b></p></a>)}
          </div>
          <a className="all-articles reveal" href="/blog">Ver todos os artigos <b>↗</b></a>
        </div>
      </section>

      <section className="section locations" id="localizacao">
        <div className="shell">
          <div className="section-heading reveal">
            <div><span className="kicker">Onde atendemos</span><h2>Nossa <em>estrutura</em> atende você.</h2></div>
            <p>Produzimos em Ananindeua e entregamos em toda a região metropolitana — Belém, Ananindeua e Marituba.</p>
          </div>
          <div className="locations-grid">
            {locations.map((loc) => (
              <a className="location-card reveal" href={loc.link} key={loc.city}>
                <div className="location-icon">⌖</div>
                <h3>{loc.city}</h3>
                <p>Bairros: {loc.neighborhoods}</p>
                <span>Saiba mais ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="shell contact-grid">
          <div className="contact-copy reveal">
            <span className="kicker light">Vamos tirar sua ideia do papel?</span>
            <h2>Conte o que você precisa. A gente transforma em algo <em>incrível.</em></h2>
            <p>Preencha os dados ou fale diretamente no WhatsApp. Respondemos com uma orientação clara e orçamento sem compromisso.</p>
            <div className="contact-details">
              <a href="https://maps.google.com/?q=Av.+Principal,+975,+Ananindeua,+PA" target="_blank" rel="noreferrer" data-track="map-contact"><i>⌖</i><span><small>Visite a gráfica</small>Av. Principal, 975 — Centro<br />Ananindeua — PA</span></a>
              <a href="tel:+5591984838437" data-track="phone-contact"><i>◔</i><span><small>Ligue ou chame</small>(91) 98483-8437</span></a>
              <div><i>◷</i><span><small>Horário</small>Seg a Sex: 07:30–18:00<br />Sáb: 08:00–12:00</span></div>
            </div>
          </div>
          <form className="budget-form reveal" onSubmit={sendBudget}>
            <div className="form-heading"><span>Orçamento rápido</span><i>01–02 min</i></div>
            <label>Seu nome<input name="name" placeholder="Como podemos chamar você?" required /></label>
            <label>O que você precisa?
              <select name="service" required defaultValue=""><option value="" disabled>Selecione um serviço</option>{services.map(service => <option key={service.title}>{service.title}</option>)}</select>
            </label>
            <label>Conte um pouco sobre o projeto<textarea name="message" placeholder="Medidas, quantidade, prazo ou qualquer detalhe importante..." required /></label>
            <button type="submit">Enviar pelo WhatsApp <span>↗</span></button>
            <small>Sem compromisso. Seus dados não ficam armazenados.</small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <a className="brand footer-brand" href="#inicio"><img className="brand-logo-img" src="/images/logo-ananisign.jpg" alt="Logomarca AnaniSign" /><span className="brand-copy"><strong>ANANI</strong><b>SIGN</b><small>impressão digital</small></span></a>
          <p>Comunicação visual que coloca sua marca em destaque em Belém, Ananindeua e Marituba.</p>
          <div className="footer-social"><a href="https://www.instagram.com/ananisign/" target="_blank" rel="noreferrer" data-track="instagram-footer">Instagram ↗</a><a href="https://www.facebook.com/ananisingimpressaodigital/" target="_blank" rel="noreferrer" data-track="facebook-footer">Facebook ↗</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 AnaniSign Impressão Digital</span><span>Belém • Ananindeua • Marituba — Pará, Brasil</span></div>
      </footer>

      <a className="whatsapp-float" href={`${whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}`} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" data-track="whatsapp-float"><span>◔</span><b>Orçamento rápido</b></a>
    </main>
  );
}
