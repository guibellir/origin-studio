export default function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-canvas-dark pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Ambient glows */}
      <div
        className="glow-orb left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(79,85,241,0.55) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb -left-20 bottom-10 h-[280px] w-[280px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,161,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb -right-16 top-40 h-[320px] w-[320px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(107,112,255,0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_#00d4a1]" />
            Sites modernos · No ar em até 72h
          </div>

          <h1
            id="hero-heading"
            className="animate-fade-up delay-100 text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Criação de sites modernos e{" "}
            <span className="bg-gradient-to-r from-white via-[#c7c9ff] to-[#7d82ff] bg-clip-text text-transparent">
              chamativos
            </span>
            <br className="hidden sm:block" /> que fazem seu negócio{" "}
            <span className="bg-gradient-to-r from-white via-[#c7c9ff] to-[#7d82ff] bg-clip-text text-transparent">
              se destacar
            </span>
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg md:text-xl">
            Design profissional, visual de alto impacto e tudo incluso: WhatsApp,
            Google Maps, formulário de contato, SEO, hospedagem e domínio. Seu
            site profissional no ar em até 72 horas.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href="#contato" className="btn-accent w-full sm:w-auto">
              Quero meu site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#solucoes" className="btn-ghost-dark w-full sm:w-auto">
              Ver o que está incluso
            </a>
          </div>

          <div className="animate-fade-up delay-400 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {[
              { value: "72h", label: "até o site no ar*" },
              { value: "100%", label: "design sob medida" },
              { value: "SEO", label: "pronto pro Google" },
              { value: "Full", label: "solução completa" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 backdrop-blur-sm"
              >
                <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/50 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/35">
            *Prazo típico para o pacote essencial, com briefing e materiais
            prontos. Projetos maiores sob consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
