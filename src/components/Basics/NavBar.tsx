"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/sLogo.png";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { logOut } from "@/services/AuthService";
import { protectedRoutes } from "@/constant";
import { Button } from "../ui/button";
import NavbarLoadingSkeleton from "./UserNavSkeleton";
import { LogOut, Menu, Search, X } from "lucide-react";
import { InteractiveHoverButton } from "../button/hover-button";
import SearchInput from "../modules/Ideas/IdeaDetails/SearchInput";
import LeafAnimation from "../HomeComponents/LeafAnimation";

const NavBar = () => {
  const router = useRouter();
  const { user, setUser, isLoading } = useUser();
  const pathname = usePathname();

  const handleLogOut = async () => {
    await logOut();
    setUser(null);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Ideas", path: "/ideas" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Privacy", path: "/privacy-policy" },
    ...(user
      ? [{ name: "Dashboard", path: `/${user.role.toLowerCase()}/dashboard` }]
      : []),
  ];

  return (
    <header className="sticky top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pb-3">
      {/* <Marque/> */}
     <LeafAnimation/>
      <div className="container mx-auto h-20 px-5 md:px-10">
        <div className="relative h-16 md:h-20">
          {/* <!-- Menu & Small Device for Small Device--> */}
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <Drawer>
              {/* <!-- Menu for Small Device--> */}
              <DrawerTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent text-black dark:text-green-500"
                >
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="text-black dark:text-green-500">
                <div className="mx-auto w-full">
                  <DrawerHeader>
                    <DrawerTitle className="sr-only">Menu</DrawerTitle>
                    <DrawerDescription className="sr-only">
                      Nav Items.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="flex justify-end items-start mr-2">
                    <DrawerClose asChild>
                      <Button variant="outline">
                        <X />
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="p-4">
                    {/* NavItems for Small Device */}
                    <div className="pb-3 flex flex-col justify-center items-end gap-2">
                      {navLinks.map(({ name, path }) => (
                        <Link
                          key={name}
                          href={path}
                          className={
                            pathname === path
                              ? "rounded-md border border-black text-green-500 dark:text-white  dark:border-green-500 px-3 py-2 text-sm font-medium"
                              : "rounded-md border border-transparent px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-black"
                          }
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* logo, NavItems, Profile dropdown for Large Device */}
          <div className="flex justify-between items-center h-full">
            {/* logo for all */}
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="hidden lg:flex text-2xl font-black items-center"
              >
                <div className="relative flex items-center h-12  w-fit">
                  <p className="text-black dark:text-white text-lg font-medium z-10">
                    ThinkGreenly
                  </p>
                  <Image
                    src={logo}
                    alt="logo"
                    className="absolute left-[85px] -top-1 h-12 w-12"
                  />
                </div>
              </Link>
            </div>
            {/* NavItems for Large Device */}
            <div className="hidden   xl:ml-24 lg:block text-black dark:text-green-500">
              <div className="flex  flex-col xl:flex-row items-center justify-between  xl:gap-10">
                <div className="flex flex-wrap gap-2 items-center lg:mt-3 xl:my-0 justify-between space-x-2 md:space-x-5">
                  {navLinks.map(({ name, path }) => (
                    <div className="relative group font-medium" key={name}>
                      <Link
                        key={name}
                        href={path}
                        className={
                          pathname === path
                            ? "border-b-2 border-green-300 dark:text-white"
                            : "border-b-0  dark:text-white hover:text-green-700 dark:hover:text-green-300"
                        }
                      >
                        {name}
                      </Link>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 hidden lg:flex xl:hidden lg:my-2 xl:my-0">
                  <SearchInput />
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-6">
              <div className="flex items-center gap-5">
                <div className="flex-1 hidden xl:flex lg:my-2 xl:my-0">
                  <SearchInput />
                </div>
                <Link className="flex lg:hidden animate-pulse" href={"/ideas"}>
                  <Search />
                </Link>
                <ModeToggle />

                {isLoading ? (
                  <NavbarLoadingSkeleton />
                ) : user ? (
                  <>
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
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                          </Link>
                          <Link href={`/${user.role.toLowerCase()}/dashboard`}>
                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                          </Link>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="text-red-600 font-semibold cursor-pointer"
                        >
                          Log out <LogOut className="text-red-600" />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <Link href="/login">
                    <InteractiveHoverButton className="bg-green-500 font-bold rounded-lg px-4 py-2">
                      Log In
                    </InteractiveHoverButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
