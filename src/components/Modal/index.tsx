// react hook
import { FC, Fragment, useEffect, useState } from "react";

// next package
import Image from "next/image";
import Link from "next/link";

// import axios
import axios from "axios";

// import helper file
import { Toast } from "helper/toast";

// import types
import { UserInfoTypeProps, ModalTypeProps } from "type";

// import image
import profile from "assets/img/profile.jpg";

export const ProfileModal: FC<ModalTypeProps> = ({ show, onClose }) => {
  // user information state
  const [userInfo, setUserInfo] = useState<any>();

  // get user data by id request method
  const getUserDataById = async () => {
    try {
      const { data } = await axios.get<UserInfoTypeProps>(
        "https://fakestoreapi.com/users/1"
      );

      setUserInfo(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Toast({ type: "err", text: error.message });
      } else {
        return Toast({ type: "err", text: "An unexpected error occurred" });
      }
    }
  };

  useEffect(() => {
    getUserDataById();
  }, []);

  return (
    <Fragment>
      <div
        className={`w-full h-full bg-black/50 fixed inset-0 transition ease-in-out duration-300 z-50 ${
          show
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow m-auto">
          <div className="w-full inline-flex items-center justify-end">
            <button className="mt-2 mr-3 hover:text-red-500" onClick={onClose}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center pb-10">
            <Image
              src={profile}
              alt="user image"
              className="w-24 h-24 mb-3 rounded-full my-2 shadow-lg"
            />

            <h5 className="text-gray-900 text-xl font-medium mb-3">
              {userInfo?.name.firstname} {userInfo?.name.lastname}
            </h5>

            <span className="text-gray-500 text-sm inline-flex items-center justify-center md:mb-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <span className="mx-1">{userInfo?.email}</span>
            </span>

            <span className="text-gray-800 text-sm inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <span className="mx-1">{`${userInfo?.address.number}, ${userInfo?.address.street}, ${userInfo?.address.city} - ${userInfo?.address.zipcode}`}</span>
            </span>

            <div className="flex mt-2 md:mt-3 space-x-3">
              <Link
                href="#"
                className="bg-yellow-500 text-white text-center font-medium rounded-lg inline-flex items-center px-3 py-2 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 22"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>

                <span className="text-base mx-2">Update profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
