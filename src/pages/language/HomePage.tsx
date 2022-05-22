import { useEffect } from "react";
import { TableList } from "../../components/language";
import { Alert, Header } from "../../components/ui";
import { useLanguage } from "../../hooks";

export const HomePage = () => {
  const { getLanguages, navigateCreate, languages, loading, errorMessage } =
    useLanguage();

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <>
      <div className="mb-4">
        <Header
          title="Lenguajes de programación"
          textAction="Crear nuevo"
          handleAction={navigateCreate}
        />
      </div>

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
