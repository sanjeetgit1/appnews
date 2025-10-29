import Link from "next/link";
import { getTopHeadlines } from "../../../../lib/news";
import ArticleCard from "../../components/ArticleCard";

// ✅ Correctly typed async server component
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const articles = await getTopHeadlines(params.category);

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Category Title */}
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold capitalize text-gray-800 text-center">
          {params.category}
        </h1>
      </div>

      {/* Back Button */}
      <div className="mb-8 flex justify-center sm:justify-start">
        <Link
          href="/"
          className="inline-block text-blue-600 border border-blue-400 hover:bg-blue-50 transition px-4 py-2 rounded-full text-sm sm:text-base"
        >
          ← Back
        </Link>
      </div>

      {/* Articles Grid */}
      {articles && articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p>No articles found for this category.</p>
        </div>
      )}
    </div>
  );
}
