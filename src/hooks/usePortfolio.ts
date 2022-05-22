import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createPortfolioAsync,
  deletePortfolioAsync,
  getPortfoliosAsync,
  selectAllPortfolios,
  selectPortfolioEntities,
  updatePortfolioAsync,
} from "../store/slices/portfolio";
import { PortfolioAttributes } from "../models";

export const usePortfolio = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const portfolios = useAppSelector(selectAllPortfolios);
  const portfoliosEntity = useAppSelector(selectPortfolioEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.portfolios);

  const getPortfolioById = (id: string) => {
    return portfoliosEntity[id];
  };

  const getPortfolios = () => {
    dispatch(getPortfoliosAsync());
  };

  const createPortfolio = async (data: PortfolioAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createPortfolioAsync(data));
    Swal.hideLoading();
    Swal.close();

    navigateReturn();
  };

  const updatePortfolio = async (
    portfolioId: string,
    data: PortfolioAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updatePortfolioAsync({
        id: portfolioId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();

    navigateReturn();
  };

  const deletePortfolio = async (id: string) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(deletePortfolioAsync(id));
    Swal.hideLoading();
    Swal.close();
  };

  const navigateCreate = () => {
    navigate("/admin/portfolios/create");
  };

  const navigateEdit = (id: string) => {
    navigate(`/admin/portfolios/${id}/edit`);
  };

  const navigateReturn = () => {
    navigate("/admin/portfolios");
  };

  return {
    portfolios,
    getPortfolioById,
    getPortfolios,
    createPortfolio,
    updatePortfolio,
    deletePortfolio,
    loading,
    errorMessage,
    navigateCreate,
    navigateEdit,
    navigateReturn,
  };
};
