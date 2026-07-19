const steps = [
  {
    step: "01",
    title: "Briefing rápido",
    description:
      "Você conta o que o negócio faz, o público e o objetivo. Em poucas horas já desenhamos o caminho do site.",
  },
  {
    step: "02",
    title: "Design de impacto",
    description:
      "Layout moderno e chamativo, textos que vendem e visual alinhado à sua marca — pronto para impressionar.",
  },
  {
    step: "03",
    title: "No ar em até 72h",
    description:
      "Domínio, hospedagem, SEO base, WhatsApp, Maps e formulário configurados. Site publicado e pronto para captar clientes.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="relative overflow-hidden bg-canvas-dark py-20 sm:py-28"
    >
      <div
        className="glow-orb right-0 top-1/2 h-[360px] w-[360px] -translate-y-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(79,85,241,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent-bright">
            Processo simples
          </p>
          <h2
            id="como-funciona-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:leading-[1.1]"
          >
            Do zero ao site no ar
            <br />
            <span className="text-white/50">em até 72 horas.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((item, i) => (
            <article
              key={item.step}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium tabular-nums text-accent-bright">
                  {item.step}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden text-white/20 md:inline">→</span>
                )}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
