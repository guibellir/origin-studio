const faqs = [
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "No Essencial e no Profissional, o prazo típico é de até 72 horas depois do briefing e do envio dos materiais (logo, textos, fotos e contatos). Se o projeto for maior, combinamos o prazo no orçamento.",
  },
  {
    question: "O que vem incluso?",
    answer:
      "Site responsivo, botão e links de WhatsApp, formulário de contato, base de SEO, e — conforme o pacote — Google Maps, hospedagem e domínio. Você não sai só com um layout: sai com o site publicado e utilizável.",
  },
  {
    question: "Já tenho domínio. Dá para usar?",
    answer:
      "Sim. Se você já comprou o domínio, a gente aponta para a hospedagem e configura tudo. Se ainda não tem, orientamos a escolha e o registro.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Deixamos a estrutura pronta para o Google: títulos, descrições, organização do conteúdo e páginas leves. Indexação e posição nas buscas dependem também do nicho, da concorrência e do tempo — mas a base técnica a gente entrega.",
  },
  {
    question: "Preciso saber programar ou mexer em código?",
    answer:
      "Não. Você recebe o site pronto. Quando precisar mudar texto, foto ou telefone, combinamos o suporte de acordo com o pacote.",
  },
  {
    question: "Como peço orçamento?",
    answer:
      "Pelo formulário nesta página ou pelo WhatsApp. Diga o tipo de negócio, se já tem marca/domínio e o que precisa no site. Respondemos com prazo e valor de forma direta.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-accent">
            Dúvidas frequentes
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]"
          >
            Respostas diretas,
            <br />
            <span className="text-muted">sem enrolação.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            As perguntas que mais ouvimos antes de fechar um projeto. Se a sua
            não estiver aqui, manda no WhatsApp.
          </p>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group py-5 open:pb-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[17px] font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-muted transition-transform group-open:rotate-45"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
