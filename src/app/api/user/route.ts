import { NextResponse } from "next/server";

import getCurrentUser from "@/actions/getCurrentUser";
import { prisma } from "@/lib/db/prisma";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, imageSrc } = body;

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      name,
      image: imageSrc
    }
  });

  return NextResponse.json(user);
}
