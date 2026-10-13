export interface BlogPost {
  thumbnail: string;
  title: string;
  subtitle: string;
  pubDate: string;
  link: string;
}

export const blogUsername = "anshulsharmasde";

export function postDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Recent article"
    : date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
}

const fallbackThumbnail =
  "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

function decodeXml(value: string): string {
  return value.replace(
    /&(#(?:x[\da-f]+|\d+)|amp|lt|gt|quot|apos|nbsp);/gi,
    (entity, code: string) => {
      if (code.startsWith("#")) {
        const hex = code[1]?.toLowerCase() === "x";
        const point = parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
        return point > 0 && point <= 0x10ffff
          ? String.fromCodePoint(point)
          : entity;
      }

      return (
        {
          amp: "&",
          lt: "<",
          gt: ">",
          quot: '"',
          apos: "'",
          nbsp: " ",
        } as Record<string, string>
      )[code.toLowerCase()] ?? entity;
    },
  );
}

function field(item: string, name: string): string {
  const match = item.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`, "i"));
  return decodeXml(match?.[1]?.replace(/^<!\[CDATA\[|\]\]>$/g, "") ?? "");
}

function plainText(html: string): string {
  return decodeXml(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function parsePosts(xml: string): BlogPost[] {
  if (!/<channel(?:\s|>)/i.test(xml)) {
    throw new Error("Medium returned an invalid RSS feed");
  }

  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(([, item]) => {
    const content = field(item, "content:encoded");
    const description = plainText(field(item, "description") || content);
    const image = content.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1];

    return {
      title: field(item, "title") || "No title available",
      subtitle: description
        ? `${description.slice(0, 120)}...`
        : "No subtitle available",
      thumbnail: image?.startsWith("https://")
        ? decodeXml(image)
        : fallbackThumbnail,
      link: field(item, "link") || "#",
      pubDate: field(item, "pubDate"),
    };
  });
}

export async function fetchMediumPosts(username: string): Promise<BlogPost[]> {
  const response = await fetch(`https://medium.com/feed/@${encodeURIComponent(username)}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Medium feed returned ${response.status}`);
  }

  return parsePosts(await response.text());
}
