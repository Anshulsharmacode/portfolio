import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogUsername, fetchMediumPosts, postDate } from "@/lib/blog";
import { Scribble } from "@/components/vectors";

export async function Blog() {
  let posts = [] as Awaited<ReturnType<typeof fetchMediumPosts>>;
  let error = false;

  try {
    posts = (await fetchMediumPosts(blogUsername)).slice(0, 3);
  } catch (reason) {
    console.error("Failed to load blog posts:", reason);
    error = true;
  }

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <section
      id="blog"
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 px-5 py-12 backdrop-blur-sm sm:px-8 md:py-16 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto mb-10 flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Writings
          </span>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Thoughts on{" "}
            <span className="relative text-gradient">
              Engineering
              <Scribble className="absolute -bottom-4 left-0 w-full text-secondary opacity-45" />
            </span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Notes on full stack development, AI engineering, and the things I
            learn while building.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold shadow-sm transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {error && (
          <div className="rounded-3xl border border-dashed border-destructive/30 bg-destructive/5 px-6 py-12 text-center">
            <p className="font-medium text-destructive">Articles are unavailable right now.</p>
            <a
              href={`https://medium.com/@${blogUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Browse on Medium <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}

        {!error && posts.length > 0 && (
          <div className="space-y-5">
            {featuredPost && (
              <a
                href={featuredPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid overflow-hidden rounded-3xl border border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:grid-cols-2"
              >
                <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px]">
                  <Image
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary">
                      Featured article
                    </span>
                    <span className="text-muted-foreground">
                      {postDate(featuredPost.pubDate)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featuredPost.subtitle}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              {remainingPosts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <div className="relative hidden w-2/5 shrink-0 overflow-hidden sm:block">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex min-h-[185px] flex-1 flex-col p-6">
                    <span className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {postDate(post.pubDate)}
                    </span>
                    <h3 className="line-clamp-2 font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary lg:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {post.subtitle}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-bold text-primary">
                      Read article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {!error && posts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border px-6 py-16 text-center">
            <p className="text-muted-foreground">No articles found yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
