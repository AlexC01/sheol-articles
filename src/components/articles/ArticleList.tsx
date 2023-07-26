import ArticleCard from "../cards/ArticleCard";

const ArticleList = () => {
  return (
    <div className="mt-10 grid grid-cols-1 px-16 md:px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:container mx-auto gap-10">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default ArticleList;
