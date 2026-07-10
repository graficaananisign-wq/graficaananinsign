"use client";

import { seoPages } from "./data";
import type { SeoPage } from "./data";

const whatsapp = "https://wa.me/5591984838437";

const services = [
  "Banners e Lonas", "Adesivos Personalizados", "Fachadas e Letreiros",
  "Camisas Personalizadas", "Canecas e Brindes", "Materiais Gráficos",
];

const relatedLinks: Record<string, string[]> = {
  "Canecas Sublimadas": ["/seo-pages/canecas-sublimadas-telegrafo-ananindeua", "/seo-pages/canecas-sublimadas-tapajos-ananindeua", "/seo-pages/canecas-sublimadas-ananindeua-arte-final"],
  "Gráfica Rápida": ["/seo-pages/grafica-rapida-acabamento-ponta-negra-ananindeua", "/seo-pages/grafica-rapida-ananindeua-producao", "/seo-pages/grafica-rapida-dom-bosco-ananindeua-pa"],
  "Plotagem": ["/seo-pages/plotagem-tucunduba-sob-medida-ananindeua", "/seo-pages/plotagem-ananindeua-acabamento", "/seo-pages/plotagem-pedreira-ananindeua-pa"],
  "Sublimação em Tecido": ["/seo-pages/sublimacao-em-tecido-boa-apresentacao-da-marca-distrito-industrial-ananindeua", "/seo-pages/sublimacao-em-tecido-cidade-jardim-ananindeua", "/seo-pages/sublimacao-em-tecido-coqueiro-ananindeua-pa"],
  "Papel Timbrado": ["/seo-pages/impressao-digital-papel-timbrado-icoaraci-ananindeua", "/seo-pages/papel-timbrado-ananindeua-producao-rapida", "/seo-pages/papel-timbrado-aguas-lindas-belem-ananindeua-pa"],
  "Impressão de Adesivo": ["/seo-pages/impressao-de-adesivo-ananindeua-perto-de-mim", "/seo-pages/impressao-de-adesivo-pedreira-arte-final-ananindeua", "/seo-pages/impressao-de-adesivo-bengui-ananindeua-pa"],
  "Camisa Uniforme": ["/seo-pages/camisa-uniforme-cidade-nova-belem-ananindeua-pa", "/seo-pages/camisa-uniforme-quarenta-horas-ananindeua", "/seo-pages/camisa-uniforme-canudos-ananindeua"],
  "Cartilhas e Apostilas": ["/seo-pages/cartilhas-e-apostilas-rio-doce-ananindeua", "/seo-pages/cartilhas-e-apostilas-ananindeua-acabamento", "/seo-pages/cartilhas-e-apostilas-parque-guajara-ananindeua-pa"],
  "Letreiro em ACM": ["/seo-pages/letreiro-em-acm-producao-rapida-dom-bosco-ananindeua", "/seo-pages/orcamento-letreiro-em-acm-coqueiro-ananindeua", "/seo-pages/letreiro-em-acm-maguari-impressao-digital-ananindeua"],
  "Impressão em MDF": ["/seo-pages/impressao-em-mdf-telegrafo-arte-final-ananindeua", "/seo-pages/impressao-em-mdf-no-bairro-curucambaba-ananindeua", "/seo-pages/impressao-em-mdf-sob-medida-vila-dias-ananindeua"],
  "Cartão de Visita": ["/seo-pages/sob-medida-cartao-de-visita-aguas-brancas-ananindeua", "/seo-pages/cartao-de-visita-ananindeua-orcamento", "/seo-pages/cartao-de-visita-nazare-ananindeua-pa"],
  "Fachadas e Letreiros": ["/seo-pages/fachadas-e-letreiros-ananindeua-comunicacao-visual", "/seo-pages/fachadas-e-letreiros-impressao-digital-quarenta-horas-ananindeua", "/seo-pages/fachadas-e-letreiros-impressao-de-qualidade-jaderlandia-ananindeua"],
  "Brindes Corporativos": ["/seo-pages/brindes-corporativos-santa-ines-ananindeua-pa", "/seo-pages/brindes-corporativos-materiais-adequados-cidade-velha-ananindeua", "/seo-pages/brindes-corporativos-parque-verde-belem-ananindeua"],
  "Crachás": ["/seo-pages/crachas-verde-ananindeua", "/seo-pages/crachas-pedreira-orcamento-ananindeua", "/seo-pages/crachas-jabatiteua-acabamento-ananindeua"],
  "Impressão de Banner": ["/seo-pages/impressao-de-banner-no-bairro-condor-ananindeua", "/seo-pages/impressao-de-banner-marco-comunicacao-visual-ananindeua", "/seo-pages/impressao-de-banner-rio-doce-producao-rapida-ananindeua"],
  "Papelaria Personalizada": ["/seo-pages/papelaria-personalizada-perpetuo-socorro-orcamento-ananindeua", "/seo-pages/papelaria-personalizada-rio-doce-ananindeua", "/seo-pages/papelaria-personalizada-cremacao-ananindeua"],
  "Pastas Personalizadas": ["/seo-pages/pastas-personalizadas-producao-sob-medida-washington-ananindeua", "/seo-pages/pastas-personalizadas-umarizal-ananindeua-pa", "/seo-pages/pastas-personalizadas-sao-luiz-ananindeua-pa"],
  "Impressão de Banners": ["/seo-pages/arte-final-impressao-de-banners-jaderlandia-ananindeua", "/seo-pages/impressao-de-banners-ananindeua-producao-rapida", "/seo-pages/impressao-de-banners-orientacao-na-arte-final-val-de-cans-ananindeua"],
  "Caneca Personalizada": ["/seo-pages/caneca-personalizada-verde-ananindeua-pa", "/seo-pages/caneca-personalizada-tucunduba-ananindeua-pa", "/seo-pages/caneca-personalizada-orcamento-cremacao-ananindeua"],
  "Lona Digital": ["/seo-pages/lona-digital-nossa-senhora-do-perpetuo-socorro-ananindeua", "/seo-pages/lona-digital-pedreira-ananindeua", "/seo-pages/lona-digital-sob-medida-cidade-nova-ananindeua"],
  "Faixas": ["/seo-pages/faixas-jabatiteua-perto-de-mim-ananindeua", "/seo-pages/faixas-uirassumirim-ananindeua-pa", "/seo-pages/faixas-ponta-negra-ananindeua-pa"],
  "Cavaletes": ["/seo-pages/cavaletes-ananindeua-producao-rapida", "/seo-pages/cavaletes-ananindeua-arte-final", "/seo-pages/orcamento-cavaletes-pedra-do-sal-ananindeua"],
  "Chaveiro Personalizado": ["/seo-pages/chaveiro-personalizado-pratinha-ananindeua-pa", "/seo-pages/chaveiro-personalizado-pratinha-ananindeua", "/seo-pages/chaveiro-personalizado-ananindeua-no-bairro"],
  "Lona Promocional": ["/seo-pages/lona-promocional-mata-fome-ananindeua", "/seo-pages/lona-promocional-bengui-sob-medida-ananindeua", "/seo-pages/lona-promocional-cidade-nova-belem-ananindeua"],
  "Orçamento": ["/seo-pages/orcamento-icui-comunicacao-visual-ananindeua", "/seo-pages/orcamento-solucao-visual-para-empresas-cohab-ananindeua", "/seo-pages/orcamento-caiara-ananindeua"],
  "Sinalização Externa": ["/seo-pages/sinalizacao-externa-prazo-combinado-outeiro-ananindeua", "/seo-pages/sinalizacao-externa-sao-luiz-ananindeua", "/seo-pages/sinalizacao-externa-fazendinha-ananindeua"],
  "Flyer Promocional": ["/seo-pages/perto-de-mim-flyer-promocional-galileia-ananindeua", "/seo-pages/flyer-promocional-atendimento-local-icui-ananindeua", "/seo-pages/flyer-promocional-ananindeua-acabamento"],
  "Impressão de Panfletos": ["/seo-pages/impressao-de-panfletos-ananindeua-no-bairro", "/seo-pages/impressao-de-panfletos-terra-firme-ananindeua", "/seo-pages/impressao-de-panfletos-outeiro-perto-de-mim-ananindeua"],
  "Sinalização Interna": ["/seo-pages/sinalizacao-interna-parque-guajara-ananindeua-pa", "/seo-pages/sinalizacao-interna-santa-lucia-marituba-acabamento-ananindeua", "/seo-pages/sinalizacao-interna-condor-impressao-digital-ananindeua"],
  "Identidade Visual": ["/seo-pages/identidade-visual-arte-final-balanca-ananindeua", "/seo-pages/identidade-visual-orcamento-galileia-ananindeua", "/seo-pages/identidade-visual-telegrafo-ananindeua-pa"],
  "Totem Publicitário": ["/seo-pages/totem-publicitario-aguas-lindas-belem-acabamento-ananindeua", "/seo-pages/comunicacao-visual-totem-publicitario-verde-ananindeua", "/seo-pages/totem-publicitario-campina-producao-rapida-ananindeua"],
  "Sinalização Empresarial": ["/seo-pages/sinalizacao-empresarial-ananindeua-impressao-digital", "/seo-pages/sinalizacao-empresarial-perto-de-mim-vila-canaa-ananindeua", "/seo-pages/producao-rapida-sinalizacao-empresarial-jurunas-ananindeua"],
  "Display Promocional": ["/seo-pages/display-promocional-uirassumirim-ananindeua-pa", "/seo-pages/display-promocional-vila-macaranduba-ananindeua-pa", "/seo-pages/display-promocional-ananindeua-sob-medida"],
  "Banners e Lonas": ["/seo-pages/banners-e-lonas-telegrafo-ananindeua", "/seo-pages/impressao-digital-banners-e-lonas-cidade-jardim-ananindeua", "/seo-pages/impressao-de-banners-ananindeua-producao-rapida"],
  "Camisas Personalizadas": ["/seo-pages/camisas-personalizadas-perto-de-mim-campina-ananindeua", "/seo-pages/acabamento-camisas-personalizadas-washington-ananindeua", "/seo-pages/camisas-personalizadas-ananindeua-arte-final"],
  "Envelope Personalizado": ["/seo-pages/producao-rapida-envelope-personalizado-taboquinha-ananindeua", "/seo-pages/envelope-personalizado-materiais-adequados-perpetuo-socorro-ananindeua", "/seo-pages/producao-rapida-impressao-de-envelope-tenone-ananindeua"],
  "Impressão de Envelope": ["/seo-pages/impressao-de-envelope-atendimento-pelo-whatsapp-fe-em-deus-ananindeua", "/seo-pages/impressao-de-envelope-marambaia-ananindeua", "/seo-pages/impressao-de-envelope-comunicacao-visual-uirassumirim-ananindeua"],
  "Envelopes": ["/seo-pages/envelopes-ananindeua-perto-de-mim", "/seo-pages/envelopes-fazendinha-perto-de-mim-ananindeua", "/seo-pages/envelopes-porto-sao-pedro-ananindeua"],
  "Gráfica de Banner": ["/seo-pages/acabamento-grafica-de-banner-val-de-cans-ananindeua", "/seo-pages/grafica-de-banner-ananindeua-sob-medida", "/seo-pages/grafica-de-banner-comunicacao-visual-reduto-ananindeua"],
  "Gráfica de Cartão": ["/seo-pages/grafica-de-cartao-ananindeua-sob-medida", "/seo-pages/grafica-de-cartao-dom-bosco-arte-final-ananindeua", "/seo-pages/grafica-de-cartao-orcamento-cidade-velha-ananindeua"],
  "Folder Gráfico": ["/seo-pages/folder-grafico-producao-rapida-aguas-lindas-ananindeua", "/seo-pages/folder-grafico-tatuquara-sob-medida-ananindeua", "/seo-pages/folder-grafico-ananindeua-no-bairro"],
  "Impressão de Folheto": ["/seo-pages/sob-medida-impressao-de-folheto-nazare-ananindeua", "/seo-pages/impressao-de-folheto-sacramenta-ananindeua-pa", "/seo-pages/impressao-de-folheto-nova-icoaraci-ananindeua"],
  "Comunicação Visual": ["/seo-pages/comunicacao-visual-ananindeua", "/seo-pages/comunicacao-visual-campina-perto-de-mim-ananindeua", "/seo-pages/comunicacao-visual-curucambaba-ananindeua"],
  "Bloco Personalizado": ["/seo-pages/bloco-personalizado-marco-ananindeua-pa", "/seo-pages/bloco-personalizado-marco-ananindeua", "/seo-pages/bloco-personalizado-marco-ananindeua-pa"],
  "Impressão de Cartões de Visita": ["/seo-pages/impressao-de-cartoes-de-visita-terra-firme-ananindeua-pa", "/seo-pages/impressao-de-cartoes-de-visita-bela-vista-ananindeua", "/seo-pages/impressao-de-cartoes-de-visita-acabamento-profissional-heliolandia-ananindeua"],
  "Adesivo em Vinil": ["/seo-pages/adesivo-em-vinil-perto-de-mim-tatuquara-ananindeua", "/seo-pages/adesivos-personalizados-materiais-adequados-jabatiteua-ananindeua", "/seo-pages/adesivos-personalizados-aguas-lindas-belem-sob-medida-ananindeua"],
  "Impressão de Pastas": ["/seo-pages/impressao-de-pastas-campina-no-bairro-ananindeua", "/seo-pages/comunicacao-visual-pastas-personalizadas-sacramenta-ananindeua", "/seo-pages/impressao-de-papel-timbrado-vila-canaa-orcamento-ananindeua"],
  "Cartão de Visita Premium": ["/seo-pages/cartao-de-visita-premium-nossa-senhora-do-perpetuo-socorro-no-bairro-ananindeua", "/seo-pages/cartao-de-visita-premium-uniao-ananindeua", "/seo-pages/cartao-de-visita-premium-nossa-senhora-do-perpetuo-socorro-no-bairro-ananindeua"],
  "Cartão Fidelidade": ["/seo-pages/cartao-fidelidade-acabamento-una-ananindeua", "/seo-pages/cartao-fidelidade-acabamento-una-ananindeua", "/seo-pages/cartao-fidelidade-acabamento-una-ananindeua"],
  "Plotagem de Veículos": ["/seo-pages/plotagem-de-veiculos-impressao-de-qualidade-washington-ananindeua", "/seo-pages/plotagem-de-veiculos-ananindeua-impressao-digital", "/seo-pages/plotagem-de-veiculos-jaderlandia-acabamento-ananindeua"],
  "Impressão Digital": ["/seo-pages/impressao-digital-pratinha-belem-ananindeua-pa", "/seo-pages/impressao-digital-producao-rapida-porto-dos-moinhos-ananindeua", "/seo-pages/impressao-digital-porto-dos-moinhos-producao-rapida-ananindeua"],
  "Sublimação": ["/seo-pages/sublimacao-tenone-ananindeua", "/seo-pages/sublimacao-fazendinha-ananindeua", "/seo-pages/sublimacao-em-tecido-coqueiro-ananindeua-pa"],
  "Adesivos Personalizados": ["/seo-pages/adesivos-personalizados-materiais-adequados-jabatiteua-ananindeua", "/seo-pages/adesivos-personalizados-solucao-visual-para-empresas-balanca-ananindeua", "/seo-pages/adesivos-personalizados-aguas-lindas-belem-sob-medida-ananindeua"],
  "Impressão de Crachá": ["/seo-pages/acabamento-impressao-de-cracha-pratinha-ananindeua", "/seo-pages/acabamento-impressao-de-cracha-pratinha-ananindeua", "/seo-pages/acabamento-impressao-de-cracha-pratinha-ananindeua"],
  "Papelaria Corporativa": ["/seo-pages/papelaria-corporativa-acabamento-cidade-nova-ananindeua", "/seo-pages/papelaria-corporativa-impressao-digital-cohab-ananindeua", "/seo-pages/papelaria-corporativa-acabamento-cidade-nova-ananindeua"],
  "Panfletos Coloridos": ["/seo-pages/panfletos-coloridos-ananindeua-perto-de-mim", "/seo-pages/panfletos-coloridos-ananindeua-perto-de-mim", "/seo-pages/panfletos-coloridos-ananindeua-perto-de-mim"],
  "Banner em Lona": ["/seo-pages/banner-em-lona-boa-apresentacao-da-marca-satelite-ananindeua", "/seo-pages/banner-em-lona-impressao-digital-seringal-ananindeua", "/seo-pages/banner-em-lona-boa-apresentacao-da-marca-satelite-ananindeua"],
  "Catálogo Comercial": ["/seo-pages/catalogo-comercial-ananindeua-no-bairro", "/seo-pages/impressao-digital-catalogo-comercial-quarenta-horas-ananindeua", "/seo-pages/catalogo-comercial-porto-dos-moinhos-no-bairro-ananindeua"],
  "Faixa Promocional": ["/seo-pages/faixa-promocional-impressao-digital-pratinha-ananindeua", "/seo-pages/faixa-promocional-comunicacao-visual-fe-em-deus-ananindeua", "/seo-pages/faixa-promocional-sobradinho-comunicacao-visual-ananindeua"],
  "Letreiro em PS": ["/seo-pages/letreiro-em-ps-ananindeua-sob-medida", "/seo-pages/letreiro-em-ps-ananindeua-sob-medida", "/seo-pages/letreiro-em-ps-ananindeua-sob-medida"],
  "Serviço Geral": ["/seo-pages/comunicacao-visual-servico-geral-solo-sagrado-ananindeua", "/seo-pages/comunicacao-visual-servico-geral-solo-sagrado-ananindeua", "/seo-pages/comunicacao-visual-servico-geral-solo-sagrado-ananindeua"],
  "Impressão de Papel Timbrado": ["/seo-pages/impressao-de-papel-timbrado-acabamento-profissional-solo-sagrado-ananindeua", "/seo-pages/impressao-de-papel-timbrado-materiais-adequados-sao-francisco-ananindeua", "/seo-pages/impressao-de-papel-timbrado-vila-canaa-orcamento-ananindeua"],
};

