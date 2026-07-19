/**
 * Dados centrais do site — use em metadata, JSON-LD e CTAs.
 * Quando o domínio estiver definido, atualize `siteUrl` ou defina
 * NEXT_PUBLIC_SITE_URL no ambiente.
 */
export const siteConfig = {
  name: "Origin Studio",
  legalName: "Origin Studio",
  tagline: "Criação de sites modernos e profissionais",
  description:
    "Criação de sites modernos e profissionais com WhatsApp, Google Maps, formulário de contato, SEO, hospedagem e domínio. Entrega em até 72 horas.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://originstudio.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  email: "contato@originstudio.com.br",
  /** Substitua pelo número real (somente dígitos, com DDI) */
  whatsapp: "5500000000000",
  whatsappDisplay: "WhatsApp",
  /** Cidade/estado quando definir — ajuda SEO local */
  areaServed: "Brasil",
  sameAs: [] as string[],
  founder: undefined as string | undefined,
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
