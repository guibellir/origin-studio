export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Data de publicação ISO (YYYY-MM-DD) */
  publishedAt: string;
  /** Tempo de leitura estimado em minutos */
  readingTime: number;
  category: string;
  /** Capa em /public (ex.: /blog/cover-seo.jpg) */
  coverImage: string;
  coverAlt: string;
  author: {
    name: string;
    role: string;
  };
  /** Palavras-chave para metadata (não spam) */
  keywords: string[];
  /** Resumo curto para cards */
  excerpt: string;
  /** Corpo do artigo em seções */
  content: BlogSection[];
};

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-seu-negocio-precisa-de-um-site-profissional",
    title: "Por que seu negócio precisa de um site profissional (mesmo com Instagram)",
    description:
      "Rede social ajuda na divulgação, mas não substitui um site. Entenda o que um site profissional entrega de credibilidade, contato e presença no Google.",
    publishedAt: "2026-07-10",
    readingTime: 6,
    category: "Presença digital",
    coverImage: "/blog/cover-site-profissional.jpg",
    coverAlt:
      "Ilustração de site profissional em notebook e celular, representando presença digital completa",
    author: {
      name: "Origin Studio",
      role: "Equipe de criação",
    },
    keywords: [
      "site profissional",
      "por que ter um site",
      "site para empresas",
      "site vs instagram",
      "criação de sites",
    ],
    excerpt:
      "Instagram é ótimo para mostrar o dia a dia. Um site é o que fecha a confiança quando o cliente decide te procurar de verdade.",
    content: [
      {
        type: "p",
        text: "Se o seu negócio ainda depende só de redes sociais, você não está sozinho. Muita gente vende pelo Instagram, responde no Direct e acha que “site é coisa de empresa grande”. O problema é que o cliente não pensa assim quando precisa confiar em você.",
      },
      {
        type: "p",
        text: "Antes de mandar mensagem, a maioria pesquisa o nome da empresa no Google, olha se existe um endereço profissional na internet e compara com a concorrência. Sem site, o negócio some — ou parece improvisado, mesmo quando o serviço é excelente.",
      },
      {
        type: "h2",
        text: "Rede social e site fazem trabalhos diferentes",
      },
      {
        type: "p",
        text: "O Instagram (e o WhatsApp) são canais de conversa e rotina. Eles mudam o algoritmo, escondem posts antigos e dependem de a pessoa já te seguir ou achar o perfil certo. O site, por outro lado, é o seu espaço fixo: você controla a mensagem, o layout e o caminho até o contato.",
      },
      {
        type: "ul",
        items: [
          "Site: credibilidade, SEO, apresentação completa do serviço e captura de orçamento.",
          "Instagram: alcance, bastidores e relacionamento com quem já te acompanha.",
          "WhatsApp: fechamento rápido — ideal como destino, não como única vitrine.",
        ],
      },
      {
        type: "quote",
        text: "Quem te encontra no Google já está com intenção de comprar. Quem te acha só no feed ainda está só passando o tempo.",
      },
      {
        type: "h2",
        text: "O que um site profissional precisa ter de verdade",
      },
      {
        type: "p",
        text: "Não é sobre encher a página de animações. É sobre deixar claro o que você faz, para quem faz e como falar com você — em menos de alguns segundos, principalmente no celular.",
      },
      {
        type: "ol",
        items: [
          "Proposta objetiva na primeira tela (o que você resolve).",
          "Prova de confiança: depoimentos, fotos reais, CNPJ, endereço ou áreas de atendimento.",
          "Caminhos de contato óbvios: WhatsApp, formulário e, se fizer sentido, mapa.",
          "Textos legíveis e páginas leves — ninguém espera um site lento em 2026.",
          "Base de SEO: títulos, descrições e estrutura que o Google consiga entender.",
        ],
      },
      {
        type: "h2",
        text: "“Mas eu já tenho um perfil bem cuidado…”",
      },
      {
        type: "p",
        text: "Perfil bem cuidado ajuda — e muito. Só que ele não é seu. A plataforma muda regras, limita links e compete com milhares de outros conteúdos. Um site com domínio próprio (seunegocio.com.br) reforça marca, e-mail profissional e presença estável ao longo do tempo.",
      },
      {
        type: "callout",
        text: "Na prática: use a rede social para atrair atenção e o site para converter. O botão “Fale no WhatsApp” no site costuma performar melhor do que um link genérico na bio.",
      },
      {
        type: "h2",
        text: "Quando vale a pena investir",
      },
      {
        type: "p",
        text: "Se você atende clientes, fecha orçamento ou precisa parecer confiável em poucos cliques, site não é luxo — é infraestrutura. Clínicas, escritórios, restaurantes, prestadores de serviço e profissionais liberais costumam sentir diferença rápida na qualidade dos contatos.",
      },
      {
        type: "p",
        text: "O ideal é sair com uma solução completa: visual moderno, WhatsApp, formulário, SEO básico e publicação (domínio + hospedagem). Assim você não fica com um “projeto de site” parado no meio do caminho.",
      },
      {
        type: "h2",
        text: "Próximo passo",
      },
      {
        type: "p",
        text: "Se quiser um site profissional sem arrastar o processo por meses, fale com a Origin Studio. A gente monta a estrutura, publica e deixa o caminho de contato pronto — em muitos projetos, em até 72 horas após o briefing e os materiais.",
      },
    ],
  },
  {
    slug: "site-com-whatsapp-como-transformar-visitas-em-conversas",
    title: "Site com WhatsApp: como transformar visitas em conversas (sem ser invasivo)",
    description:
      "Aprenda a posicionar o botão de WhatsApp no site, escrever a mensagem certa e evitar erros que afastam o cliente na hora de pedir orçamento.",
    publishedAt: "2026-07-14",
    readingTime: 7,
    category: "Conversão",
    coverImage: "/blog/cover-whatsapp.jpg",
    coverAlt:
      "Ilustração de interface de site com balões de conversa e integração de mensagens",
    author: {
      name: "Origin Studio",
      role: "Equipe de criação",
    },
    keywords: [
      "site com WhatsApp",
      "botão WhatsApp site",
      "WhatsApp Business",
      "converter visitas em clientes",
      "orçamento pelo WhatsApp",
    ],
    excerpt:
      "O cliente já está no seu site. O que falta, na maioria das vezes, é um caminho óbvio e confortável para falar com você.",
    content: [
      {
        type: "p",
        text: "No Brasil, WhatsApp não é “mais um canal”. É o canal. Se o seu site não leva a pessoa para uma conversa com pouquíssima fricção, você está pedindo esforço demais na hora em que ela já demonstrou interesse.",
      },
      {
        type: "p",
        text: "Isso não significa colar um botão verde piscando em todo canto. Significa desenhar o caminho: por que clicar, o que acontece depois e como você responde.",
      },
      {
        type: "h2",
        text: "Onde o botão de WhatsApp funciona melhor",
      },
      {
        type: "ul",
        items: [
          "Na primeira dobra (hero), perto do pedido principal de orçamento.",
          "Depois de explicar o serviço — quando a dúvida natural é “quanto custa / como faço”.",
          "No rodapé e como botão flutuante no mobile (com cuidado para não cobrir o conteúdo).",
          "Em páginas de serviço específicas, com mensagem já contextualizada.",
        ],
      },
      {
        type: "p",
        text: "No celular, o flutuante ajuda porque o polegar já está na área de ação. No desktop, botões dentro do conteúdo costumam parecer mais “oficiais” do que só o ícone colado na tela.",
      },
      {
        type: "h2",
        text: "A mensagem pré-preenchida faz diferença",
      },
      {
        type: "p",
        text: "Em vez de abrir um chat vazio, prepare um texto simples. A pessoa pode editar, mas já chega organizada — e você entende de onde veio o contato.",
      },
      {
        type: "quote",
        text: "Olá! Vim pelo site e quero um orçamento para [serviço].",
      },
      {
        type: "p",
        text: "Para landing pages de campanha, personalize: “Vim pelo anúncio de [oferta]”. Isso reduz o vai-e-volta e acelera o atendimento.",
      },
      {
        type: "h2",
        text: "Erros comuns que matam a conversão",
      },
      {
        type: "ol",
        items: [
          "Número errado ou link quebrado (teste no iPhone e no Android).",
          "Horário de atendimento escondido — o cliente manda mensagem e some sem resposta.",
          "Vários CTAs competindo: “ligue”, “e-mail”, “chat”, “form” sem hierarquia.",
          "Página lenta: o botão até existe, mas a pessoa desistiu antes de carregar.",
          "Prometer resposta em 1 minuto e demorar um dia — a expectativa importa.",
        ],
      },
      {
        type: "h2",
        text: "WhatsApp + formulário: não precisa escolher um só",
      },
      {
        type: "p",
        text: "Algumas pessoas preferem formulário (especialmente em horário comercial corrido ou quando querem anexar contexto). Outras querem resposta imediata. Ofereça os dois, com prioridade clara: WhatsApp como caminho principal e formulário como alternativa.",
      },
      {
        type: "callout",
        text: "Dica prática: no site, use um texto do tipo “Resposta rápida no WhatsApp” e, no formulário, “Prefere deixar os detalhes por escrito?”. Assim cada um se identifica.",
      },
      {
        type: "h2",
        text: "O que configurar além do botão",
      },
      {
        type: "ul",
        items: [
          "WhatsApp Business com nome, foto e descrição alinhados à marca.",
          "Mensagem de ausência fora do horário.",
          "Catálogo ou atalhos de resposta para dúvidas repetidas.",
          "UTM ou mensagens diferentes por página para saber o que está convertendo.",
        ],
      },
      {
        type: "h2",
        text: "Resumindo",
      },
      {
        type: "p",
        text: "Site bom sem WhatsApp bem posicionado é vitrine trancada. WhatsApp sem site é conversa sem contexto. Os dois juntos — com mensagem clara e resposta disciplinada — transformam visita em conversa de verdade.",
      },
      {
        type: "p",
        text: "Se quiser um site já com WhatsApp, formulário e publicação prontos, a Origin Studio monta isso no pacote. Você foca em atender; a gente deixa o caminho de entrada redondo.",
      },
    ],
  },
  {
    slug: "seo-basico-para-sites-o-que-realmente-importa",
    title: "SEO básico para sites: o que realmente importa (sem promessa milagrosa)",
    description:
      "Um guia direto sobre SEO on-page para quem está criando ou reformando o site: títulos, conteúdo, velocidade e o que não adianta obsessão cedo demais.",
    publishedAt: "2026-07-18",
    readingTime: 8,
    category: "SEO",
    coverImage: "/blog/cover-seo.jpg",
    coverAlt:
      "Ilustração de lupa e gráficos de crescimento representando SEO e busca no Google",
    author: {
      name: "Origin Studio",
      role: "Equipe de criação",
    },
    keywords: [
      "SEO básico",
      "SEO para sites",
      "aparecer no Google",
      "otimização de site",
      "SEO on-page",
    ],
    excerpt:
      "SEO não é truque secreto. É clareza para o Google e utilidade para quem pesquisa — começando pelo básico bem feito.",
    content: [
      {
        type: "p",
        text: "Todo mundo quer “aparecer no Google”. Pouca gente quer ouvir que isso leva tempo, depende do nicho e não se resolve com uma lista mágica de palavras-chave enfiada no rodapé. Ainda assim, existe um básico que separa site amador de site preparado para crescer.",
      },
      {
        type: "p",
        text: "Este texto é sobre SEO on-page: o que você controla no próprio site. Sem prometer primeira página em sete dias e sem jargão inútil.",
      },
      {
        type: "h2",
        text: "1. Uma página, uma intenção",
      },
      {
        type: "p",
        text: "Cada página importante deve responder a uma pergunta clara. A home explica quem você é e o que oferece. Uma página de serviço aprofunda aquele serviço. Um artigo de blog ataca uma dúvida específica (como este).",
      },
      {
        type: "p",
        text: "Quando a home tenta falar de tudo ao mesmo tempo, o Google e o visitante ficam confusos. Clareza vence densidade artificial de palavras.",
      },
      {
        type: "h2",
        text: "2. Título e descrição que as pessoas querem clicar",
      },
      {
        type: "p",
        text: "O title (aba do navegador / resultado do Google) e a meta description são o seu anúncio gratuito. Inclua o serviço e o diferencial sem gritar.",
      },
      {
        type: "ul",
        items: [
          "Ruim: “Bem-vindo ao nosso site | Empresa XYZ”.",
          "Melhor: “Criação de sites profissionais em até 72h | Origin Studio”.",
          "Description: uma ou duas frases honestas sobre o que a pessoa encontra na página.",
        ],
      },
      {
        type: "h2",
        text: "3. Headings que organizam a leitura",
      },
      {
        type: "p",
        text: "Use um H1 por página. Depois, H2 e H3 como se fossem o sumário do conteúdo. Isso ajuda leitores e mecanismos de busca a entenderem a hierarquia — e evita aquele bloco de texto corrido que ninguém termina.",
      },
      {
        type: "h2",
        text: "4. Conteúdo útil vence “texto para SEO”",
      },
      {
        type: "p",
        text: "Escreva como você explicaria para um cliente no balcão. Responda objeções reais: prazo, preço sob consulta, o que está incluso, se atende a região, como é o processo. Textos genéricos de IA (ou de template) são fáceis de reconhecer — e ruins de ranquear no longo prazo.",
      },
      {
        type: "callout",
        text: "Se você não tem o que escrever, comece por FAQ honesto. Dúvidas reais do WhatsApp viram seções excelentes no site.",
      },
      {
        type: "h2",
        text: "5. Velocidade e mobile não são “detalhe técnico”",
      },
      {
        type: "p",
        text: "A maior parte do tráfego local chega pelo celular. Imagem pesada, slider exagerado e scripts desnecessários matam a paciência. Um site leve, com botões grandes e texto legível, já sai na frente de muita concorrência mal feita.",
      },
      {
        type: "h2",
        text: "6. Google Maps e dados de contato consistentes",
      },
      {
        type: "p",
        text: "Se você atende presencialmente, endereço e mapa bem configurados reforçam confiança. Mantenha nome, telefone e endereço iguais no site, no Instagram e no perfil do Google. Inconsistência confunde o cliente e o buscador.",
      },
      {
        type: "h2",
        text: "O que deixar para depois",
      },
      {
        type: "ul",
        items: [
          "Link building agressivo antes do site estar redondo.",
          "Dezenas de posts rasos só para “ter blog”.",
          "Obsessão por ferramenta de ranking no dia 1.",
          "Keyword stuffing (repetir a mesma frase até cansar).",
        ],
      },
      {
        type: "h2",
        text: "Checklist rápido antes de publicar",
      },
      {
        type: "ol",
        items: [
          "H1 claro com o tema da página.",
          "Title e description únicos.",
          "URLs simples e legíveis.",
          "Imagens comprimidas e com texto alternativo quando fizer sentido.",
          "Links internos entre serviços, FAQ e contato.",
          "Página testada no celular real, não só no simulador.",
        ],
      },
      {
        type: "quote",
        text: "SEO bom é site bom para gente de verdade — que o Google também consegue entender.",
      },
      {
        type: "h2",
        text: "Como a Origin Studio encaixa nisso",
      },
      {
        type: "p",
        text: "Nos projetos de criação de site, entregamos a base de SEO on-page: estrutura, títulos, performance razoável e páginas preparadas para indexação. Não vendemos milagre de ranking; vendemos fundamento sólido para o negócio aparecer e converter.",
      },
      {
        type: "p",
        text: "Se o seu site atual é lento, confuso ou invisível no Google, vale conversar. Às vezes o que falta não é “mais anúncio” — é uma base digna.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate + "T12:00:00"));
}
