import { createAsyncThunk } from "@reduxjs/toolkit";
import { PortfolioModel, PortfolioAttributes } from "../../models";

export const getPortfoliosAsync = createAsyncThunk(
  "portfolios/getPortfoliosAsync",
  async () => {
    const portfolios = await PortfolioModel.findAll();
    return portfolios;
  }
);

export const createPortfolioAsync = createAsyncThunk(
  "portfolios/createPortfolioAsync",
  async (data: PortfolioAttributes) => {
    const id = await PortfolioModel.create(data);
    return {
      ...data,
      id,
    };
  }
);
