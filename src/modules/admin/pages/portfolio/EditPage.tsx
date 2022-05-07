import { useState, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FirebaseError } from "firebase/app";

import { FirestoreErrors } from "../../../../firebase/types";
import { Form, Header } from "../../components/portfolio";
import {
  PortfolioAttributes,
  PortfolioModel,
  PortfolioItem,
} from "../../models";

export const EditPage = () => {
  const [error, setError] = useState<string>();
  const [portfolio, setPortfolio] = useState<PortfolioItem>();

  const navigate = useNavigate();
  const { portfolioId } = useParams();

  if (!portfolioId) {
    return <Navigate to="/admin/portfolios" />;
  }

  const getPortfolio = async () => {
    console.log("get simple product");
    try {
      const data = await PortfolioModel.find(portfolioId);
      if (!data.title) {
        navigate("/admin/portfolios");
      } else {
        setPortfolio(data);
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(FirestoreErrors[error.code]);
      } else {
        console.log("Error generico");
      }
      navigate("/admin/portfolios");
    }
  };

  useMemo(() => getPortfolio(), [portfolioId]);

  const handleEdit = async (data: PortfolioAttributes) => {
    try {
      await PortfolioModel.update(portfolioId, data);
      navigate("/admin/portfolios");
      console.log(data);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(FirestoreErrors[error.code]);
      } else {
        setError("Error generico");
      }
    }
  };

  const handleReturn = () => {
    navigate("/admin/portfolios");
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolio - Editar"
          textAction="Volver"
          handleAction={handleReturn}
        />
      </div>

      <p>{error}</p>

      <Form handleForm={handleEdit} formValues={portfolio} />
    </>
  );
};
