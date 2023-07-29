import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { prisma } from "@/lib/db/prisma";
import { getArticleById } from "@/actions/getArticleById";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();
  const { articleId, content } = body;

  const article = await getArticleById({ articleId });

  if (!article) return NextResponse.error();

  const comment = await prisma.review.create({
    data: {
      content,
      authorId: currentUser.id,
      articleId
    }
  });

  return NextResponse.json(comment);
}
