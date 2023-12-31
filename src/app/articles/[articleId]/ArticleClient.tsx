"use client";

import { SafeUser } from "@/types";
import dayjs from "dayjs";
import { Article, User, Review } from "@prisma/client";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";
import useFavorite from "@/hooks/useFavorite";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import ArticleComments from "./ArticleComments";
dayjs.extend(customParseFormat);

interface ArticleClientProps {
  article: Article & {
    author: User;
  };
  reviews: Array<Review & { author: User }>;
  currentUser?: SafeUser | null;
}

const ArticleClient: React.FC<ArticleClientProps> = ({ article, currentUser, reviews }) => {
  const { isLiked: hasLiked, toggleLike } = useFavorite({ articleId: article.id, like: true, currentUser });
  const { isLiked: isDisliked, toggleLike: toggleDislike } = useFavorite({
    articleId: article.id,
    like: false,
    currentUser
  });

  return (
    <div className="max-w-[75ch] mx-auto mt-10 px-5 sm:px-8 md:px-10 lg:px-0">
      <section>
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <Image
          src={article.image ?? ""}
          alt={`Image from article: ${article.title}`}
          width={1200}
          height={900}
          className="sm:h-96 w-full object-cover mt-8 rounded-lg shadow-md"
        />
        <div className="mt-4 flex flex-col justify-between sm:flex-row">
          <p className="text-gray-500 text-sm">
            By {article.author.name} on {dayjs(article.createdAt).format("MMMM DD, YYYY")}
          </p>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <div className="flex items-center">
              <button className="btn-ghost rounded-lg" onClick={toggleLike}>
                <AiOutlineLike fill={hasLiked ? "red" : ""} />
              </button>
              <span className="text-sm text-gray-600 ml-1">{article.totalLikes}</span>
            </div>
            <div className="flex items-center">
              <button className="btn-ghost rounded-lg pt-0.5" onClick={toggleDislike}>
                <AiOutlineDislike fill={isDisliked === false ? "red" : ""} />
              </button>
              <span className="text-sm text-gray-600 ml-1">{article.totalDislikes}</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      <section>
        <p className="whitespace-pre-wrap">{article.content}</p>
      </section>
      <ArticleComments reviews={reviews} articleId={article.id} currentUser={currentUser} />
    </div>
  );
};

export default ArticleClient;
