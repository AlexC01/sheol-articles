"use client";

import Image from "next/image";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/navigation";
dayjs.extend(customParseFormat);

interface ArticleCardProps {
  title: string;
  date: Date;
  content: string;
  author: string;
  image: string;
  id: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, content, author, image, id }) => {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`/articles/${id}`)}
      className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border-black border-[1px] cursor-pointer"
    >
      <Image alt="Article Image" className="h-56 w-full object-cover" width={450} height={450} src={image} />
      <div className="bg-white p-4 sm:p-6 ">
        <div className="flex justify-between">
          <span className="block text-xs text-gray-500 font-semibold">{author}</span>

          <time dateTime={dayjs(date).format("YYYY-MM-DD")} className="block text-xs text-gray-500">
            {dayjs(date).format("MMMM DD, YYYY")}
          </time>
        </div>
        <a>
          <h3 className="mt-2 text-lg text-gray-900">{title}</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-2">{content}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
