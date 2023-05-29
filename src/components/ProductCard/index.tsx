// react hook
import React, { Fragment, FC } from "react";

// import redux package
import { useDispatch } from "react-redux";

// next packages
import Image from "next/image";

// import types
import { ProductItemsTypeProps } from "type";

// import increase cart items method from reducer
import { increaseCartItems } from "reducer";

// styled components
import {
  StyledShadow,
  StyledProductInfo,
  StyledAction,
} from "./ProductCard.style";

export const ProductCard: FC<ProductItemsTypeProps> = ({ items }) => {
  // use dispatch for get increase method
  const dispatch = useDispatch();

  // add to cart handler
  const addItemToCart = (items: any) => dispatch(increaseCartItems(items));

  return (
    <Fragment>
      <div className="w-full h-full group">
        <div className="w-full h-96 sm:h-80 lg:h-64 bg-white aspect-w-1 aspect-h-1 lg:aspect-none rounded-md relative overflow-hidden group-hover:opacity-75">
          <Image
            src={items.image}
            alt={items.title}
            width={500}
            height={500}
            className="w-full lg:w-full h-full lg:h-full object-contain object-center"
          />

          <StyledShadow>
            <div></div>
            <span>${items.price}</span>
          </StyledShadow>
        </div>

        <StyledProductInfo>
          <h3>{items.title}</h3>
          <p>{items.description}</p>
        </StyledProductInfo>

        <StyledAction>
          <button type="button" onClick={() => addItemToCart(items)}>
            Add to bag
          </button>
        </StyledAction>
      </div>
    </Fragment>
  );
};
