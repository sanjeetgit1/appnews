import Link from "next/link";
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
    <div className="p-5 ">
<div className=" flex  justify-center">
      <h1 className="text-4xl ml-10 font-bold mb-4   capitalize">{params.category}</h1>
     </div>
     <div className="pb-5 hover:underline ">
           <Link className=" text-blue-500 border-2  border-b-blue-400 p-1 rounded-2xl" href="/">←Back</Link>
     </div>
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <ArticleCard key={a.url} article={a} />
        ))}
      </div>
      
    </div>
  );
}
