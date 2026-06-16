export interface BlogPost {
  thumbnail: string;
  title: string;
  subtitle: string;
  pubDate: string;
  link: string;
}

export async function fetchBlogPosts(
  username: string,
  limit = 6,
): Promise<BlogPost[]> {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
    {
      next: { revalidate: 3600 }, // optional cache
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const feed = await res.json();

  return feed.items.slice(0, limit).map((item: any) => ({
    title: item.title || "No title available",
    subtitle: item.contentSnippet
      ? item.contentSnippet.slice(0, 100) + "..."
      : "No subtitle available",
    thumbnail: item.content
      ? item.content.match(/src="?([^"\s]+)"?\s*\/?>/)?.[1] ||
        "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
      : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    link: item.link || "#",
    pubDate: item.pubDate || "",
  }));
}
