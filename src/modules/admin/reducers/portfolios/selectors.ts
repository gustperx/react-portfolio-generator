import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

/* export const selectorPortfolios = (state: RootState) => {
  const entries = state.portfolios.entities;
  return Object.entries(entries);
}; */

export const selectorPortfolios = createSelector(
  // First, pass one or more "input selector" functions:
  (state: RootState) => state.portfolios.entities,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (portfolios) => Object.values(portfolios)
);
