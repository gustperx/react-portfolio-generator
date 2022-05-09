import { configureStore } from "@reduxjs/toolkit";
import portfoliosReducer from "../modules/admin/reducers/portfolioSlice";

export const store = configureStore({
  reducer: {
    portfolios: portfoliosReducer,
  },
  /* devTools: true, */
});
