import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { getPortfoliosAsync, selectPortfolios } from "../reducers/portfolios";
import { PortfolioItem } from "../models";

export const usePortfolio = () => {
  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectPortfolios);

  const navigate = useNavigate();

  const getPortfolios = () => {
    dispatch(getPortfoliosAsync());
  };

  const handleCreate = () => {
    navigate("/admin/portfolios/create");
  };

  return {
    portfolios: portfolios as PortfolioItem[],
    getPortfolios,
    handleCreate,
  };
};
