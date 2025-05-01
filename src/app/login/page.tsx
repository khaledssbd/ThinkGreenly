import LoginForm from "@/components/modules/auth/Login/LoginForm";
import WithSuspense from "@/Providers/LoadingProviders";

const LoginPage = () => {
  return (
    <WithSuspense>
      <LoginForm />
    </WithSuspense>
  );
};

export default LoginPage;
