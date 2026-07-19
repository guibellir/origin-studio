"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#pacotes", label: "Pacotes" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

export default function BlogHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/[0.06] bg-white/90 backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,85,241,0.35)]">
            O
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            Origin<span className="font-normal text-muted"> Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#contato" className="btn-primary !px-5 !py-2.5 text-sm">
            Solicitar orçamento
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/[0.06] bg-white px-5 pb-8 pt-3 md:hidden">
          <nav className="flex flex-col gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-base font-medium text-ink hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full text-sm"
          >
            Solicitar orçamento
          </Link>
        </div>
      )}
    </header>
  );
}
