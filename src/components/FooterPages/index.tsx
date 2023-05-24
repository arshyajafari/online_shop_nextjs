// react hooks
import { FC } from "react";

// next packages
import Link from "next/link";
import Image from "next/image";

// import image
import logo from "assets/img/logo.svg";

export const FooterPages: FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="web Logo"
                width={60}
                height={60}
                className="mr-3"
              />
              <span className="text-2xl font-semibold self-center whitespace-nowrap dark:text-white">
                ONLINE SHOP
              </span>
            </Link>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-gray-500 text-sm sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link
                href="https://github.com/arshyajafari"
                className="hover:underline"
              >
                Arshya Jafari
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
