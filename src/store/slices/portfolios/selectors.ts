import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { portfolioAdapter } from "./portfolioSlice";

export const { selectAll: selectPortfolios, selectById: selectPortfolioById } =
  portfolioAdapter.getSelectors((state: RootState) => state.portfolios);

export const selectPortfolioEntities = createSelector(
  // First, pass one or more "input selector" functions:
  (state: RootState) => state.portfolios.entities,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (portfolios) => portfolios
);

export const selectPortfolioStatus = createSelector(
  // First, pass one or more "input selector" functions:
  (state: RootState) => state.portfolios.status,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (status) => status
);
