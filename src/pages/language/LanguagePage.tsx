import { useEffect } from "react";
import { Alert } from "../../components/ui";
import { TableList } from "../../components/language";
import { useLanguage } from "../../hooks";

export const LanguagePage = () => {
  const { getLanguages, languages, loading, errorMessage } = useLanguage();

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <>
      {loading ? (
        <Alert message="Cargando información" alert="alert-info" />
      ) : (
        ""
      )}

      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <TableList languages={languages} />
    </>
  );
};
