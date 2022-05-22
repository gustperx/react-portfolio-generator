import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Form } from "../../components/portfolio";
import { PortfolioAttributes, PortfolioItem } from "../../models";
import { Alert, Header } from "../../components/ui";
import { usePortfolio } from "../../hooks";

export const EditPage = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem>();

  const { portfolioId } = useParams();
  if (!portfolioId) {
    return <Navigate to="/admin/portfolios" />;
  }

  const { navigateReturn, updatePortfolio, getPortfolioById, errorMessage } =
    usePortfolio();

  useEffect(() => {
    const portfolio = getPortfolioById(portfolioId);
    if (portfolio) {
      setPortfolio(portfolio);
    } else {
      navigateReturn();
    }
  }, []);

  const handleEdit = async (data: PortfolioAttributes) => {
    await updatePortfolio(portfolioId, data);
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

      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <Form handleForm={handleEdit} formValues={portfolio} />
    </>
  );
};
