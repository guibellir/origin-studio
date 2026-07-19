import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-canvas-dark py-14"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" aria-label="Origin Studio — página inicial">
              <Logo variant="dark" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.slogan}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/35">
              {siteConfig.supportLine}. Solução completa: design, WhatsApp, SEO,
              hospedagem e domínio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav aria-label="Rodapé — páginas">
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Navegação
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a href="/#solucoes" className="hover:text-white">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="/#pacotes" className="hover:text-white">
                    Pacotes
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white">
                    Dúvidas frequentes
                  </a>
                </li>
                <li>
                  <a href="/#contato" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Serviços
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>Criação de sites</li>
                <li>Sites com WhatsApp</li>
                <li>SEO on-page</li>
                <li>Hospedagem e domínio</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Contato
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a
                    href={whatsappUrl(
                      "Olá! Quero um orçamento para criação de site com a Origin Studio."
                    )}
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p>Criação de sites · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
