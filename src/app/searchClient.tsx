"use client";

import { useState, ChangeEvent } from "react";
import { Article } from "../../types/article";
import ArticleCard from "./components/ArticleCard";

export default function SearchClient({ initialArticles }: { initialArticles: Article[] }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Article[]>(initialArticles);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    if (!q.trim()) {
      setFiltered(initialArticles);
    } else {
      setFiltered(
        initialArticles.filter((a) =>
          a.title.toLowerCase().includes(q.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search news..."
          className="w-full sm:w-2/3 md:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg
                     shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* News Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No articles found.
          </p>
        )}
      </div>
    </div>
  );
}
