import { siteConfig } from "@/lib/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

function JsonLdScript({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/brand/origin-mark.svg`,
    },
    email: siteConfig.email,
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    areaServed: siteConfig.areaServed,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["Portuguese", "pt-BR"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service-business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image`,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    priceRange: "$$",
    serviceType: [
      "Criação de sites",
      "Desenvolvimento web",
      "Design de sites profissionais",
      "SEO on-page",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pacotes de criação de sites",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pacote Essencial",
            description:
              "Site one-page moderno com WhatsApp, formulário, SEO básico, hospedagem e domínio. Entrega em até 72 horas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pacote Profissional",
            description:
              "Até 5 páginas, WhatsApp, Google Maps, formulário, SEO reforçado, hospedagem e domínio. Entrega em até 72 horas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pacote Premium",
            description:
              "Estrutura sob medida, design de alto impacto, integrações extras e foco em conversão.",
          },
        },
      ],
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "Criação de sites profissionais | Origin Studio",
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#service-business` },
    inLanguage: siteConfig.language,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/opengraph-image`,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Em quanto tempo o site fica pronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No pacote essencial e no profissional, o prazo típico é de até 72 horas após o briefing e o envio dos materiais (logo, textos, fotos e dados de contato). Projetos maiores ou com muitas páginas têm prazo definido no orçamento.",
        },
      },
      {
        "@type": "Question",
        name: "O que está incluso na criação do site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Site moderno e responsivo, integração com WhatsApp, Google Maps (conforme o pacote), formulário de contato, otimização básica de SEO, configuração de hospedagem e domínio. O detalhamento depende do pacote escolhido.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês também cuidam do domínio e da hospedagem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Nos pacotes com hospedagem e domínio inclusos, orientamos o registro (ou usamos o domínio que você já tem) e deixamos o site no ar com a configuração necessária.",
        },
      },
      {
        "@type": "Question",
        name: "O site funciona bem no celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todos os projetos são mobile-first: o layout é pensado primeiro para o celular e depois ajustado para tablet e desktop.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o SEO incluso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fazemos a base de SEO on-page: títulos e descrições, estrutura de headings, textos legíveis, performance razoável e páginas preparadas para o Google indexar. Campanhas pagas e link building avançado ficam fora do escopo padrão.",
        },
      },
      {
        "@type": "Question",
        name: "Como peço um orçamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pelo formulário do site ou pelo WhatsApp. Conte o tipo de negócio, se já tem domínio e o que precisa no site. Retornamos com prazo e investimento sem enrolação.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
      <JsonLdScript data={professionalService} />
      <JsonLdScript data={webPage} />
      <JsonLdScript data={faq} />
      <JsonLdScript data={breadcrumb} />
    </>
  );
}
