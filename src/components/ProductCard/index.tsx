// react hook
import React, { Fragment, FC } from "react";

// next packages
import Image from "next/image";

// styled components
import {
  StyledShadow,
  StyledProductInfo,
  StyledAction,
} from "./ProductCard.style";

export const ProductCard: FC = () => {
  const products = [
    {
      id: 1,
      src: "https://flowbite.com/docs/images/logo.svg",
      title: "Basic Tee",
      description: "Front of men's Basic Tee in black.",
      price: "$35",
    },
  ];

  return (
    <Fragment>
      <div className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 mt-6">
          {products.map((item) => (
            <div key={item.id}>
              <div className="w-full lg:h-auto bg-gray-200 rounded-md relative aspect-h-1 lg:aspect-none aspect-w-1 overflow-hidden hover:opacity-75">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={0}
                  height={0}
                  objectFit="contain"
                  objectPosition="center"
                  layout="responsive"
                />

                <StyledShadow>
                  <div></div>
                  <span>{item.price}</span>
                </StyledShadow>
              </div>

              <StyledProductInfo>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StyledProductInfo>

              <StyledAction>
                <button type="button">Add to bag</button>
              </StyledAction>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
