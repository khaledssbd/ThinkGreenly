import HelperFooter from '@/components/Helper/HelperFooter';
import LoginForm from '@/components/modules/Auth/Login/LoginForm';
import WithSuspense from '@/Providers/LoadingProviders';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { redirectPath } = await searchParams;

  return (
    <WithSuspense>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <LoginForm redirectPath={redirectPath} />
        <HelperFooter />
      </div>
    </WithSuspense>
  );
};

export default LoginPage;
