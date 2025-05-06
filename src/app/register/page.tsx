import HelperFooter from '@/components/Helper/HelperFooter';
import RegisterForm from '@/components/modules/Auth/register/RegisterForm';
import WithSuspense from '@/Providers/LoadingProviders';

const RegisterPage = () => {
  return (
    <WithSuspense>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <RegisterForm />
        <HelperFooter />
      </div>
    </WithSuspense>
  );
};

export default RegisterPage;
