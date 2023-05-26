import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsTypeProps } from "constant";

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: [] as any,
  reducers: {
    increaseCartQuantity: (state, action: PayloadAction<ProductsTypeProps>) => {
      return [action.payload, ...state];
    },
  },
});

export const { increaseCartQuantity } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
