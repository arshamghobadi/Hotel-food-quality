import Image from 'next/image';
import Link from 'next/link';
import { auth, currentUser } from '@clerk/nextjs';
export default async function Home() {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth();
  console.log(user);

  return (
    <div>
      {userId && <div>salam</div>}
      {!userId && (
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col justify-center items-center p-4 space-y-3">
            <h2 className=" text-lg font-bold">
              Welcome to Western Hotel quality Food
            </h2>
            <p className="text-sm">
              We value your feedback! Please take a moment to complete our
              survey and help us improve your experience. Please{' '}
              <Link className="text-blue-500" href="/sign-up">
                Sign-up
              </Link>
            </p>
          </div>
          <Image
            src="/image/homepagepic.jpg"
            width={800}
            height={600}
            alt="Homepagepic"
          />
        </div>
      )}
    </div>
  );
}
