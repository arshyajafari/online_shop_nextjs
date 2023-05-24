// react hooks
import { FC, useState } from "react";

// next packages
import Link from "next/link";
import Image from "next/image";

// styled components
import { StyledNumberItemsCart } from "./Nav.style";

// import images
import logo from "assets/img/logo.svg";
import profile from "assets/img/profile.jpg";

export const Navigation: FC = () => {
  // profile menu state
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  // profile state handler method
  const profileMenuHandler = () => setProfileIsOpen((state) => !state);

  // number of items on shopping cart
  let cartQuantity = 1;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 sm:px-6">
        <div className="h-16 flex items-center justify-between relative">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <Image
                src={logo}
                alt="web logo"
                width={32}
                height={32}
                className="mr-0 sm:mr-3"
              />
              <span className="text-2xl font-semibold whitespace-nowrap self-center dark:text-white hidden sm:block">
                ONLINE SHOP
              </span>
            </Link>
          </div>

          <div className="flex items-center absolute sm:static inset-y-0 sm:inset-auto right-0 sm:ml-6 pr-2 sm:pr-0">
            <Link
              href=""
              className="bg-gray-800 text-gray-400 rounded-full relative p-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {cartQuantity && cartQuantity > 0 ? (
                <StyledNumberItemsCart>{cartQuantity}</StyledNumberItemsCart>
              ) : (
                ""
              )}
            </Link>

            <div className="relative ml-3">
              <button
                className="bg-gray-800 text-sm flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={profileMenuHandler}
                onBlur={() => setProfileIsOpen(false)}
              >
                <Image
                  src={profile}
                  alt="user image"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </button>
              {profileIsOpen ? (
                <ul className="w-36 bg-white absolute right-0 rounded-md mt-2 py-1 z-10 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 text-sm block px-4 py-2"
                    >
                      Your Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 text-sm block px-4 py-2 "
                    >
                      Cart
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
