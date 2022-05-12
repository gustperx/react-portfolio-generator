import { createAsyncThunk } from "@reduxjs/toolkit";

import { PortfolioModel, PortfolioAttributes } from "../../models";

export interface updatePortfolioProps {
  id: string;
  payload: PortfolioAttributes;
}

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

export const updatePortfolioAsync = createAsyncThunk(
  "portfolios/updatePortfolioAsync",
  async (data: updatePortfolioProps) => {
    await PortfolioModel.update(data.id, data.payload);
    return {
      ...data.payload,
      id: data.id,
    };
  }
);

export const deletePortfolioAsync = createAsyncThunk(
  "portfolios/deletePortfolioAsync",
  async (id: string) => {
    await PortfolioModel.destroy(id);
    return id;
  }
);
