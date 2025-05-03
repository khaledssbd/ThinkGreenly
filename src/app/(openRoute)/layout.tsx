import NavBar from '@/components/Basics/NavBar';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default CommonLayout;
