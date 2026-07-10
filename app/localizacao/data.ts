export type Location = {
  slug: string;
  city: string;
  state: string;
  neighborhoods: string[];
  description: string;
  services: string[];
};

export const locations: Record<string, Location> = {
  belem: {
    slug: "belem",
    city: "Belém",
    state: "PA",
    neighborhoods: ["Centro", "Batista Campos", "Marco", "Telégrafo", "Nazaré", "Cidade Velha", "Comércio", "Pedreira"],
    description: "Atendemos toda a região de Belém com produção em Ananindeua. Entrega rápida para bairros centrais e regionais.",
    services: [
      "Banners e lonas",
      "Adesivos personalizados",
      "Fachadas e letreiros em ACM",
      "Camisas e uniformes",
      "Canecas e brindes corporativos",
      "Cartões de visita e material gráfico",
      "Plotagem e impressão digital",
    ],
  },
  ananindeua: {
    slug: "ananindeua",
    city: "Ananindeua",
    state: "PA",
    neighborhoods: ["Centro", "São José", "Condor", "Cidade Nova", "Distrito Industrial", "Telégrafo", "Coqueiro", "Marambaia"],
    description: "Nossa sede fica em Ananindeua — produção ágil e atendimento personalizado para empresas e pessoas da cidade.",
    services: [
      "Banners e lonas",
      "Adesivos personalizados",
      "Fachadas e letreiros em ACM",
      "Camisas e uniformes",
      "Canecas e brindes corporativos",
      "Cartões de visita e material gráfico",
      "Plotagem e impressão digital",
      "Sublimação em tecido",
      "Impressão em MDF e ACM",
    ],
  },
  marituba: {
    slug: "marituba",
    city: "Marituba",
    state: "PA",
    neighborhoods: ["Centro", "Ipsep", "Paraisópolis", "Altamira", "Marituba"],
    description: "Atendemos Marituba com a mesma qualidade e agilidade. Produção em Ananindeua com entrega para toda a cidade.",
    services: [
      "Banners e lonas",
      "Adesivos personalizados",
      "Fachadas e letreiros",
      "Camisas e uniformes",
      "Canecas e brindes",
      "Cartões de visita",
      "Impressão digital",
    ],
  },
};

export const locationSlugs = Object.keys(locations);
