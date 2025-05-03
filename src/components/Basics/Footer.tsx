import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/sLogo.png';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <footer>
          <div className="flex justify-around items-center">
            {/* Logo & Contact Info */}
            <div className="col-span-2 space-y-4">
              <Link href="/">
                <div className="font-medium w-fit ml-5 text-lg flex items-center gap-0">
                  <p className="text-black dark:text-white">ThinkGreenly</p>
                  <Image src={logo} alt="logo" className="h-12 w-12" />
                </div>
              </Link>
              <p className="text-sm">
                Building a greener tomorrow through shared sustainable ideas.
              </p>
              <div className="text-sm space-y-1">
                <p>Email: support@thinkgreenly.com</p>
                <p>Phone: +880 1234 567 890</p>

                <div className="flex gap-3 mt-2">
                  <Link href="#" className="text-[#1877F2] cursor-pointer">
                    <Facebook />
                  </Link>
                  <Link href="#" className="text-[#1DA1F2] cursor-pointer">
                    <Twitter />
                  </Link>
                  <Link href="#" className="text-[#E1306C] cursor-pointer">
                    <Instagram />
                  </Link>
                  <Link href="#" className="text-[#0077B5] cursor-pointer">
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold">Navigation</h3>
              <ul className="space-y-2 text-sm">
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
                  <Link href="/about-us" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
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

          {/* Bottom Bar */}
          <div className="mt-12 border-t pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} ThinkGreenly. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
