// react hooks
import { FC } from "react";

// next packages
import Link from "next/link";
import Image from "next/image";

// import image
import logo from "assets/img/logo.svg";

export const FooterPages: FC = () => {
  return (
    <div className="w-full bg-gray-900 absolute bottom-0 left-0 z-50">
      <div className="w-full max-w-full mx-auto px-4 md:px-14 py-6 lg:py-8">
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
              <span className="text-white text-2xl font-semibold self-center whitespace-nowrap">
                ONLINE SHOP
              </span>
            </Link>
          </div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-gray-500 text-sm sm:text-center">
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
