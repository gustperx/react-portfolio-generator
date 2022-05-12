import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  createPortfolioAsync,
  getPortfoliosAsync,
  selectPortfolios,
} from "../reducers/portfolios";
import { PortfolioAttributes, PortfolioItem } from "../models";

export const usePortfolio = () => {
  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectPortfolios);

  const navigate = useNavigate();

  const getPortfolios = () => {
    dispatch(getPortfoliosAsync());
  };

  const createPortfolio = (data: PortfolioAttributes) => {
    dispatch(createPortfolioAsync(data));
  };

  const navigateCreate = () => {
    navigate("/admin/portfolios/create");
  };

  const navigateReturn = () => {
    navigate("/admin/portfolios");
  };

  return {
    portfolios: portfolios as PortfolioItem[],
    getPortfolios,
    createPortfolio,
    navigateCreate,
    navigateReturn,
  };
};
