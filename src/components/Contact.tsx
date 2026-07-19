"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: later wire to API / Formspree / WhatsApp redirect
    setSent(true);
  }

  return (
    <section id="contato" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]">
              Vamos colocar seu negócio no ar
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Conte um pouco sobre o que você precisa. Respondemos com um
              caminho claro, prazo e investimento — sem enrolação.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-surface p-4 transition-colors hover:bg-surface/80"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.44-8.44zM12.07 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.9 6.99c0 5.45-4.44 9.87-9.89 9.87zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    WhatsApp direto
                  </div>
                  <div className="text-sm text-muted">
                    Resposta mais rápida — clique e fale conosco
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-surface p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 6h16v12H4z" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">E-mail</div>
                  <div className="text-sm text-muted">
                    contato@originstudio.com.br
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/[0.06] bg-surface p-6 sm:p-8">
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold text-ink">
                  Mensagem recebida!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Em breve entraremos em contato. Enquanto isso, você também
                  pode falar pelo WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline mt-6 text-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-field"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input-field"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="input-field"
                    placeholder="Conte sobre seu negócio e o que você precisa no site..."
                  />
                </div>
                <button type="submit" className="btn-accent w-full">
                  Enviar pedido de orçamento
                </button>
                <p className="text-center text-xs text-muted-soft">
                  Sem spam. Usamos seus dados só para retornar o contato.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
