import { prisma } from "@/lib/db/prisma";

interface IPrarams {
  articleId?: string;
}

export const getArticleById = async (params: IPrarams) => {
  try {
    const { articleId } = params;
    const article = await prisma.article.findUnique({
      where: {
        id: articleId
      },
      include: {
        author: true
      }
    });

    if (!article) return null;

    return article;
  } catch (err) {}
};
