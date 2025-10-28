import { getTopHeadlines } from "../../../../lib/news";
import ArticleCard from "../../components/ArticleCard";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const articles = await getTopHeadlines(params.category);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{params.category}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.url} article={a} />
        ))}
      </div>
    </div>
  );
}
