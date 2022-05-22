import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { LanguageItem } from "../../../models";
import {
  createLanguageAsync,
  deleteLanguageAsync,
  getLanguagesAsync,
  updateLanguageAsync,
} from "./thunks";

export const languageAdapter = createEntityAdapter<LanguageItem>();

const initialState = languageAdapter.getInitialState({
  loading: false,
  errorMessage: "",
});

export const languageSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All
      .addCase(getLanguagesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getLanguagesAsync.fulfilled,
        (state, action: PayloadAction<LanguageItem[]>) => {
          state.loading = false;
          languageAdapter.setAll(state, action.payload);
        }
      )
      .addCase(getLanguagesAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string;
      })
      // Create
      .addCase(createLanguageAsync.fulfilled, (state) => {
        state.errorMessage = "";
      })
      .addCase(createLanguageAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Update
      .addCase(updateLanguageAsync.fulfilled, (state) => {
        state.errorMessage = "";
      })
      .addCase(updateLanguageAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      })
      // Delete
      .addCase(deleteLanguageAsync.fulfilled, (state, action) => {
        state.errorMessage = "";
        languageAdapter.removeOne(state, action.payload);
      })
      .addCase(deleteLanguageAsync.rejected, (state, action) => {
        state.errorMessage = action.payload as string;
      });
  },
});

export const { clearErrorMessage } = languageSlice.actions;
