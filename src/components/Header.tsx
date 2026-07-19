"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#pacotes", label: "Pacotes" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(y > 10);
      const hero = document.getElementById("topo");
      const threshold = hero
        ? Math.max(hero.offsetHeight * 0.5, 180)
        : 280;
      setOverDark(y < threshold);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Lock scroll no iOS de forma segura
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
      const y = window.scrollY;
      document.body.style.top = `-${y}px`;
      document.body.style.position = "fixed";
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
    }
    document.body.classList.remove("menu-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const goToTop = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setOpen(false);
      if (pathname === "/") {
        window.scrollTo(0, 0);
        if (window.location.hash) history.replaceState(null, "", "/");
      } else {
        router.push("/");
      }
    },
    [pathname, router]
  );

  const dark = open || overDark;
  const solid = scrolled || open || !overDark;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-colors duration-200 ${
          solid
            ? dark
              ? "border-b border-white/10 bg-black"
              : "border-b border-black/10 bg-white"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{
          // iOS: evita bugs de blur com fixed
          WebkitBackdropFilter: "none",
          backdropFilter: "none",
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:h-[4.5rem] md:px-8">
          <a
            href="/"
            onClick={goToTop}
            className="flex min-w-0 items-center"
            aria-label="Origin Studio — início"
          >
            <Logo variant={dark ? "dark" : "light"} compact markSize={32} />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  dark ? "text-white/75 hover:text-white" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/#contato"
              className={`btn !px-5 !py-2.5 text-sm ${
                dark ? "btn-primary-light" : "btn-primary"
              }`}
            >
              Solicitar orçamento
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border lg:hidden ${
              dark
                ? "border-white/25 text-white"
                : "border-black/15 text-ink"
            }`}
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

      {/* Menu mobile */}
      {open && (
        <div className="fixed inset-0 z-[110] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[min(100%,300px)] flex-col bg-black">
            <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button
                type="button"
                aria-label="Fechar"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                onClick={() => setOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain p-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div
              className="border-t border-white/10 p-4"
              style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
            >
              <Link
                href="/#contato"
                onClick={() => setOpen(false)}
                className="btn btn-primary-light w-full text-sm"
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
