import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';
import { currentUser } from '@clerk/nextjs';

export async function POST(request: Request) {
  const currentUserId = await currentUser();
  console.log(currentUserId);

  if (!currentUserId) {
    return NextResponse.error();
  }
  const body = await request.json();
  const { id, name, room, food, quality } = body;

  const survay = await prisma.survey.create({
    data: {
      id,
      name,
      room,
      food,
      quality,
      userId: currentUserId.id,
    },
  });
  return NextResponse.json(survay);
}
