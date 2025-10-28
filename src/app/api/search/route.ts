import { NextResponse } from "next/server";
import { searchNews } from "../../../../lib/news";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  const articles = q ? await searchNews(q) : [];
  return NextResponse.json({ articles });
}
