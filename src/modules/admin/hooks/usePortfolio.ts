import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  createPortfolioAsync,
  getPortfoliosAsync,
  selectPortfolioEntities,
  selectPortfolios,
  updatePortfolioAsync,
} from "../reducers/portfolios";
import { PortfolioAttributes, PortfolioItem } from "../models";

export const usePortfolio = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectPortfolios);
  const portfoliosEntity = useAppSelector(selectPortfolioEntities);

  const getPortfolioById = (id: string) => {
    return portfoliosEntity[id];
  };

  const getPortfolios = () => {
    dispatch(getPortfoliosAsync());
  };

  const createPortfolio = (data: PortfolioAttributes) => {
    dispatch(createPortfolioAsync(data));
  };

  const updatePortfolio = (portfolioId: string, data: PortfolioAttributes) => {
    dispatch(
      updatePortfolioAsync({
        id: portfolioId,
        payload: data,
      })
    );
  };

  const navigateCreate = () => {
    navigate("/admin/portfolios/create");
  };

  const navigateReturn = () => {
    navigate("/admin/portfolios");
  };

  return {
    portfolios: portfolios as PortfolioItem[],
    getPortfolioById,
    getPortfolios,
    createPortfolio,
    updatePortfolio,
    navigateCreate,
    navigateReturn,
  };
};
