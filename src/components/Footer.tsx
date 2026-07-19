export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-canvas-dark py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#topo" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                O
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Origin<span className="font-normal text-white/60"> Studio</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Sites modernos e profissionais que transformam visitantes em
              clientes. Solução completa, entrega rápida.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Navegação
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a href="#solucoes" className="hover:text-white">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-white">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#pacotes" className="hover:text-white">
                    Pacotes
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Incluso
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>Site moderno</li>
                <li>WhatsApp</li>
                <li>Google Maps</li>
                <li>SEO + hospedagem</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-medium uppercase tracking-wider text-white/35">
                Contato
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                <li>
                  <a
                    href="https://wa.me/5500000000000"
                    className="hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>contato@originstudio.com.br</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Origin Studio. Todos os direitos reservados.</p>
          <p>Marca e domínio em definição — esboço inicial do projeto.</p>
        </div>
      </div>
    </footer>
  );
}
