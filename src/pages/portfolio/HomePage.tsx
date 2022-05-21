import { useEffect } from "react";
import { Header, TableList } from "../../components/portfolio";
import { usePortfolio } from "../../hooks/usePortfolio";

export const HomePage = () => {
  const { getPortfolios, navigateCreate, portfolios } = usePortfolio();

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

      <TableList portfolios={portfolios} />
    </>
  );
};
