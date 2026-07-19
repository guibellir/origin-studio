import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import Footer from "@/components/Footer";

export default function BlogNotFound() {
  return (
    <>
      <BlogHeader />
      <main className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-32 text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
          Artigo não encontrado
        </h1>
        <p className="mt-3 max-w-md text-muted">
          Esse conteúdo não existe ou foi movido. Veja os artigos publicados no
          blog.
        </p>
        <Link href="/blog" className="btn-primary mt-8">
          Voltar ao blog
        </Link>
      </main>
      <Footer />
    </>
  );
}
