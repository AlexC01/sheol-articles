import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { getArticleById } from "@/actions/getArticleById";
import { prisma } from "@/lib/db/prisma";

interface IParams {
  articleId?: string;
}

interface BodyProps {
  like: boolean | null;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { articleId } = params;

  if (!articleId) return NextResponse.error();

  const article = await getArticleById({ articleId });

  if (!article) return NextResponse.error();

  const body: BodyProps = await request.json();
  const { like } = body;

  let likes = [...(currentUser.articlesLikes ?? [])];
  let disLikes = [...(currentUser.articlesDislikes ?? [])];

  let totalLikes = article.totalLikes;
  let totalDislikes = article.totalDislikes;

  const wasLiked = likes.includes(articleId);
  const wasDisliked = disLikes.includes(articleId);

  if (like === null) {
    likes = likes.filter(id => id !== articleId);
    disLikes = disLikes.filter(id => id !== articleId);
    totalLikes -= wasLiked ? 1 : 0;
    totalDislikes -= wasDisliked ? 1 : 0;
  } else if (like) {
    likes.push(articleId);
    disLikes = disLikes.filter(id => id !== articleId);
    totalLikes += 1;
    if (wasDisliked) totalDislikes -= 1;
  } else {
    disLikes.push(articleId);
    likes = likes.filter(id => id !== articleId);
    totalDislikes += 1;
    if (wasLiked) totalLikes -= 1;
  }

  await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      articlesLikes: likes,
      articlesDislikes: disLikes
    }
  });

  const updateArticle = await prisma.article.update({
    where: {
      id: articleId
    },
    data: {
      totalLikes,
      totalDislikes
    }
  });

  return NextResponse.json(updateArticle);
}
