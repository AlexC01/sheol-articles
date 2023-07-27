import { getArticleById } from "@/actions/getArticleById";
import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import ArticleClient from "./ArticleClient";

interface IParams {
  articleId?: string;
}

const ArticlePage = async ({ params }: { params: IParams }) => {
  const article = await getArticleById(params);
  const currentUser = await getCurrentUser();

  if (!article) {
    return <EmptyState />;
  }
  return <ArticleClient article={article} currentUser={currentUser} />;
};

export default ArticlePage;
