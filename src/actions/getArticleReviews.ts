import { prisma } from "@/lib/db/prisma";

interface IPrarams {
  articleId?: string;
}

const getArticleReviews = async (params: IPrarams) => {
  try {
    const { articleId } = params;
    const reviews = await prisma.review.findMany({
      where: {
        articleId
      },
      include: {
        author: true
      }
    });

    return reviews;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getArticleReviews;
