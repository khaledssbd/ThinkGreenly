import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import WithSuspense from "@/Providers/LoadingProviders";

const RegisterPage = () => {
  return (
    <WithSuspense>
      <RegisterForm />
    </WithSuspense>
  );
};

export default RegisterPage;
