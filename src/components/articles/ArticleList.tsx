import getArticles from "@/actions/getArticles";
import EmptyState from "../EmptyState";
import ArticleCard from "../cards/ArticleCard";

interface ArticleListProps {
  userId?: string;
  titleEmpty?: string;
  subtitleEmpty?: string;
  query?: string;
  limit?: number;
}

const ArticleList: React.FC<ArticleListProps> = async ({ userId, titleEmpty, subtitleEmpty, limit, query }) => {
  const articles = await getArticles({ limit, userId, search: query });

  if (articles.length === 0) {
    return <EmptyState title={titleEmpty} subtitle={subtitleEmpty} />;
  }
  return (
    <div className="mt-10 grid grid-cols-1 px-5 sosmall:12 md:px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:container mx-auto gap-10">
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.content}
          author={article.author.name}
          image={article.image ?? ""}
          date={article.createdAt}
          id={article.id}
        />
      ))}
    </div>
  );
};

export default ArticleList;
