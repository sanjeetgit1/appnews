import { Article } from "../types/article";

const BASE = "https://newsapi.org/v2";
const KEY = process.env.NEWSAPI_KEY;

export async function getTopHeadlines(category?: string): Promise<Article[]> {
  const url = `${BASE}/top-headlines?country=us${category ? `&category=${category}` : ""}&apiKey=${KEY}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data.articles || [];
}

export async function searchNews(query: string): Promise<Article[]> {
  const url = `${BASE}/everything?q=${query}&apiKey=${KEY}`;
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return data.articles || [];
}
