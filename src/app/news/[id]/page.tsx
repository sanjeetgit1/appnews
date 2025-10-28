import Image from "next/image";
import { getTopHeadlines } from "../../../../lib/news";
import Link from "next/link";

export default async function NewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ Await params
  const url = Buffer.from(decodeURIComponent(id), "base64").toString("utf-8");
  const articles = await getTopHeadlines();
  const article = articles.find((a) => a.url === url);

  if (!article) return <p className="text-center mt-10">Article not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {article.source?.name} • {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      {article.urlToImage && (
        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      <p className="text-lg leading-relaxed mb-6">
        {article.content || article.description || "No content available."}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
      >
        Read Original Source →
      </a>
      <div> 
        
        <button className="inline-block  mt-4 text-blue-600 underline hover:text-blue-800">

 <Link href="/">Back</Link>
        </button>
        </div>
    </div>
  );
}
