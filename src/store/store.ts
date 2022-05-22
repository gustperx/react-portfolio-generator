import { configureStore } from "@reduxjs/toolkit";
import { portfolioSlice } from "./slices/portfolio";

export const store = configureStore({
  reducer: {
    portfolios: portfolioSlice.reducer,
  },
});
