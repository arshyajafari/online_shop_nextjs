// react hooks
import { FC } from "react";

export const NotFound: FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -z-10">
      <div className="bg-sky-600 text-white text-2xl font-semibold flex items-center justify-center rounded-xl py-5 px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 22 22"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <p className="ml-3">Not Found</p>
      </div>
    </div>
  );
};
