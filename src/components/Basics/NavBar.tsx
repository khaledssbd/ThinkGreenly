"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// import { MdEnergySavingsLeaf } from "react-icons/md";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../ModeToggle";
const NavBar = () => {
  const pathname = usePathname();
  //.log(pathname);
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
    <div className="flex  items-center w-[95%] mt-6 mx-auto justify-between">
      <div className="font-bold ml-5  text-2xl flex gap-2 items-center">
        <Image src={logo} width={135} height={10} alt="logo" />
      </div>
      <div className="flex gap-8 ml-30">{links}</div>
      <div>
        <button
          className={
            pathname === "/dashboard"
              ? "border-b-2 border-dashed border-2 border-green-300 px-4 py-2"
              : "border-4 border-green-300 px-2 py-1 border-dotted rounded-3xl"
          }
        >
          <Link href="/dashboard">
            <h1>Dashboard</h1>
          </Link>
        </button>
      </div>
      <div className="">
        <Link href="/login">
          <button className="bg-green-500  rounded-lg px-2 py-1">Login</button>
        </Link>
        {/* </> */}
        {/* )} */}
        <Link href="register">
          {" "}
          <button className="bg-green-950 ml-6  rounded-lg px-2 py-1">
            Register
          </button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
