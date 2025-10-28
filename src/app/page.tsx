import { getTopHeadlines } from "../../lib/news";
import SearchClient from "./searchClient"; // ✅ relative from app root

export default async function Home() {
  const articles = await getTopHeadlines();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
           Top Headlines
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 text-sm sm:text-base">
          Stay updated with the latest news from around the world. Use the search bar to find articles by keyword.
        </p>

        {/* Search + News Grid */}
        <div className="mt-4">
          <SearchClient initialArticles={articles} />
        </div>
      </section>
    </main>
  );
}

