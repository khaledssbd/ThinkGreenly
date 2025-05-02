'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ModeToggle } from '../ModeToggle';
import { useUser } from '@/context/UserContext';
// import { MdEnergySavingsLeaf } from "react-icons/md";

const NavBar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { user } = useUser();

  const pathLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Ideas',
      path: '/ideas',
    },
    {
      name: 'Blogs',
      path: '/blogs',
    },
    {
      name: 'About Us',
      path: '/about-us',
    },
    {
      name: user ? 'Dashboard' : '',
      path: user ? `/dashboard/${user?.role}` : '/login',
    },
  ];

  return (
    <div className=''>
      <div className="flex items-center w-[95%] mt-6 mx-auto justify-between">
        <div className="font-bold ml-5 text-2xl flex gap-2 items-center">
          <Image
            src={theme === 'light' ? '/dark-logo.png' : '/logo.png'}
            width={135}
            height={10}
            alt="logo"
          />
        </div>

        <div className="flex gap-8 ml-30">
          {pathLinks.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={
                pathname === path ? 'border-b-2 border-green-300' : 'border-b-0'
              }
            >
              <h4>{name}</h4>
            </Link>
          ))}
        </div>

        {/* <div>
        <button
          className={
            pathname === '/dashboard'
              ? 'border-b-2 border-dashed border-2 border-green-300 px-4 py-2'
              : 'border-4 border-green-300 px-2 py-1 border-dotted rounded-3xl'
          }
        >
          <Link href="/dashboard">
            <h1>Dashboard</h1>
          </Link>
        </button>
      </div> */}
        <div className="space-x-3">
          <ModeToggle />
          {user ? (
            <Link href="/login">
              <button className="bg-green-500 rounded-lg px-2 py-1">
                Login
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button className="bg-green-500 rounded-lg px-2 py-1">
                Login
              </button>
            </Link>
          )}
          {/* <Link href="/register">
          <button className="bg-green-950 ml-6 rounded-lg px-2 py-1">
            Register
          </button>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
