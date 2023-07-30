import getCurrentUser from "@/actions/getCurrentUser";
import PageWrapper from "@/components/PageWrapper";
import ArticleList from "@/components/articles/ArticleList";

const MyArticles = async () => {
  const currentUser = await getCurrentUser();
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default MyArticles;
