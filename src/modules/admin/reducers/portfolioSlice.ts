import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { PortfolioItem, PortfolioModel } from "../models";

const initialState: PortfolioItem[] = [];

export const getPortfoliosAsync = createAsyncThunk(
  "portfolios/getPortfoliosAsync",
  async () => {
    try {
      const portfolios = await PortfolioModel.findAll();
      return { portfolios };
    } catch (error: unknown) {
      // Error
      console.log(error);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {
    //
  },
  extraReducers: {
    [getPortfoliosAsync.fulfilled]: (state, action) => {
      return action.payload.portfolios;
    },
  },
});

export default portfolioSlice.reducer;
