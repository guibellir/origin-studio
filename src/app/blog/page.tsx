import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos da Origin Studio sobre criação de sites, WhatsApp, SEO e presença digital para negócios. Conteúdo direto, sem enrolação.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Origin Studio",
    description:
      "Criação de sites, conversão e SEO básico — artigos práticos para quem quer presença digital profissional.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <BlogHeader />
      <main id="conteudo" className="flex-1 bg-grouped">
        <section className="border-b border-black/[0.06] bg-white pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-soft">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Início
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-ink">Blog</li>
              </ol>
            </nav>

            <p className="text-sm font-medium tracking-wide text-accent">Blog</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-[1.1]">
              Ideias práticas para o seu site
              <span className="text-muted"> (e para o negócio atrás dele)</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Textos diretos sobre presença digital, conversão e SEO — escritos
              para donos de negócio, não para manual de marketing.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-label="Lista de artigos">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {featured ? <BlogCard post={featured} featured /> : null}
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/[0.06] bg-white py-16">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Quer um site profissional de verdade?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Solução completa, visual moderno e entrega em até 72 horas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/#contato" className="btn-accent w-full sm:w-auto">
                Solicitar orçamento
              </Link>
              <Link href="/#solucoes" className="btn-outline w-full sm:w-auto">
                Ver o que está incluso
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
