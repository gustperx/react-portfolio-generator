import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

import { FirestoreErrors } from "../../../../firebase/types";
import { PortfolioAttributes, PortfolioModel } from "../../models";
import { Form, Header } from "../../components/portfolio";

export const CreatePage = () => {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleCreate = async (data: PortfolioAttributes) => {
    try {
      /* await PortfolioModel.create(data);
      navigate("/admin/portfolios"); */
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
    <div className="">
      <div className="mb-4">
        <Header
          title="Portfolio - Nuevo"
          textAction="Volver"
          handleAction={handleReturn}
        />
      </div>

      <p>{error}</p>

      <Form handleForm={handleCreate} />
    </div>
  );
};
