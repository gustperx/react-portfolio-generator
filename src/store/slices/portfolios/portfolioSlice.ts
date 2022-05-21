import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { PortfolioItem } from "../../../models";
import {
  createPortfolioAsync,
  deletePortfolioAsync,
  getPortfoliosAsync,
  updatePortfolioAsync,
} from "./thunks";

export enum StatusLoading {
  "idle" = "idle",
  "loading" = "loading",
  "succeeded" = "succeeded",
  "failed" = "failed",
}

export const portfolioAdapter = createEntityAdapter<PortfolioItem>();

const initialState = portfolioAdapter.getInitialState({
  status: StatusLoading.idle,
});

export const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfoliosAsync.pending, (state, action) => {
        state.status = StatusLoading.loading;
      })
      .addCase(
        getPortfoliosAsync.fulfilled,
        (state, action: PayloadAction<PortfolioItem[]>) => {
          state.status = StatusLoading.idle;
          portfolioAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getPortfoliosAsync.rejected, (state, action) => {
        state.status = StatusLoading.failed;
        console.log(action.error);
      })
      .addCase(createPortfolioAsync.pending, (state, action) => {
        state.status = StatusLoading.loading;
      })
      .addCase(createPortfolioAsync.fulfilled, (state, action) => {
        state.status = StatusLoading.idle;
      })
      .addCase(createPortfolioAsync.rejected, (state, action) => {
        state.status = StatusLoading.failed;
        console.log(action.error);
      })
      .addCase(updatePortfolioAsync.pending, (state, action) => {
        state.status = StatusLoading.loading;
      })
      .addCase(updatePortfolioAsync.fulfilled, (state, action) => {
        state.status = StatusLoading.idle;
      })
      .addCase(updatePortfolioAsync.rejected, (state, action) => {
        state.status = StatusLoading.failed;
        console.log(action.error);
      })
      .addCase(deletePortfolioAsync.pending, (state, action) => {
        state.status = StatusLoading.loading;
      })
      .addCase(deletePortfolioAsync.fulfilled, (state, action) => {
        state.status = StatusLoading.idle;
        portfolioAdapter.removeOne(state, action.payload);
      })
      .addCase(deletePortfolioAsync.rejected, (state, action) => {
        state.status = StatusLoading.failed;
        console.log(action.error);
      });
  },
});
