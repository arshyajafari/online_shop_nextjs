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
  },
});

export const { increaseCartItems } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
