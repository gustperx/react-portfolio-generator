import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { PortfolioItem, PortfolioModel } from "../../models";

/* const initialState: PortfolioItem[] = []; */

type typeLoading = "idle" | "loading" | "succeeded" | "failed";

const portfolioAdapter = createEntityAdapter<PortfolioItem>();

const initialState = portfolioAdapter.getInitialState({
  status: "idle",
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
  /* extraReducers: {
    [getPortfoliosAsync.fulfilled]: (state, action) => {
      return action.payload.portfolios;
    },
  }, */
  extraReducers: (builder) => {
    builder
      .addCase(getPortfoliosAsync.pending, (state, action) => {
        /* state.status = "loading"; */
        console.log("pending...");
        //console.log(action);
      })
      .addCase(
        getPortfoliosAsync.fulfilled,
        (state, action: PayloadAction<PortfolioItem[]>) => {
          console.log("ok..");
          portfolioAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getPortfoliosAsync.rejected, (state, action) => {
        console.log("error...");
        console.log(action.error);
      });
  },
});

// export const { todoAdded } = portfolioSlice.actions;

export default portfolioSlice.reducer;
