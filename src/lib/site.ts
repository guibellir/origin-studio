/**
 * Dados centrais da marca Origin Studio.
 * Defina NEXT_PUBLIC_SITE_URL quando o domínio estiver no ar.
 */
export const siteConfig = {
  name: "Origin Studio",
  legalName: "Origin Studio",
  /** Slogan principal */
  slogan: "Sites modernos que colocam seu negócio no mapa.",
  /** Linha curta sob o logo / metadata */
  tagline: "Criação de sites profissionais",
  /** Apoio de campanha (prazo) */
  supportLine: "Do zero ao ar em até 72 horas",
  description:
    "Origin Studio — criação de sites modernos e profissionais com WhatsApp, Google Maps, formulário, SEO, hospedagem e domínio. Entrega em até 72 horas.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://originstudio.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  email: "contato@originstudio.com.br",
  /** Substitua pelo número real (somente dígitos, com DDI) */
  whatsapp: "5500000000000",
  whatsappDisplay: "WhatsApp",
  areaServed: "Brasil",
  sameAs: [] as string[],
  founder: undefined as string | undefined,
  colors: {
    accent: "#4f55f1",
    accentBright: "#6b70ff",
    accentDeep: "#3a40c4",
    ink: "#191c1f",
    black: "#000000",
    white: "#ffffff",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
