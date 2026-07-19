const packages = [
  {
    name: "Essencial",
    tagline: "Presença profissional",
    price: "Sob consulta",
    highlight: false,
    features: [
      "One-page moderna e chamativa",
      "WhatsApp integrado",
      "Formulário de contato",
      "SEO básico",
      "Hospedagem + domínio*",
      "Entrega em até 72h",
    ],
  },
  {
    name: "Profissional",
    tagline: "O mais escolhido",
    price: "Sob consulta",
    highlight: true,
    features: [
      "Até 5 páginas de alto impacto",
      "WhatsApp + CTAs estratégicos",
      "Google Maps embutido",
      "Formulário avançado",
      "SEO on-page reforçado",
      "Hospedagem + domínio*",
      "Entrega em até 72h*",
    ],
  },
  {
    name: "Premium",
    tagline: "Máxima conversão",
    price: "Sob consulta",
    highlight: false,
    features: [
      "Estrutura sob medida",
      "Design de alto impacto",
      "Integrações extras",
      "SEO + performance",
      "Copywriting de conversão",
      "Suporte prioritário",
      "Prazo sob consulta",
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="pacotes"
      aria-labelledby="pacotes-heading"
      className="bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-accent">
            Pacotes
          </p>
          <h2
            id="pacotes-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]"
          >
            Escolha o nível da sua presença digital
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Preços sob medida para o seu negócio. O importante: você sai com
            solução completa, não com um site “pela metade”.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-[28px] p-7 sm:p-8 ${
                pkg.highlight
                  ? "bg-canvas-dark text-white shadow-2xl shadow-accent/20 ring-1 ring-accent/40"
                  : "bg-white text-ink ring-1 ring-black/[0.06]"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  Recomendado
                </span>
              )}

              <p
                className={`text-sm font-medium ${
                  pkg.highlight ? "text-accent-bright" : "text-accent"
                }`}
              >
                {pkg.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {pkg.name}
              </h3>
              <p
                className={`mt-4 text-3xl font-semibold tracking-tight ${
                  pkg.highlight ? "text-white" : "text-ink"
                }`}
              >
                {pkg.price}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.highlight
                          ? "bg-success/20 text-success"
                          : "bg-success/15 text-success"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span
                      className={
                        pkg.highlight ? "text-white/75" : "text-muted"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`mt-8 w-full text-center text-sm ${
                  pkg.highlight ? "btn-accent" : "btn-primary"
                }`}
              >
                Falar sobre este pacote
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-soft">
          *72h com briefing e materiais prontos (Essencial/Profissional).
          Domínio e hospedagem conforme o plano. Detalhes no orçamento.
        </p>
      </div>
    </section>
  );
}
