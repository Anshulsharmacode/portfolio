"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fetchBlogPosts, type BlogPost } from "@/app/api/blog/route";
import { Scribble, Arrow } from "@/components/vectors";

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "anshulsharmasde";

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts(username);
        setPosts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <section
      id="blog"
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 px-5 py-16 backdrop-blur-sm md:px-8 md:py-20"
    >
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Writings
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Thoughts on{" "}
            <span className="text-gradient relative">
              Engineering
              <Scribble className="absolute -bottom-4 left-0 w-full text-secondary opacity-45" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Surgical insights on Full Stack Development, AI Engineering, and modern software architecture.
          </p>
        </div>
        <Arrow className="hidden md:block h-24 w-24 rotate-90 text-primary" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:row-span-2 h-[600px] rounded-3xl bg-muted animate-pulse" />
            {[1, 2].map((i) => (
              <div key={i} className="h-[290px] rounded-3xl bg-muted animate-pulse" />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-12 border border-dashed border-destructive/30 rounded-3xl bg-destructive/5">
            <p className="text-destructive font-medium">{error}</p>
          </div>
        )}

        {/* Bento Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => window.open(featuredPost.link, "_blank")}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/70 bg-background/90 shadow-sm transition-all duration-500 hover:shadow-xl lg:col-span-2 lg:row-span-2"
              >
                <div className="relative h-full min-h-[400px] w-full">
                  <Image
                    src={featuredPost.thumbnail}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <span className="mb-4 w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md border border-primary/30">
                      Featured Post
                    </span>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-4 line-clamp-2 max-w-2xl text-lg text-white/70">
                      {featuredPost.subtitle}
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-primary font-bold">
                      Read Full Article
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 transition-transform group-hover:translate-x-2">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Remaining Posts */}
            {remainingPosts.map((post, index) => (
              <motion.article
                key={post.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => window.open(post.link, "_blank")}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-background/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {new Date(post.pubDate).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <h3 className="line-clamp-2 font-display text-xl font-bold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.subtitle}
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border rounded-3xl">
            <p className="text-muted-foreground">No articles found yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
