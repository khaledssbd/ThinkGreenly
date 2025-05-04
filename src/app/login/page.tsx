import LoginForm from '@/components/modules/auth/Login/LoginForm';
import WithSuspense from '@/Providers/LoadingProviders';

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const LoginPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { redirectPath } = await searchParams;
  return (
    <WithSuspense>
      <LoginForm redirectPath={redirectPath} />
    </WithSuspense>
  );
};

export default LoginPage;
