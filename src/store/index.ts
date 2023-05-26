// import redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// import reducer file
import shoppingCartSlice from "reducer";

export const shoppingCartStore = configureStore({
  reducer: { shoppingCartSlice },
});
