/**
 * Bloco de conteúdo editorial para SEO (semântica + long-tail).
 * Tom de agência real — objetivo, sem jargão vazio.
 */
export default function AboutSeo() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="border-y border-black/[0.06] bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">
              Por que ter um site profissional
            </p>
            <h2
              id="sobre-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-[1.15]"
            >
              Seu cliente pesquisa no Google antes de mandar mensagem.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              Hoje, quem procura clínica, restaurante, escritório ou prestador
              de serviço quase sempre começa pela internet. Um perfil em rede
              social ajuda, mas um{" "}
              <strong className="font-semibold text-ink">
                site profissional
              </strong>{" "}
              passa credibilidade, centraliza contato e funciona 24 horas —
              inclusive quando você está ocupado.
            </p>
            <p>
              Na Origin Studio, a gente cuida da criação de sites modernos e
              chamativos com o essencial para gerar contato: WhatsApp em um
              clique, mapa se você atende presencialmente, formulário para
              orçamentos e uma base de SEO para o Google conseguir encontrar
              suas páginas. Hospedagem e domínio entram no pacote para você não
              precisar virar “especialista em servidor”.
            </p>
            <p>
              O diferencial é a combinação de visual bem feito com entrega
              rápida: em muitos projetos, o site fica no ar em até{" "}
              <strong className="font-semibold text-ink">72 horas</strong>{" "}
              depois do briefing e dos materiais. Sem processo interminável,
              sem surpresa no meio do caminho.
            </p>
            <p>
              Se você precisa de um site institucional, uma landing page para
              campanha ou uma presença digital completa para o negócio local,
              fala com a gente. Conta o que o cliente precisa ver e a gente
              monta a estrutura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
