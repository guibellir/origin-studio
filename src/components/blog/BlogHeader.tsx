"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#pacotes", label: "Pacotes" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

export default function BlogHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    document.body.classList.add("menu-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-black/10 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:px-8">
          <Link href="/" className="min-w-0" aria-label="Origin Studio — início">
            <Logo variant="light" compact markSize={32} />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/#contato" className="btn btn-primary !px-5 !py-2.5 text-sm">
              Solicitar orçamento
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[110] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(100%,300px)] flex-col bg-white">
            <div className="flex h-14 items-center justify-between border-b border-black/10 px-4">
              <span className="text-sm font-semibold text-ink">Menu</span>
              <button
                type="button"
                aria-label="Fechar"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-ink"
                onClick={() => setOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div
              className="border-t border-black/10 p-4"
              style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <Link
                href="/#contato"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full text-sm"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
