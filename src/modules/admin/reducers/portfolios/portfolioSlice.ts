import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { StatusLoading } from "../../../../helpers";
import { PortfolioItem, PortfolioModel } from "../../models";

const portfolioAdapter = createEntityAdapter<PortfolioItem>();

const initialState = portfolioAdapter.getInitialState({
  status: StatusLoading.idle,
});

export const getPortfoliosAsync = createAsyncThunk(
  "portfolios/getPortfoliosAsync",
  async () => {
    const portfolios = await PortfolioModel.findAll();
    return portfolios;
  }
);

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      /* state.push(action.payload); */
    },
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

// export const { todoAdded } = portfolioSlice.actions;

export default portfolioSlice.reducer;
