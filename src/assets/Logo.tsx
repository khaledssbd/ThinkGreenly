import logo from '@/assets/sLogo.png';
import icon from '@/assets/smLogo.png';
import Image from "next/image";

// const icon = "/favicon.ico"
export const Logo = () => {
    return (
      <div className="font-medium w-fit ml-5 text-lg flex items-center gap-0">
        <p className="text-black dark:text-white">ThinkGreenly</p>
        <Image src={logo} alt="logo" className="h-12 w-12" />
      </div>
    );
};

export const Icon = () => {
    return (
      <div className="flex justify-center items-center m-4">
        <Image src={icon} alt={"Logo"} height={40} width={30} />
      </div>
    );
}

