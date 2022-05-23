import { useEffect } from "react";
import { TableList } from "../../components/portfolio";
import { Alert } from "../../components/ui";
import { usePortfolio } from "../../hooks/usePortfolio";

export const PortfolioPage = () => {
  const { getPortfolios, portfolios, loading, errorMessage } = usePortfolio();

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <>
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
