// import redux toolkit package
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import type
import { ProductsTypeProps } from "type";

// import state type from store
import { RootStateType } from "store";

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: [] as any,
  reducers: {
    // add item to cart and increase cart quantity
    increaseCartItems: (state, action: PayloadAction<ProductsTypeProps>) => {
      const isItemInCart = state.find(
        (item: any) => item.id === action.payload.id
      );
      if (isItemInCart)
        return state.map((item: any) => {
          if (item.id === action.payload.id)
            return { ...action.payload, amount: item.amount + 1 };
          else return item;
        });
      state.push({ ...action.payload, amount: 1 });
    },
    // remove item from cart and decrease cart quantity
    decreaseCartItems: (state, action: PayloadAction<number | string>) => {
      const itemIndex = state.findIndex(
        (item: any) => item.id === action.payload
      );
      if (state[itemIndex].amount === 1) {
        return state.filter((item: any) => item.id !== action.payload);
      } else {
        return state.map((item: any) => {
          if (item.id === action.payload)
            return { ...item, amount: item.amount - 1 };
          else return item;
        });
      }
    },
    // remove item from cart
    removeItemFromCart: (state, action: PayloadAction<number | string>) =>
      state.filter((item: any) => item.id !== action.payload),
    // cart quantity
    cartQuantity: (state) =>
      state.reduce((qty: number, item: any) => qty + item.amount, 0),
  },
});

export const {
  increaseCartItems,
  decreaseCartItems,
  removeItemFromCart,
  cartQuantity,
} = shoppingCartSlice.actions;

export const getAllItemsInShoppingCart = (state: RootStateType) =>
  state.shoppingCartSlice;

export const getTotalPrice = (state: RootStateType) =>
  state.shoppingCartSlice.reduce(
    (acc: number, next: any) => (acc += next.amount * next.price),
    0
  );

export default shoppingCartSlice.reducer;
