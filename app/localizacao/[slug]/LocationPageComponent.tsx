"use client";

import type { Location } from "../data";

const whatsapp = "https://wa.me/5591984838437";

export default function LocationPageComponent({ location }: { location: Location }) {
  const { city, neighborhoods, description, services } = location;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `AnaniSign Gráfica em ${city}`,
    description: `Gráfica e comunicação visual em ${city}-PA. Banners, adesivos, fachadas, brindes e impressão digital.`,
    telephone: "+55-91-98483-8437",
    url: `https://graficaananisign.netlify.app/localizacao/${location.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "PA",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <div className="topline">
        <div className="shell topline-inner">
          <span>Belém • Ananindeua • Marituba — Impressão digital & comunicação visual</span>
          <a href="tel:+5591984838437">(91) 98483-8437</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="/" aria-label="AnaniSign — início">
            <img className="brand-logo-img" src="/images/logo-ananisign.jpg" alt="" aria-hidden="true" />
            <span className="brand-copy">
              <strong>ANANI</strong>
              <b>SIGN</b>
              <small>impressão digital</small>
            </span>
          </a>
          <nav className="main-nav">
            <a href="/">Início</a>
            <a href="/#servicos">Serviços</a>
            <a href="/#sobre">Sobre</a>
            <a
              className="nav-button"
              href={`${whatsapp}?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de um orçamento em ${city}.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Fazer orçamento <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" style={{ paddingTop: "116px", minHeight: "auto", paddingBottom: "80px" }}>
        <div className="hero-grain" />
        <div className="shell" style={{ position: "relative", zIndex: 2 }}>
          <div className="eyebrow" style={{ color: "#b5b2ad" }}>
            <i style={{ width: 27, height: 2, background: "var(--orange)", display: "inline-block" }} />
            Gráfica em {city} — PA
          </div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(52px, 5vw, 78px)", letterSpacing: "-.065em", lineHeight: 0.91, marginTop: 20, marginBottom: 22, color: "#fff" }}>
            Comunicação visual em <em style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, color: "var(--orange)", display: "block" }}>{city}.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#bcb9b2", maxWidth: 600 }}>
            {description}
          </p>
          <div style={{ display: "flex", gap: 11, marginTop: 34 }}>
            <a
              className="button button-primary"
              href={`${whatsapp}?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de um orçamento em ${city}.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento <span>↗</span>
            </a>
            <a className="button button-ghost" href="/">
              Voltar ao início <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Serviços em {city}</span>
              <h2>Tudo que sua marca precisa <em>em {city}.</em></h2>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service}>
                <div className="service-top">
                  <span className="service-icon" style={{ width: 52, height: 52, border: "1px solid var(--line)", display: "grid", placeItems: "center", fontSize: 27, color: "var(--orange)" }}>
                    {["▱", "◫", "◇", "✦", "○", "▤", "⬡", "⬢", "⬠"][i % 9]}
                  </span>
                  <small style={{ fontFamily: "var(--display)", fontSize: 11, color: "#a9a49c" }}>
                    0{i + 1}
                  </small>
                </div>
                <h3>{service}</h3>
                <p>Solução profissional para sua empresa ou evento em {city}.</p>
                <a
                  href={`${whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${service} em ${city}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento <span style={{ color: "var(--orange)", fontSize: 16 }}>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="kicker">Bairros atendidos</span>
              <h2>Atendemos <em>{city}</em> inteira.</h2>
            </div>
            <p>Nossa produção fica em Ananindeua, mas entregamos para todos os bairros de {city}.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {neighborhoods.map((b) => (
              <span
                key={b}
                style={{
                  padding: "12px 24px",
                  border: "1px solid var(--line)",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "var(--display)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "#101114", color: "#fff", padding: "115px 0" }}>
        <div className="shell" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <span className="kicker light" style={{ color: "#ff8b64" }}>Vamos começar?</span>
          <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(44px, 5vw, 68px)", letterSpacing: "-.065em", lineHeight: 0.91, marginTop: 20, marginBottom: 22 }}>
            Pronto para colocar sua marca <em style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, color: "var(--orange)" }}>em destaque em {city}?</em>
          </h2>
          <p style={{ color: "#9c9ba0", lineHeight: 1.75, marginBottom: 34 }}>
            Fale com a gente pelo WhatsApp e receba um orçamento rápido e sem compromisso.
          </p>
          <a
            className="button button-primary"
            href={`${whatsapp}?text=${encodeURIComponent(`Olá! Vim pelo site e gostaria de um orçamento em ${city}.`)}`}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 14 }}
          >
            Falar no WhatsApp <span>↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="shell footer-top">
          <a className="brand footer-brand" href="/">
            <img className="brand-logo-img" src="/images/logo-ananisign.jpg" alt="Logomarca AnaniSign" />
            <span className="brand-copy">
              <strong>ANANI</strong>
              <b>SIGN</b>
              <small>impressão digital</small>
            </span>
          </a>
          <p>Comunicação visual que coloca sua marca em destaque em Belém, Ananindeua e Marituba.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/ananisign/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.facebook.com/ananisingimpressaodigital/" target="_blank" rel="noreferrer">Facebook ↗</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 AnaniSign Impressão Digital</span>
          <span>Belém • Ananindeua • Marituba — Pará, Brasil</span>
        </div>
      </footer>

      {/* WhatsApp float */}
      <a
        className="whatsapp-float"
        href={`${whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de solicitar um orçamento.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <span>◔</span>
        <b>Orçamento rápido</b>
      </a>
    </main>
  );
}
