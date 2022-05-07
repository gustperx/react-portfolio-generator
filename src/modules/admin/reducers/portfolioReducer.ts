import { PortfolioItem } from "../models";

type ActionType =
  | { type: "load"; payload: PortfolioItem[] }
  | { type: "add"; payload: PortfolioItem }
  | { type: "update"; payload: PortfolioItem }
  | { type: "destroy"; payload: { id: string } };

export const portfolioReducer = (
  state: PortfolioItem[],
  action: ActionType
) => {
  switch (action.type) {
    case "load":
      return [...action.payload];

    case "add":
      return [...state, { ...action.payload }];

    case "update":
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex] = action.payload;
      return [...state];

    case "destroy":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return [...state];
  }
};
