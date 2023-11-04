import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
