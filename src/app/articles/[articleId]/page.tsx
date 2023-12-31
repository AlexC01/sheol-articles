import { getArticleById } from "@/actions/getArticleById";
import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import ArticleClient from "./ArticleClient";
import getArticleReviews from "@/actions/getArticleReviews";
import PageWrapper from "@/components/PageWrapper";

interface IParams {
  articleId?: string;
}

const ArticlePage = async ({ params }: { params: IParams }) => {
  const article = await getArticleById(params);
  const reviews = await getArticleReviews(params);
  const currentUser = await getCurrentUser();

  if (!article) {
    return <EmptyState />;
  }
  return (
    <PageWrapper>
      <ArticleClient article={article} currentUser={currentUser} reviews={reviews} />
    </PageWrapper>
  );
};

export default ArticlePage;
