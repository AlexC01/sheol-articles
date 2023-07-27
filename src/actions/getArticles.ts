import { prisma } from "@/lib/db/prisma";

const getArticles = async () => {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: "desc"
      },
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
