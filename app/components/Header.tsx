import Link from 'next/link';

const Header = () => {
  return (
    <div
      className="w-full bg-blue-500 py-4 px-6 flex
      items-center justify-between mb-5"
    >
      <div>Bestwestern</div>
      <div className="flex space-x-3">
        <Link href="sign-in">sign in</Link>
        <Link href="sign-up">sign up</Link>
      </div>
    </div>
  );
};
export default Header;
