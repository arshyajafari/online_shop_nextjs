// import redux toolkit package
import { configureStore } from "@reduxjs/toolkit";

// import reducer file
import shoppingCartSlice from "reducer";

export const shoppingCartStore = configureStore({
  reducer: { shoppingCartSlice },
});

export type RootStateType = ReturnType<typeof shoppingCartStore.getState>;
