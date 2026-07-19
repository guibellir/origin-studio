import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      siteName: siteConfig.name,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/opengraph-image`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: [`${siteConfig.url}${post.coverImage}`],
    inLanguage: siteConfig.language,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <BlogHeader />

      <main id="conteudo" className="flex-1 bg-white">
        <article className="pt-28 pb-16 sm:pt-32 sm:pb-20">
          <header className="border-b border-black/[0.06] pb-12">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-soft">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-ink">
                      Início
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/blog" className="hover:text-ink">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="line-clamp-1 font-medium text-ink">
                    {post.category}
                  </li>
                </ol>
              </nav>

              <p className="text-sm font-medium tracking-wide text-accent">
                {post.category}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl sm:leading-[1.15] md:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {post.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-black/[0.06] pt-6 text-sm text-muted">
                <div>
                  <span className="font-medium text-ink">{post.author.name}</span>
                  <span className="text-muted-soft"> · {post.author.role}</span>
                </div>
                <span aria-hidden className="text-muted-soft">
                  ·
                </span>
                <time dateTime={post.publishedAt}>
                  {formatPostDate(post.publishedAt)}
                </time>
                <span aria-hidden className="text-muted-soft">
                  ·
                </span>
                <span>{post.readingTime} min de leitura</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-5 pt-8 sm:px-8 sm:pt-10">
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-black/[0.06] bg-canvas-dark sm:rounded-3xl">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <BlogPostContent content={post.content} />

            <div className="mt-14 rounded-3xl bg-canvas-dark px-6 py-10 text-center sm:px-10">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Quer colocar isso em prática no seu site?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/55 sm:text-base">
                Criamos sites modernos com WhatsApp, SEO, formulário e
                publicação — em até 72 horas.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/#contato" className="btn-accent w-full sm:w-auto">
                  Pedir orçamento
                </Link>
                <Link
                  href="/blog"
                  className="btn-ghost-dark w-full sm:w-auto"
                >
                  Ver mais artigos
                </Link>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section
            aria-labelledby="related-heading"
            className="border-t border-black/[0.06] bg-grouped py-16"
          >
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <h2
                id="related-heading"
                className="text-2xl font-semibold tracking-tight text-ink"
              >
                Continue lendo
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
