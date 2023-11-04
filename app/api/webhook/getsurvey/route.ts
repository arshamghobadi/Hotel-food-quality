import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';

export async function GET(request: Request) {
  const listingServuy = await prisma.survey.findMany();

  return NextResponse.json(listingServuy);
}
