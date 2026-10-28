import Link from "next/link";
import { blogUsername, fetchMediumPosts, postDate } from "@/lib/blog";

export async function Blog() {
  let posts = [] as Awaited<ReturnType<typeof fetchMediumPosts>>;
  let error = false;

  try {
    posts = (await fetchMediumPosts(blogUsername)).slice(0, 3);
  } catch (reason) {
    console.error("Failed to load blog posts:", reason);
    error = true;
  }

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="portfolio-section"
    >
      <div className="mb-10 flex items-baseline justify-between gap-6">
        <h2
          id="blog-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Blog
        </h2>
        <Link href="/blog" className="text-link shrink-0 text-sm">
          All articles <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="divide-y divide-border/60">
        {posts.map((post) => (
          <article
            key={post.link}
            className="flex flex-col gap-2 py-9 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4 md:py-10"
          >
            <h3 className="min-w-0 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {post.title}
              </a>
            </h3>
            <p className="shrink-0 text-sm text-muted-foreground">
              {postDate(post.pubDate)}
            </p>
          </article>
        ))}
        {error && (
          <p className="text-base leading-relaxed text-muted-foreground">
            Articles are unavailable right now.{" "}
            <a
              href={`https://medium.com/@${blogUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Read on Medium ↗
            </a>
          </p>
        )}
        {!error && posts.length === 0 && (
          <p className="text-muted-foreground">No articles yet.</p>
        )}
      </div>
    </section>
  );
}
