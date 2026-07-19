import type { BlogSection } from "@/lib/blog";

export default function BlogPostContent({
  content,
}: {
  content: BlogSection[];
}) {
  return (
    <div className="blog-prose">
      {content.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={index}>{block.text}</p>;
          case "h2":
            return <h2 key={index}>{block.text}</h2>;
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
                {block.cite ? <cite>{block.cite}</cite> : null}
              </blockquote>
            );
          case "callout":
            return (
              <aside key={index} className="blog-callout">
                <p>{block.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
