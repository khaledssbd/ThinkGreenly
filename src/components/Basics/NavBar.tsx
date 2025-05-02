'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// import { MdEnergySavingsLeaf } from "react-icons/md";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../ModeToggle";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { logOut } from "@/services/AuthService";
// import { protectedRoutes } from "@/constant";

const NavBar = () => {
  // const router = useRouter();

  const { user, setIsLoading, isLoading } = useUser();
  const pathname = usePathname();
  //.log(pathname);
  console.log(user);
  const handleLogout = () => {
    logOut();

    // if (protectedRoutes.some((route) => pathname.match(route))) {
    //   router.push("/");
    // }
    setIsLoading(!isLoading);
  };
  const links = (
    <>
      <Link
        href="/"
        className={
          pathname === "/" ? "border-b-2 border-green-300" : "border-b-0"
        }
      >
        <h1>Home</h1>
      </Link>
      <Link
        href="/ideas"
        className={
          pathname === "/ideas" ? "border-b-2 border-green-300" : "border-b-0"
        }
      >
        <h1>Ideas</h1>
      </Link>
      <Link
        href="/blogs"
        className={
          pathname === "/blog" ? "border-b-2 border-green-300" : "border-b-0"
        }
      >
        <h1>Blogs</h1>
      </Link>
      <Link
        href="/about-us"
        className={
          pathname === "/aboutus" ? "border-b-2 border-green-300" : "border-b-0"
        }
      >
        <h1>About Us</h1>
      </Link>
    </>
  );

  return (
    <div className="flex  items-center w-[90%] mt-6 mx-auto justify-between">
      <div className="font-bold ml-5  text-2xl flex gap-2 items-center">
        <Image src={logo} width={135} height={10} alt="logo" />
      </div>
      <div className="flex gap-8 ml-12">{links}</div>

      <div className="flex gap-10">
        {user ? (
          <>
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src={user.image} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/profile">
                    {" "}
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 font-semibold cursor-pointer"
                >
                  Log out <LogOut className="text-red-600" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href="/login">
            <button className="bg-green-500  rounded-lg px-2 py-1">
              Login
            </button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
export default NavBar;
