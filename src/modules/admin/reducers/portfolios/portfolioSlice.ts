import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { PortfolioItem } from "../../models";
import { getPortfoliosAsync } from "./thunks";

export enum StatusLoading {
  "idle",
  "loading",
  "succeeded",
  "failed",
}

export const portfolioAdapter = createEntityAdapter<PortfolioItem>();

const initialState = portfolioAdapter.getInitialState({
  status: StatusLoading.idle,
});

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfoliosAsync.pending, (state, action) => {
        console.log("pending...");
        state.status = StatusLoading.loading;
      })
      .addCase(
        getPortfoliosAsync.fulfilled,
        (state, action: PayloadAction<PortfolioItem[]>) => {
          console.log("ok..");
          state.status = StatusLoading.idle;
          portfolioAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getPortfoliosAsync.rejected, (state, action) => {
        console.log("error...");
        state.status = StatusLoading.failed;
        console.log(action.error);
      });
  },
});

export default portfolioSlice.reducer;
