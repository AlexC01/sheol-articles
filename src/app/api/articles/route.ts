import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { title, content, imageSrc } = body;

  const article = await prisma.article.create({
    data: {
      title,
      content,
      image: imageSrc,
      authorId: currentUser.id
    }
  });

  return NextResponse.json(article);
}
