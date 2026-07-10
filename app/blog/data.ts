export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keyword: string;
  cover: string;
  image?: string;
  intro: string[];
  sections: ArticleSection[];
  conclusion: string;
  cta: string;
};

export const articles: Record<string, Article> = {
  "papel-cartao-visita": {
    slug: "papel-cartao-visita",
    tag: "Dicas",
    title: "Qual o melhor papel para cartão de visita?",
    description: "Conheça os melhores tipos de papel para cartão de visita e escolha o acabamento ideal para sua empresa em Ananindeua.",
    date: "15 de maio de 2026",
    readTime: "5 min de leitura",
    keyword: "cartão de visita em Ananindeua",
    cover: "cover-paper",
    image: "/blog/dicas-melhor-papel-cartao-visita-ananindeua.jpg.png",
    intro: [
      "O cartão de visita continua sendo um dos materiais gráficos mais importantes para apresentar uma empresa. Ele transforma um contato rápido em uma lembrança física da sua marca — e a escolha do papel influencia diretamente essa percepção.",
      "Para quem procura cartão de visita em Ananindeua, a melhor opção depende do estilo da empresa, do uso cotidiano e do acabamento desejado. Veja as diferenças antes de solicitar sua impressão.",
    ],
    sections: [
      { heading: "1. Papel fosco: versátil e profissional", paragraphs: ["O papel fosco tem superfície suave, sem reflexos, e oferece ótima leitura mesmo em ambientes iluminados. É uma escolha segura para empresas que buscam sobriedade e elegância."], bullets: ["Permite escrever com caneta", "Valoriza textos e informações de contato", "Indicado para clínicas, consultores, advogados e prestadores de serviço"] },
      { heading: "2. Papel brilhante: cores mais intensas", paragraphs: ["O couché brilhante realça fotografias, ilustrações e logotipos coloridos. É ideal quando o cartão precisa transmitir energia e chamar atenção logo no primeiro contato."], bullets: ["Cores vivas e contraste alto", "Boa opção para gastronomia, moda, beleza e fotografia", "Pode receber laminação para maior resistência"] },
      { heading: "3. Papel linho: textura e exclusividade", paragraphs: ["O papel linho possui textura semelhante a um tecido fino. O toque diferenciado ajuda marcas premium a criar uma apresentação mais sofisticada."], bullets: ["Sensação tátil marcante", "Visual elegante e discreto", "Recomendado para arquitetura, joalheria, eventos e imóveis"] },
      { heading: "4. Papel reciclato: aparência natural", paragraphs: ["O reciclato tem tonalidade e textura naturais, sendo muito usado por negócios que desejam comunicar sustentabilidade, produção artesanal ou proximidade com a natureza."], bullets: ["Identidade visual autêntica", "Combina com tons terrosos e artes minimalistas", "Ideal para produtos naturais, orgânicos e marcas autorais"] },
      { heading: "Como escolher sem errar?", paragraphs: ["Para o primeiro pedido, o fosco costuma ser a opção mais equilibrada. Se a arte possui fotografias e muitas cores, o brilhante pode entregar mais impacto. Já o linho e o reciclato funcionam melhor quando a textura faz parte da mensagem da marca.", "Além do papel, observe a gramatura, o corte, a fidelidade das cores e a qualidade da impressão. Um bom acabamento torna até uma arte simples muito mais profissional."] },
    ],
    conclusion: "Na AnaniSign, você recebe orientação para escolher papel, acabamento e quantidade de acordo com seu negócio. Produzimos cartões de visita com impressão nítida e acabamento profissional em Ananindeua.",
    cta: "Quero orçamento para cartão de visita",
  },
  "adesivo-vinil-superficies": {
    slug: "adesivo-vinil-superficies",
    tag: "Guia",
    title: "Adesivo em vinil: o ideal para cada superfície",
    description: "Aprenda qual adesivo em vinil usar em paredes, vidros, carros, produtos e fachadas. Produção de adesivos personalizados em Ananindeua.",
    date: "20 de maio de 2026",
    readTime: "6 min de leitura",
    keyword: "adesivos personalizados em Ananindeua",
    cover: "cover-vinyl",
    image: "/blog/adesivo-vinil-ideal-para-cada-superficie-ananindeua.jpg.png",
    intro: [
      "O adesivo em vinil é uma das soluções mais versáteis da comunicação visual. Ele pode divulgar uma marca, decorar ambientes, sinalizar espaços, personalizar produtos e transformar vitrines sem exigir uma reforma permanente.",
      "Para garantir aderência e durabilidade, é importante escolher o material adequado para cada superfície. Este guia ajuda quem procura adesivos personalizados em Ananindeua a tomar a decisão certa.",
    ],
    sections: [
      { heading: "1. Adesivo para paredes", paragraphs: ["Em paredes lisas e bem pintadas, o vinil fosco costuma oferecer o acabamento mais elegante. Ele reduz reflexos e funciona bem para logotipos, frases, decoração de lojas e identificação de ambientes."], bullets: ["A parede deve estar limpa e completamente seca", "Pinturas muito novas precisam curar antes da aplicação", "Superfícies com umidade ou textura forte reduzem a aderência"] },
      { heading: "2. Adesivo para vidros e vitrines", paragraphs: ["Vidros aceitam vinil colorido, transparente, jateado ou perfurado. O adesivo perfurado permite exibir a comunicação do lado de fora e preservar parte da visibilidade de dentro para fora."], bullets: ["Vinil jateado oferece privacidade", "Vinil transparente cria efeitos leves", "Perfurado é indicado para vitrines e veículos"] },
      { heading: "3. Adesivo para carros", paragraphs: ["Veículos precisam de vinil automotivo com boa conformação e proteção contra sol e chuva. A aplicação profissional evita bolhas, emendas aparentes e danos à pintura."], bullets: ["Pode ser usado em envelopamento parcial ou total", "Ideal para identificação de frotas", "Exige limpeza técnica antes da aplicação"] },
      { heading: "4. Produtos, rótulos e embalagens", paragraphs: ["Para produtos manuseados com frequência, o vinil branco ou transparente pode receber laminação. Essa camada adicional protege a impressão contra atrito, respingos e desgaste."], bullets: ["Ótimo para rótulos e identificação", "Corte personalizado valoriza a embalagem", "A laminação aumenta a resistência"] },
      { heading: "5. Vinil de corte", paragraphs: ["No vinil de corte, letras e formas são recortadas diretamente no material, sem fundo impresso. O resultado é limpo e muito utilizado em portas de vidro, fachadas, paredes e sinalização."], bullets: ["Aparência profissional", "Boa durabilidade externa", "Disponível em diversas cores"] },
      { heading: "Cuidados para uma aplicação perfeita", paragraphs: ["A superfície deve estar sem poeira, gordura ou umidade. A aplicação precisa ser feita na temperatura adequada, usando espátula para expulsar o ar. Depois de instalado, o adesivo deve permanecer sem lavagem ou chuva pelo período recomendado."] },
    ],
    conclusion: "A AnaniSign produz adesivos em vinil com impressão digital de alta resolução e corte preciso para empresas, vitrines, veículos e produtos em Ananindeua.",
    cta: "Quero orçamento para adesivos",
  },
  "comunicacao-visual-destaque": {
    slug: "comunicacao-visual-destaque",
    tag: "Negócios",
    title: "Como destacar sua empresa com comunicação visual",
    description: "Descubra como fachada, sinalização, adesivos e materiais gráficos ajudam empresas de Ananindeua a atrair mais clientes.",
    date: "25 de maio de 2026",
    readTime: "6 min de leitura",
    keyword: "comunicação visual em Ananindeua",
    cover: "cover-brand",
    image: "/blog/comunicacao-visual-como-destacar-sua-empresa-ananindeua.jpg.png",
    intro: [
      "Antes de conversar com sua equipe ou conhecer seus produtos, o cliente já formou uma impressão do seu negócio. Fachada, cores, placas e materiais gráficos comunicam organização, qualidade e confiança.",
      "Uma estratégia de comunicação visual em Ananindeua ajuda sua empresa a ser encontrada, reconhecida e lembrada em uma região com comércio cada vez mais competitivo.",
    ],
    sections: [
      { heading: "1. A fachada é o primeiro anúncio", paragraphs: ["Uma fachada bem planejada precisa ser legível, coerente com a identidade da empresa e visível à distância. Ela funciona diariamente, mesmo quando nenhuma campanha está ativa."], bullets: ["Use contraste entre fundo e letras", "Evite excesso de informações", "Destaque o nome e a atividade principal", "Mantenha iluminação e conservação em dia"] },
      { heading: "2. Sinalização melhora a experiência", paragraphs: ["Placas internas, adesivos de chão, identificação de setores e horários no vidro ajudam o cliente a encontrar o que precisa. Isso reduz dúvidas e transmite organização."], bullets: ["Oriente entradas, saídas e atendimento", "Padronize cores e tipografia", "Use materiais adequados para cada ambiente"] },
      { heading: "3. Banners e adesivos promovem ofertas", paragraphs: ["Banners e adesivos são excelentes para campanhas sazonais, inaugurações, promoções e lançamentos. Eles têm produção rápida e podem ser atualizados conforme a necessidade do negócio."] },
      { heading: "4. Consistência gera reconhecimento", paragraphs: ["A mesma identidade deve aparecer na fachada, uniformes, cartões, embalagens, redes sociais e materiais de atendimento. Repetição visual faz o público reconhecer sua marca com mais facilidade."] },
      { heading: "5. Qualidade de impressão protege sua imagem", paragraphs: ["Cores alteradas, imagens desfocadas e acabamento irregular passam uma mensagem negativa. Uma boa produção respeita a arte, utiliza materiais selecionados e entrega o acabamento esperado."] },
    ],
    conclusion: "A AnaniSign desenvolve soluções completas para empresas que querem fortalecer sua comunicação visual em Ananindeua, do adesivo promocional à fachada.",
    cta: "Quero destacar minha empresa",
  },
  "fachada-acm-ananindeua": {
    slug: "fachada-acm-ananindeua",
    tag: "Fachadas",
    title: "Fachada em ACM em Ananindeua: como valorizar sua empresa",
    description: "Veja as vantagens da fachada em ACM, opções de acabamento, letras e iluminação para destacar sua empresa em Ananindeua.",
    date: "9 de julho de 2026",
    readTime: "7 min de leitura",
    keyword: "fachada em ACM em Ananindeua",
    cover: "cover-acm",
    image: "/blog/ananisign-fachada-acm.png",
    intro: [
      "A fachada é um dos investimentos mais visíveis de um ponto comercial. Quando bem executada, ela aumenta a percepção de valor do negócio e facilita o reconhecimento da empresa por quem passa pela rua.",
      "A fachada em ACM em Ananindeua se tornou uma escolha frequente para lojas, clínicas, escritórios e restaurantes porque combina resistência, acabamento moderno e diversas possibilidades de personalização.",
    ],
    sections: [
      { heading: "O que é ACM?", paragraphs: ["ACM é um painel composto por lâminas de alumínio e núcleo leve. O material possui superfície uniforme, permite cortes precisos e oferece um acabamento contemporâneo para revestimentos externos e internos."] },
      { heading: "Principais vantagens da fachada em ACM", bullets: ["Visual moderno e profissional", "Boa resistência ao sol e à chuva", "Fácil limpeza e manutenção", "Diversidade de cores e acabamentos", "Integração com letras caixa, logotipo e iluminação"] },
      { heading: "ACM com letras caixa", paragraphs: ["As letras caixa criam volume e deixam o nome da empresa mais legível. Podem ser produzidas em diferentes materiais e combinadas com iluminação frontal, interna ou efeito de luz indireta.", "O contraste entre a cor do painel e as letras é essencial para que a fachada seja identificada durante o dia e à noite."] },
      { heading: "Como planejar uma fachada eficiente", bullets: ["Meça corretamente toda a área", "Priorize nome, logotipo e atividade principal", "Avalie a distância de leitura", "Escolha cores coerentes com a identidade visual", "Considere iluminação e visão noturna"] },
      { heading: "Quanto tempo dura uma fachada em ACM?", paragraphs: ["A durabilidade depende da qualidade dos materiais, da instalação, da exposição climática e da manutenção. Uma estrutura bem produzida e instalada tende a manter sua aparência por muitos anos, exigindo apenas limpeza periódica e revisão da iluminação."] },
      { heading: "Orçamento de fachada em Ananindeua", paragraphs: ["O valor varia de acordo com medidas, estrutura, quantidade de recortes, tipo de letra, iluminação e condições do local. Por isso, um orçamento responsável começa com informações precisas e, quando necessário, avaliação técnica do espaço."] },
    ],
    conclusion: "A AnaniSign cria fachadas em ACM sob medida para empresas de Ananindeua, combinando identidade visual, legibilidade e acabamento profissional.",
    cta: "Solicitar orçamento de fachada em ACM",
  },
  "banner-personalizado-ananindeua": {
    slug: "banner-personalizado-ananindeua",
    tag: "Impressão",
    title: "Banner personalizado em Ananindeua: tamanhos, lona e acabamento",
    description: "Guia para escolher tamanho, material, acabamento e resolução do seu banner personalizado em Ananindeua.",
    date: "9 de julho de 2026",
    readTime: "6 min de leitura",
    keyword: "banner personalizado em Ananindeua",
    cover: "cover-banner",
    image: "/blog/ananisign-banner-personalizado.png",
    intro: [
      "O banner é uma solução prática para divulgar promoções, eventos, cardápios, serviços e informações. Ele pode ser instalado em lojas, igrejas, feiras, escolas, recepções ou espaços externos cobertos.",
      "Para produzir um banner personalizado em Ananindeua com boa leitura e durabilidade, é necessário escolher o tamanho, a lona, a arte e o acabamento de acordo com o local de uso.",
    ],
    sections: [
      { heading: "Qual tamanho de banner escolher?", paragraphs: ["O tamanho depende da distância entre o material e o público. Em balcões e ambientes pequenos, formatos compactos funcionam bem. Para vitrines, palcos ou fachadas, o banner precisa de dimensões maiores e letras proporcionais."], bullets: ["60 × 90 cm: avisos e recepções", "80 × 120 cm: promoções e eventos", "100 × 150 cm: vitrines e pontos de venda", "Medidas personalizadas: fachadas, painéis e cenários"] },
      { heading: "Lona para ambiente interno ou externo", paragraphs: ["A gramatura e o tipo de lona influenciam resistência e aparência. Materiais expostos ao vento, sol ou umidade precisam de especificação adequada e instalação segura.", "Para uso interno, uma lona com boa superfície de impressão valoriza cores e textos. Em áreas externas, a resistência mecânica e o reforço nas bordas ganham importância."] },
      { heading: "Ilhós, bastão ou suporte?", bullets: ["Ilhós: facilita amarração em estruturas e paredes", "Bastão com cordão: indicado para banners suspensos", "Roll-up: solução portátil para eventos e recepções", "Moldura ou estrutura: visual permanente e mais firme"] },
      { heading: "Como preparar uma arte legível", paragraphs: ["O título deve ser curto, o contraste alto e a informação principal precisa ser compreendida em poucos segundos. Textos longos e imagens pequenas dificultam a leitura.", "Sempre utilize arquivos com resolução adequada. Imagens retiradas de aplicativos de mensagem podem perder qualidade quando ampliadas."] },
      { heading: "O banner ajuda no SEO local?", paragraphs: ["O material físico não altera diretamente o posicionamento online, mas fortalece a presença da marca, divulga contatos e pode direcionar clientes para o WhatsApp, site ou perfil comercial por meio de QR Code."] },
    ],
    conclusion: "Na AnaniSign, produzimos banners personalizados com impressão de alta resolução, medidas sob demanda e acabamento adequado ao local de instalação.",
    cta: "Pedir orçamento de banner personalizado",
  },
  "adesivo-vitrine-ananindeua": {
    slug: "adesivo-vitrine-ananindeua",
    tag: "Vitrines",
    title: "Adesivo para vitrine em Ananindeua: guia para atrair clientes",
    description: "Descubra tipos de adesivo para vitrine, cuidados de design e aplicação para destacar sua loja em Ananindeua.",
    date: "9 de julho de 2026",
    readTime: "7 min de leitura",
    keyword: "adesivo para vitrine em Ananindeua",
    cover: "cover-window",
    image: "/blog/ananisign-adesivo-vitrine.png",
    intro: [
      "A vitrine é um espaço de mídia que sua empresa já possui. Com um projeto bem planejado, o vidro deixa de ser apenas uma divisão física e passa a comunicar ofertas, diferenciais e identidade visual durante todo o horário comercial.",
      "O adesivo para vitrine em Ananindeua pode ser usado em campanhas temporárias, decoração permanente, privacidade ou identificação. A escolha correta evita excesso de informação e preserva a visibilidade do ambiente.",
    ],
    sections: [
      { heading: "Adesivo perfurado", paragraphs: ["O vinil perfurado exibe a arte pelo lado de fora enquanto permite visão parcial de dentro para fora. É muito usado em grandes áreas de vidro e fachadas comerciais."], bullets: ["Aproveita uma área ampla de divulgação", "Ajuda a reduzir a exposição interna", "Funciona bem com imagens e campanhas promocionais"] },
      { heading: "Adesivo jateado", paragraphs: ["O jateado imita o efeito de vidro fosco. Ele oferece privacidade sem bloquear completamente a entrada de luz e pode receber recortes com logotipos, faixas e padrões decorativos."], bullets: ["Ideal para clínicas e escritórios", "Visual discreto e profissional", "Pode cobrir todo o vidro ou apenas faixas estratégicas"] },
      { heading: "Vinil de recorte", paragraphs: ["Letras, horários, contatos e logotipos podem ser produzidos em vinil de recorte. Como não há fundo, a comunicação parece integrada ao vidro e mantém um visual limpo."] },
      { heading: "Como criar uma vitrine que vende", bullets: ["Destaque uma mensagem principal", "Use poucas cores e alto contraste", "Mantenha áreas livres para exposição de produtos", "Inclua WhatsApp ou chamada para ação", "Evite letras pequenas e excesso de informações"] },
      { heading: "Campanhas temporárias e sazonais", paragraphs: ["Liquidações, datas comemorativas, inaugurações e lançamentos podem usar adesivos temporários. O material e o tipo de cola devem ser escolhidos considerando o período de permanência e a remoção futura."] },
      { heading: "Aplicação profissional faz diferença", paragraphs: ["Vidros exigem limpeza completa e técnica correta para evitar poeira, bolhas e desalinhamento. Em áreas grandes, o planejamento das emendas é importante para preservar o acabamento da arte."] },
    ],
    conclusion: "A AnaniSign produz e aplica adesivos para vitrines de lojas, clínicas e escritórios em Ananindeua, com projeto sob medida e acabamento profissional.",
    cta: "Quero adesivo para minha vitrine",
  },
};

export const articleList = Object.values(articles);
