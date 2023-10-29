import Link from 'next/link';

import { UserButton, auth, currentUser } from '@clerk/nextjs';
const Header = async () => {
  const user = await currentUser();
  const { userId }: { userId: string | null } = auth();

  return (
    <div
      className="w-full bg-blue-500 py-4 px-6 flex
      items-center justify-between mb-5"
    >
      <div>Bestwestern</div>
      <div className="flex items-center space-x-3 text-yellow-50">
        <UserButton afterSignOutUrl="/" />
        <div>{user?.firstName}</div>
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
