export default function CTA() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-canvas-dark px-8 py-14 text-center sm:px-14 sm:py-16">
          <div
            className="glow-orb left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(79,85,241,0.55) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Pronto para um site
              <br className="hidden sm:block" /> moderno e impossível de ignorar?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/55 sm:text-lg">
              Visual chamativo, WhatsApp, Maps, formulário, SEO, hospedagem e
              domínio — no ar em até 72 horas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contato" className="btn-accent w-full sm:w-auto">
                Solicitar orçamento
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark w-full sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
