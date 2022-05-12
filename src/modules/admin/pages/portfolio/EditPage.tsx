import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Form, Header } from "../../components/portfolio";
import { PortfolioAttributes, PortfolioItem } from "../../models";
import { usePortfolio } from "../../hooks/usePortfolio";

export const EditPage = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem>();

  const { portfolioId } = useParams();
  if (!portfolioId) {
    return <Navigate to="/admin/portfolios" />;
  }

  const { navigateReturn, updatePortfolio, getPortfolioById } = usePortfolio();

  useEffect(() => {
    const portfolio = getPortfolioById(portfolioId);
    if (portfolio) {
      setPortfolio(portfolio);
    } else {
      navigateReturn();
    }
  }, []);

  const handleEdit = (data: PortfolioAttributes) => {
    updatePortfolio(portfolioId, data);
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolio - Editar"
          textAction="Volver"
          handleAction={navigateReturn}
        />
      </div>

      <Form handleForm={handleEdit} formValues={portfolio} />
    </>
  );
};
