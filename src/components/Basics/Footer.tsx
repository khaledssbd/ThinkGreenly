'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/sLogo.png';

const Footer = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <footer>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {/* Logo & Contact Info */}
            <div className="col-span-2 space-y-4">
              <Link href="/">
                {/* <Image src={logo} alt="Sustainability Idea Hub" width={160} height={160} /> */}
                <div className="font-medium w-fit ml-5 text-lg flex items-center gap-0">
                  <p className="text-black dark:text-white">ThinkGreenly</p>
                  <Image src={logo} alt="logo" className="h-12 w-12" />
                </div>
              </Link>
              <p className="text-muted-foreground text-sm">
                Building a greener tomorrow through shared sustainable ideas.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Email: support@sustainabilityhub.com</p>
                <p>Phone: +880 1234 567 890</p>
                <div className="flex gap-3 mt-2">
                  <Link href="#" className="hover:text-blue-500">
                    Facebook
                  </Link>
                  <Link href="#" className="hover:text-blue-400">
                    Twitter
                  </Link>
                  <Link href="#" className="hover:text-blue-700">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold">Navigation</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
                  <Link href="/dashboard" className="hover:text-primary">
                    Dashboard
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
                <li>
                  <Link href="/" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Sustainability Idea Hub. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="hover:underline">
                Terms
              </Link>
              <Link href="/" className="hover:underline">
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
