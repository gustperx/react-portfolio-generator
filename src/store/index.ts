import { configureStore } from "@reduxjs/toolkit";
import { portfoliosReducer } from "../modules/admin/reducers/portfolios";

export const store = configureStore({
  reducer: {
    portfolios: portfoliosReducer,
  },
  /* devTools: true, */
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
