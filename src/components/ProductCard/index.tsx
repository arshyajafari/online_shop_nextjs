// react hook
import React, { FC } from "react";

// next packages
import Image from "next/image";

// styled components
import { Container } from "./ProductCard.style";

export const ProductCard: FC = () => {
  return (
    <Container>
      <div className="w-full h-full border-solid border-2 border-sky-200 rounded-xl shadow-md">
        <Image
          src=""
          alt=""
          className="w-3/4 h-64 object-contain mx-auto p-4"
        />
        <div className="p-6 md:px-3">
          <h5 className="text-neutral-700 dark:text-neutral-600 lg:text-xl md:text:base font-medium mb-2">
            title
          </h5>
          <p className="text-gray-500 dark:text-gray-400 lg:text-base md:text-sm text-justify mb-4">
            description
          </p>
          <div className="flex justify-between items-center pt-4">
            <span className="text-neutral-600 dark:text-neutral-600 text-lg font-medium leading-tight">
              $price
            </span>
            <button
              type="button"
              className="w-1/2 bg-sky-600 text-white lg:text-sm sm:text-xs font-medium uppercase leading-normal rounded-md px-6 md:px-2 py-2.5 hover:bg-sky-700"
              // onClick={() => increaseCartQuantity(items.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
