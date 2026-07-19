import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] ${
        featured ? "sm:col-span-2 sm:flex-row sm:items-stretch" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden bg-canvas-dark ${
          featured
            ? "min-h-[220px] sm:w-[44%] sm:min-h-full"
            : "h-48 sm:h-52"
        }`}
        aria-label={post.title}
      >
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          sizes={
            featured
              ? "(max-width: 640px) 100vw, 44vw"
              : "(max-width: 640px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end p-4 sm:p-5">
          <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-soft">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min de leitura</span>
        </div>

        <h2
          className={`mt-3 font-semibold tracking-tight text-ink ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-accent"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent"
        >
          Ler artigo
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
