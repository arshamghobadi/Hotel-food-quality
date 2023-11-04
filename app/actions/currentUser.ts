import { currentUser } from '@clerk/nextjs';
import prisma from '../../lib/prismadb';
import { POST } from '../api/webhook/createsurvey/route';
interface ClearkUser {
  id: string;
}
export default async function Page() {
  try {
    await fetch('https://localhost:3000/api/webhook/user')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    const clerkUser: ClearkUser | null = await currentUser();
    if (!clerkUser) return null;
    console.log(clerkUser);

    const currentUserDb = await prisma.user.findUnique({
      where: {
        externalId: clerkUser.id,
      },
    });

    console.log(currentUserDb);

    return currentUserDb;
  } catch (error) {
    return null;
  }
}
