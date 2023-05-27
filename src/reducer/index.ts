import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsTypeProps } from "constant";

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: [] as any,
  reducers: {
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
  },
});

export const { increaseCartItems, decreaseCartItems } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
