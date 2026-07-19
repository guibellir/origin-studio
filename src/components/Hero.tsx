export default function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100vh] min-h-[100dvh] w-full flex-col justify-center bg-canvas-dark pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      {/* Glows contidos — sem position que cause overflow lateral no iOS */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-0 h-[50vw] max-h-[380px] w-[90vw] max-w-[420px] -translate-x-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(79,85,241,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[10%] left-0 h-[40vw] max-h-[220px] w-[50vw] max-w-[240px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,161,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/80 sm:mb-6 sm:px-4 sm:text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
            <span className="truncate">Origin Studio · No ar em até 72h</span>
          </div>

          <h1
            id="hero-heading"
            className="text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Sites modernos e{" "}
            <span className="text-[#c7c9ff]">chamativos</span> que fazem seu
            negócio <span className="text-[#c7c9ff]">se destacar</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-lg md:text-xl">
            Design profissional, visual de alto impacto e tudo incluso: WhatsApp,
            Google Maps, formulário, SEO, hospedagem e domínio. Seu site no ar
            em até 72 horas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a href="#contato" className="btn-accent w-full sm:w-auto">
              Quero meu site
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#solucoes" className="btn-ghost-dark w-full sm:w-auto">
              Ver o que está incluso
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-14 sm:grid-cols-4 sm:gap-4">
            {[
              { value: "72h", label: "até o site no ar*" },
              { value: "100%", label: "design sob medida" },
              { value: "SEO", label: "pronto pro Google" },
              { value: "Full", label: "solução completa" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 sm:px-4 sm:py-5"
              >
                <div className="text-xl font-semibold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-white/50 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[11px] leading-relaxed text-white/35 sm:mt-4 sm:text-xs">
            *Prazo típico para o pacote essencial, com briefing e materiais
            prontos. Projetos maiores sob consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
