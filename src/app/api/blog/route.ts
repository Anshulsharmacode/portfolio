import { NextResponse } from "next/server";
import { fetchMediumPosts } from "@/lib/blog";

export async function GET(request: Request) {
  const username = new URL(request.url).searchParams.get("username");

  if (!username || !/^[a-z\d_-]+$/i.test(username)) {
    return NextResponse.json(
      { error: "A valid Medium username is required" },
      { status: 400 },
    );
  }

  try {
    return NextResponse.json(await fetchMediumPosts(username));
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch Medium posts" },
      { status: 502 },
    );
  }
}
