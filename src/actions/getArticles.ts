import { prisma } from "@/lib/db/prisma";

interface ArticlesProps {
  limit?: number;
}

const getArticles = async (params: ArticlesProps) => {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: params.limit,
      include: {
        author: true
      }
    });

    return articles;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default getArticles;
