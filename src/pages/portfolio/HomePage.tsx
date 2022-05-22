import { useEffect } from "react";
import { Header, TableList } from "../../components/portfolio";
import { Alert } from "../../components/ui";
import { usePortfolio } from "../../hooks/usePortfolio";

export const HomePage = () => {
  const { getPortfolios, navigateCreate, portfolios, loading, errorMessage } =
    usePortfolio();

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolios"
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

      <TableList portfolios={portfolios} />
    </>
  );
};
