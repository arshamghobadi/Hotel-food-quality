import Link from 'next/link';

import { UserButton, auth, currentUser } from '@clerk/nextjs';
import Image from 'next/image';
const Header = async () => {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth();

  return (
    <div
      className="w-full max-w-5xl mx-auto  px-6 flex
      items-center justify-between mb-5"
    >
      <Image
        priority
        src="/image/logo.jpg"
        alt="logo"
        width={100}
        height={50}
      />
      <div className="flex items-center space-x-3 text-yellow-50">
        <UserButton afterSignOutUrl="/" />
        <div className="text-black">{user?.firstName}</div>
      </div>

      {!userId && (
        <>
          <div className="flex space-x-3">
            <Link href="sign-in">sign in</Link>
            <Link href="sign-up">sign up</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
