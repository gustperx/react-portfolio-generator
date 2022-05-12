import { createAsyncThunk } from "@reduxjs/toolkit";
import { PortfolioModel } from "../../models";

export const getPortfoliosAsync = createAsyncThunk(
  "portfolios/getPortfoliosAsync",
  async () => {
    const portfolios = await PortfolioModel.findAll();
    return portfolios;
  }
);
