import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";
import { blogUsername, fetchMediumPosts, postDate } from "@/lib/blog";

export const metadata = {
  title: "All Articles | Anshul Sharma",
};

export default async function BlogPage() {
  let posts = [] as Awaited<ReturnType<typeof fetchMediumPosts>>;
  let error = false;

  try {
    posts = await fetchMediumPosts(blogUsername);
  } catch (reason) {
    console.error("Failed to load blog posts:", reason);
    error = true;
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-soft" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <ModeToggle />

      <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-8 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mb-10 mt-10 flex flex-col gap-6 border-b border-border/70 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Writings
            </span>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              All articles
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ideas, lessons, and practical notes from building software and AI
              systems.
            </p>
          </div>
          <a
            href={`https://medium.com/@${blogUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            Medium archive <ExternalLink className="h-4 w-4" />
          </a>
        </header>

        {error && (
          <div className="rounded-3xl border border-dashed border-destructive/30 bg-destructive/5 px-6 py-16 text-center">
            <p className="font-medium text-destructive">Articles are unavailable right now.</p>
            <a
              href={`https://medium.com/@${blogUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Browse on Medium <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}

        {!error && posts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border px-6 py-16 text-center text-muted-foreground">
            No articles found yet.
          </div>
        )}

        {!error && posts.length > 0 && (
          <section aria-label="Articles" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {postDate(post.pubDate)}
                  </span>
                  <h2 className="mt-3 line-clamp-2 font-display text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.subtitle}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-primary">
                    Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
