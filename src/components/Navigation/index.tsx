// react hooks
import { FC, Fragment, useState } from "react";

// next packages
import Link from "next/link";
import Image from "next/image";

// components
import { ProfileModal } from "components/Modal";

// import images
import logo from "assets/img/logo.svg";
import profile from "assets/img/profile.jpg";

export const Navigation: FC = () => {
  // show and hide modal state
  const [showModal, setShowModal] = useState<boolean>(false);

  // show and hide function handler
  const modalDisplayHandler = () => setShowModal((state) => !state);

  // number of items on shopping cart: for test
  let cartQuantity = 1;

  return (
    <Fragment>
      <nav className="bg-gray-900 border-gray-200">
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
                <span className="text-white text-2xl font-semibold whitespace-nowrap self-center hidden sm:block">
                  ONLINE SHOP
                </span>
              </Link>
            </div>

            <div className="flex items-center absolute sm:static inset-y-0 sm:inset-auto right-0 sm:ml-6 pr-2 sm:pr-0">
              <Link
                href="/cart"
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
                  <span className="w-5 h-5 bg-red-500 text-white text-xs font-bold leading-4 rounded-full inline-flex items-center justify-center absolute -top-2.5 -left-2.5 m-0">
                    {cartQuantity}
                  </span>
                ) : (
                  ""
                )}
              </Link>

              <div className="relative ml-3">
                <button
                  className="bg-gray-800 text-sm flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={modalDisplayHandler}
                >
                  <Image
                    src={profile}
                    alt="user image"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ProfileModal show={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};
