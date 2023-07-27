import getArticles from "@/actions/getArticles";
import EmptyState from "../EmptyState";
import ArticleCard from "../cards/ArticleCard";

const ArticleList = async () => {
  const articles = await getArticles();

  if (articles.length === 0) {
    return <EmptyState />;
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
        />
      ))}
    </div>
  );
};

export default ArticleList;
