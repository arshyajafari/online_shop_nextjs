// react hooks
import { Fragment, FC, useState } from "react";

// next packages
import Image from "next/image";

// styled components
import {
  StyledItemsList,
  StyledItemList,
  StyledItemImage,
  StyledShoppingDistricts,
  StyledNumberItems,
  StyledOrderTotalBox,
} from "./Shopping.style";

export const ShoppingCart: FC = () => {
  let checkedCode = "";
  const [discountValue, setDiscountValue] = useState("");

  const discountCodeHandler = () => {};

  return (
    <Fragment>
      <StyledItemsList>
        <StyledItemList>
          <StyledItemImage>
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              alt=""
              width={180}
              height={100}
            />
          </StyledItemImage>

          <StyledShoppingDistricts>
            <div>
              <h4>title</h4>
              <p>price</p>
            </div>

            <StyledNumberItems>
              <div className="flex justify-center items-center space-x-3">
                <button
                  type="button"
                  className="bg-gray-400 text-black text-sm font-medium inline-flex items-center border border-gray-400 rounded-full p-1 outline-none hover:bg-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                </button>
                <div>
                  <input
                    type="text"
                    className="w-12 bg-gray-50 text-gray-900 text-sm text-center border border-gray-300 rounded-lg py-1 outline-none"
                    disabled
                  />
                </div>
                <button
                  type="button"
                  className="bg-gray-400 text-black text-sm font-medium inline-flex items-center border border-gray-400 rounded-full p-1 outline-none hover:bg-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                  </svg>
                </button>
              </div>

              <button className="text-red-600 font-medium flex justify-center items-center hover:underline">
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </StyledNumberItems>
          </StyledShoppingDistricts>
        </StyledItemList>
      </StyledItemsList>

      <StyledOrderTotalBox>
        <div>
          <div>
            <dl>
              <div>
                <dt>Order total</dt>
                <dd>total</dd>
              </div>
            </dl>
          </div>
        </div>
      </StyledOrderTotalBox>

      <div className="w-1/4 my-4 mx-auto">
        <input
          type="text"
          id={checkedCode === "true" ? "success" : "error"}
          placeholder="Discount code"
          className={
            checkedCode === ""
              ? "w-full text-gray-900 text-sm block border border-gray-500 rounded-lg p-2.5 outline-none placeholder-gray-700"
              : checkedCode === "true"
              ? "w-full text-green-900 text-sm block border border-green-500 rounded-lg p-2.5 outline-none placeholder-green-700 focus:border-green-500 focus:ring-green-500"
              : "w-full text-red-900 text-sm block border border-red-500 rounded-lg p-2.5 outline-none placeholder-red-700 focus:border-red-500 focus:ring-red-500"
          }
          onChange={(e) => setDiscountValue(e.target.value)}
        />
        <p
          className={
            checkedCode === ""
              ? "text-gray-600 text-sm mt-2"
              : checkedCode === "true"
              ? "text-green-600 text-sm mt-2"
              : "text-red-600 text-sm mt-2"
          }
        >
          {checkedCode === "" ? (
            ""
          ) : checkedCode === "true" ? (
            <span className="font-medium">Well done!</span>
          ) : (
            <span className="font-medium">
              Unfortunately, the discount code is wrong!
            </span>
          )}
        </p>
        <button
          className="w-full bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md my-5 px-6 md:px-2 py-2.5 hover:bg-sky-700"
          onClick={discountCodeHandler}
        >
          Check code
        </button>
      </div>
    </Fragment>
  );
};
