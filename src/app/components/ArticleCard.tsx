import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../types/article";

export default function ArticleCard({ article }: { article: Article }) {
  const id = Buffer.from(article.url).toString("base64");

  return (
    <Link href={`/news/${encodeURIComponent(id)}`} className="block border rounded overflow-hidden hover:shadow-md">
      <div className="relative w-full h-48 bg-gray-200">
        {article.urlToImage && (
          <Image src={article.urlToImage} alt={article.title} fill className="object-cover" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
        <p className="text-xs text-gray-500 mt-2">{article.source?.name}</p>
      </div>
    </Link>
  );
}
