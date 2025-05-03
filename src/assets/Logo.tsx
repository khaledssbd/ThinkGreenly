import logo from "@/assets/logo.png";
import Image from "next/image";

const icon = "/favicon.ico"
export const Logo = () => {
    return (
        <div className="flex justify-center items-center m-4">
            <Image src={logo} alt={"Logo"} height={40} width={130} />
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

