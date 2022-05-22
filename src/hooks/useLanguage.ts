import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useAppDispatch, useAppSelector } from "./useAppState";
import {
  createLanguageAsync,
  deleteLanguageAsync,
  getLanguagesAsync,
  selectAllLanguage,
  selectLanguageEntities,
  updateLanguageAsync,
} from "../store/slices/language";
import { LanguageAttributes } from "../models";

export const useLanguage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const languages = useAppSelector(selectAllLanguage);
  const languagesEntity = useAppSelector(selectLanguageEntities);
  const { loading, errorMessage } = useAppSelector((state) => state.languages);

  const getLanguageById = (id: string) => {
    return languagesEntity[id];
  };

  const getLanguages = () => {
    dispatch(getLanguagesAsync());
  };

  const createLanguage = async (data: LanguageAttributes) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(createLanguageAsync(data));
    Swal.hideLoading();
    Swal.close();

    navigateReturn();
  };

  const updateLanguage = async (
    languageId: string,
    data: LanguageAttributes
  ) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(
      updateLanguageAsync({
        id: languageId,
        payload: data,
      })
    );
    Swal.hideLoading();
    Swal.close();

    navigateReturn();
  };

  const deleteLanguage = async (id: string) => {
    Swal.fire({
      title: "Espere por favor",
      allowOutsideClick: false,
    });
    Swal.showLoading();
    await dispatch(deleteLanguageAsync(id));
    Swal.hideLoading();
    Swal.close();
  };

  const navigateCreate = () => {
    navigate("/admin/languages/create");
  };

  const navigateEdit = (id: string) => {
    navigate(`/admin/languages/${id}/edit`);
  };

  const navigateReturn = () => {
    navigate("/admin/languages");
  };

  return {
    languages,
    getLanguageById,
    getLanguages,
    createLanguage,
    updateLanguage,
    deleteLanguage,
    loading,
    errorMessage,
    navigateCreate,
    navigateEdit,
    navigateReturn,
  };
};