function getRelatedLinks(service: string): { label: string; href: string }[] {
  const slugs = relatedLinks[service] || [];
  return slugs.slice(0, 3).map((href) => ({
    label: seoPages[href.replace("/seo-pages/", "")]?.h1 || href,
    href,
  }));
}

export default function SeoPageComponent({ page }: { page: SeoPage }) {
  const message = `Olá! Vim pelo site e gostaria de solicitar um orçamento para ${page.service} em ${page.neighborhood}.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AnaniSign Gráfica e Comunicação Visual",
    image: "https://graficaananisign.netlify.app/images/logo-ananisign.jpg",
    description: "Gráfica especializada em comunicação visual em Ananindeua-PA. Impressão digital de alta qualidade.",
    telephone: "(91) 98483-8437",
    email: "graficaananisign@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Principal, 975 - Centro",
      addressLocality: "Ananindeua",
      addressRegion: "PA",
      postalCode: "67000-000",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: -1.364, longitude: -48.376 },
    url: "https://graficaananisign.netlify.app",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:30", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    sameAs: ["https://www.instagram.com/ananisign/", "https://www.facebook.com/ananisingimpressaodigital/"],
    priceRange: "$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.service} em ${page.city}`,
    provider: { "@type": "LocalBusiness", name: "AnaniSign Gráfica e Comunicação Visual" },
    areaServed: { "@type": "City", name: page.city },
    description: `Serviço de ${page.service} oferecido por AnaniSign Gráfica e Comunicação Visual em ${page.city}, bairro ${page.neighborhood}.`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Como pedir orçamento de ${page.service} em ${page.neighborhood}?`,
        acceptedAnswer: { "@type": "Answer", text: `Envie pelo WhatsApp as medidas, quantidade, tipo de material e prazo desejado. A AnaniSign Gráfica e Comunicação Visual orienta sobre a melhor opção.` },
      },
      {
        "@type": "Question",
        name: `A AnaniSign atende o bairro ${page.neighborhood}?`,
        acceptedAnswer: { "@type": "Answer", text: `Sim. A empresa atende clientes do ${page.neighborhood} e de outras regiões de ${page.city}. Confirme formas de retirada ou entrega.` },
      },
      {
        "@type": "Question",
        name: `Qual o prazo de entrega para ${page.service}?`,
        acceptedAnswer: { "@type": "Answer", text: `O prazo varia de acordo com a quantidade, complexidade e acabamento. Fale com a equipe para combinhar o prazo ideal.` },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://graficaananisign.netlify.app" },
      { "@type": "ListItem", position: 2, name: "Serviços", item: "https://graficaananisign.netlify.app/#servicos" },
      { "@type": "ListItem", position: 3, name: page.service, item: `https://graficaananisign.netlify.app/seo-pages/${page.slug}` },
    ],
  };

  const related = getRelatedLinks(page.service);

  return (
    <main style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", color: "#333", background: "#fff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", color: "#fff", padding: "16px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none", fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>ANANI<b style={{ color: "#ff5a1f" }}>SIGN</b></a>
          <nav style={{ display: "flex", gap: 16, fontSize: 13, fontWeight: 600 }}>
            <a href="/" style={{ color: "#e0e0e0", textDecoration: "none" }}>Início</a>
            <a href="/blog" style={{ color: "#e0e0e0", textDecoration: "none" }}>Blog</a>
            <a href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" style={{ background: "#ff5a1f", color: "#fff", padding: "8px 16px", borderRadius: 6, textDecoration: "none" }}>Orçamento ↗</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #111216 0%, #1a1a2e 100%)", color: "#fff", padding: "60px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <nav style={{ fontSize: 11, color: "#999", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.12em" }}>
            <a href="/" style={{ color: "#999", textDecoration: "none" }}>Início</a>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#ff5a1f" }}>{page.service}</span>
            <span style={{ margin: "0 8px" }}>/</span>
            <span>{page.neighborhood}</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.04em", margin: "0 0 16px" }}>{page.h1}</h1>
          <p style={{ color: "#aaa", fontSize: 16, lineHeight: 1.7, maxWidth: 700, margin: 0 }}>{page.metaDescription}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 20px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 60 }}>
        <article>
          <h2 style={{ fontSize: 28, color: "#1a1a2e", marginBottom: 16 }}>{page.service} em {page.neighborhood}, {page.city}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#555", marginBottom: 24 }}>
            A AnaniSign Gráfica e Comunicação Visual oferece {page.service.toLowerCase()} para clientes do bairro {page.neighborhood}, em {page.city}. Com atendimento local, orientação técnica e produção sob medida, a empresa acompanha cada etapa para garantir que o resultado atenda suas expectativas.
          </p>

          <h2 style={{ fontSize: 22, color: "#0f3460", borderLeft: "4px solid #ff5a1f", paddingLeft: 15, marginBottom: 16, marginTop: 40 }}>Produção de {page.service} em {page.city}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            A produção considera arte final, material, tamanho, acabamento e prazo. A equipe orienta o melhor caminho para o objetivo de divulgação ou sinalização. Cada projeto recebe atenção individual para garantir cores fiéis, acabamento profissional e entrega no prazo combinado.
          </p>

          <h2 style={{ fontSize: 22, color: "#0f3460", borderLeft: "4px solid #ff5a1f", paddingLeft: 15, marginBottom: 16, marginTop: 40 }}>Atendimento para {page.neighborhood} e região</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            A AnaniSign Gráfica e Comunicação Visual atende clientes do {page.neighborhood}, em {page.city}, e bairros próximos. Solicite orçamento pelo WhatsApp com medidas, quantidade e prazo desejado.
          </p>

          <h2 style={{ fontSize: 22, color: "#0f3460", borderLeft: "4px solid #ff5a1f", paddingLeft: 15, marginBottom: 16, marginTop: 40 }}>Por que escolher a AnaniSign?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>
            A empresa combina atendimento local, orientação técnica, produção sob medida e foco na apresentação profissional da marca. Cores vivas, acabamento impecável e entrega dentro do combinado são compromissos da equipe.
          </p>

          {/* FAQ */}
          <div style={{ marginTop: 50, padding: 40, background: "#f8f9fa", borderRadius: 12 }}>
            <h2 style={{ fontSize: 24, color: "#1a1a2e", marginBottom: 25 }}>Perguntas Frequentes</h2>
            {faqSchema.mainEntity.map((item: any, i: number) => (
              <div key={i} style={{ marginBottom: 20, padding: 20, background: "#fff", borderLeft: "4px solid #ff5a1f", borderRadius: "0 8px 8px 0", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 8, fontSize: "1.05rem" }}>{item.name}</div>
                <div style={{ color: "#555" }}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: 50, background: "linear-gradient(135deg, #ff5a1f 0%, #de3d0b 100%)", color: "#fff", borderRadius: 12, margin: "40px 0" }}>
            <p style={{ fontSize: "1.3rem", marginBottom: 20 }}>Fale com a equipe para orientar seu material.</p>
            <a href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#fff", color: "#ff5a1f", padding: "14px 40px", borderRadius: 50, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}>Falar no WhatsApp</a>
            <a href="tel:5591984838437" style={{ display: "inline-block", background: "transparent", border: "2px solid #fff", color: "#fff", padding: "14px 40px", borderRadius: 50, textDecoration: "none", fontWeight: 700, fontSize: "1.1rem", marginLeft: 10 }}>Ligar Agora</a>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div style={{ padding: 24, background: "#f8f9fa", borderRadius: 12, marginBottom: 24, position: "sticky", top: 20 }}>
            <h3 style={{ fontSize: 16, color: "#1a1a2e", marginBottom: 12 }}>{page.service}</h3>
            <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>Atendemos {page.neighborhood} e região com produção local e entrega no prazo.</p>
            <a href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", background: "#ff5a1f", color: "#fff", padding: "12px 0", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 13 }}>Solicitar Orçamento ↗</a>
          </div>

          <div style={{ padding: 24, background: "#f8f9fa", borderRadius: 12, marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, color: "#1a1a2e", marginBottom: 12 }}>Endereço</h3>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>Av. Principal, 975 — Centro<br />Ananindeua — PA</p>
            <p style={{ fontSize: 13, color: "#666", marginTop: 8 }}><strong>Telefone:</strong> (91) 98483-8437</p>
            <p style={{ fontSize: 13, color: "#666" }}><strong>Horário:</strong> Seg-Sex 07:30–18:00, Sáb 08:00–12:00</p>
          </div>

          {related.length > 0 && (
            <div style={{ padding: 24, background: "#f8f9fa", borderRadius: 12 }}>
              <h3 style={{ fontSize: 14, color: "#1a1a2e", marginBottom: 12 }}>Veja também</h3>
              {related.map((link, i) => (
                <a key={i} href={link.href} style={{ display: "block", color: "#0f3460", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid #e0e0e0", fontSize: 13 }}>{link.label}</a>
              ))}
            </div>
          )}
        </aside>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1a1a2e", color: "#ccc", padding: "40px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
          <p style={{ marginBottom: 8 }}>&copy; 2026 AnaniSign Gráfica e Comunicação Visual. Todos os direitos reservados.</p>
          <p style={{ marginBottom: 8 }}>Av. Principal, 975 — Centro, Ananindeua — PA</p>
          <p>Tel: (91) 98483-8437 | WhatsApp: (91) 98483-8437</p>
        </div>
      </footer>
    </main>
  );
}
