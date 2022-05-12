import { RootState } from "../../../../store";
import { portfolioAdapter } from "./portfolioSlice";

export const { selectAll: selectPortfolios, selectById: selectPortfolioById } =
  portfolioAdapter.getSelectors((state: RootState) => state.portfolios);
