import { SafeUser } from "@/types";
import dayjs from "dayjs";
import { Article, User } from "@prisma/client";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";
dayjs.extend(customParseFormat);

interface ArticleClientProps {
  article: Article & {
    author: User;
  };
  currentUser?: SafeUser | null;
}

const ArticleClient: React.FC<ArticleClientProps> = ({ article, currentUser }) => {
  return (
    <div className="max-w-[75ch] mx-auto mt-10">
      <section>
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <Image
          src={article.image ?? ""}
          alt={`Image from article: ${article.title}`}
          width={1200}
          height={900}
          className="h-96 w-full object-cover mt-8"
        />
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
            By {article.author.name} on {dayjs(article.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>
      </section>
      <hr className="my-5" />
      <section>
        <p className="whitespace-pre-wrap text-justify">{article.content}</p>
      </section>
    </div>
  );
};

export default ArticleClient;
