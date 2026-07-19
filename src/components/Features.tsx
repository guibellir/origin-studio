const solutions = [
  {
    title: "Site moderno e chamativo",
    description:
      "Visual de alto impacto, limpo e responsivo — feito para impressionar no celular e no desktop.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    title: "WhatsApp integrado",
    description:
      "Botão flutuante e CTAs diretos para o seu WhatsApp. O cliente fala com você em 1 clique.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 21l2.1-5.4A8.5 8.5 0 1121 11.5z" />
      </svg>
    ),
  },
  {
    title: "Google Maps",
    description:
      "Localização do seu negócio embutida no site. Facilita visitas e fortalece a confiança.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Formulário de contato",
    description:
      "Captura de leads organizada. Receba pedidos de orçamento sem perder mensagens.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    title: "SEO para o Google",
    description:
      "Estrutura, títulos e performance pensados para aparecer nas buscas e atrair clientes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Hospedagem",
    description:
      "Site no ar com boa velocidade e estabilidade. Sem dor de cabeça técnica para você.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16v4H4zM4 13h16v4H4z" />
        <circle cx="7" cy="9" r="0.8" fill="currentColor" />
        <circle cx="7" cy="15" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Domínio",
    description:
      "Seu endereço profissional na internet (ex.: seunegocio.com.br). Configurado e pronto.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9s1.3-6.2 3.8-9z" />
      </svg>
    ),
  },
  {
    title: "Entrega em até 72h",
    description:
      "Do briefing ao site no ar em até 72 horas — com visual profissional e tudo configurado.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="solucoes"
      aria-labelledby="solucoes-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent">
            Tudo incluso
          </p>
          <h2
            id="solucoes-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]"
          >
            Visual que chama atenção.
            <br />
            <span className="text-muted">Solução que fecha o cliente.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Cada projeto de criação de site é moderno, chamativo e pensado para
            gerar contato — com WhatsApp, Google Maps, formulário, SEO,
            hospedagem e domínio. No ar em até 72 horas.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <article
              key={item.title}
              className="card-lift group rounded-3xl border border-black/[0.06] bg-surface p-6 sm:p-7"
              style={{
                transitionDelay: `${Math.min(index, 6) * 40}ms`,
              }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-accent shadow-sm ring-1 ring-black/[0.04] transition-colors group-hover:bg-accent group-hover:text-white">
                {item.icon}
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success"
                  aria-hidden
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
