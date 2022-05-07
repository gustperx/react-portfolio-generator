import { useState, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { FirestoreErrors } from "../../../../firebase/types";
import { Form, Header } from "../../components/portfolio";
import { PortfolioAttributes, PortfolioModel } from "../../models";

export const EditPage = () => {
  const [error, setError] = useState<string>();

  const navigate = useNavigate();
  const { portfolioId } = useParams();

  if (!portfolioId) {
    return <Navigate to="/admin/portfolios" />;
  }

  const getProduct = async () => {
    console.log("get simple product");
    try {
      const data = await PortfolioModel.find(portfolioId);
      /* if (!data.title) {
        navigate("/admin/portfolios");
      } else {
      } */
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(FirestoreErrors[error.code]);
      } else {
        console.log("Error generico");
      }
      navigate("/admin/portfolios");
    }
  };

  /* useMemo(() => getProduct(), [portfolioId]); */

  const portfolio = {
    id: "221asasasww",
    title: "project 2",
    description: "project 2 description",
    slug: "project-2-super-duper",
    visible: true,
  };

  const handleEdit = async (data: PortfolioAttributes) => {
    try {
      /* await Product.update(productId, data);
      navigate("/admin/dashboard"); */
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
