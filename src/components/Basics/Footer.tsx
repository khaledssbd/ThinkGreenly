'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/sLogo.png';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import LeafAnimation from '../HomeComponents/LeafAnimation';

const Footer = () => {
  return (
    <footer className="px-5 pt-12 bg-gray-100 relative dark:bg-gray-900 border-t">
      <LeafAnimation/>
      <div className="container px-5 md:px-10 mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between">
        {/* Logo & Contact Info */}
        <div className="flex-1 font-medium space-y-4">
          <Link href="/" className="w-fit">
            <div className="relative flex items-center h-12 w-fit">
              <p className="text-black dark:text-white text-lg font-medium z-10">
                ThinkGreenly
              </p>
              <Image
                src={logo}
                alt="logo"
                className="absolute left-[80%] -top-1 h-12 w-12"
              />
            </div>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Building a greener tomorrow through shared sustainable ideas.
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>Email: support@thinkgreenly.com</p>
            <p>Phone: +880 1234 567 890</p>
          </div>
          <div className="flex gap-4 mt-3">
            <Link
              href="https://www.facebook.com/mdkhaledsshuvo"
              className="text-[#1877F2] hover:scale-110 transition"
            >
              <Facebook />
            </Link>
            <Link
              href="https://x.com/mdkhaledsshuvo"
              className="text-[#1DA1F2] hover:scale-110 transition"
            >
              <Twitter />
            </Link>
            <Link
              href="https://www.instagram.com/mdkhaledsshuvo"
              className="text-[#E1306C] hover:scale-110 transition"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mdkhaledsshuvo"
              className="text-[#0077B5] hover:scale-110 transition"
            >
              <Linkedin />
            </Link>
          </div>
        </div>

        {/* Navigation and Legal */}
        <div className="flex-1 grid grid-cols-2  gap-10">
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-100">
              Navigation
            </h3>
            <ul className="space-y-2 font-medium text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-primary">
                  Ideas
                </Link>
              </li>
              
              <li>
                <Link href="/blogs" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-100">
              Legal
            </h3>
            <ul className="space-y-2 font-medium text-sm text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-t text-sm font-medium  text-gray-600 dark:text-gray-400 py-6 mt-5">
        <p className="grid place-items-center">
          © {new Date().getFullYear()} ThinkGreenly. All rights reserved.
        </p>
        {/* <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy
          </Link>
        </div> */}
      </div>

    </footer>
  );
};

export default Footer;
