import getCurrentUser from "@/actions/getCurrentUser";
import Heading from "@/components/Heading";
import ArticleList from "@/components/articles/ArticleList";

const MyArticles = async () => {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <div className="container mx-auto">
        <h4 className="text-2xl font-bold mt-5">Your Articles</h4>
      </div>
      <ArticleList
        userId={currentUser ? currentUser.id : undefined}
        titleEmpty="You haven't created an article yet"
        subtitleEmpty="Try creating a new one"
      />
    </section>
  );
};

export default MyArticles;
