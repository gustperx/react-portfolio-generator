import { Form, Header } from "../../components/portfolio";
import { Alert } from "../../components/ui";
import { usePortfolio } from "../../hooks/usePortfolio";

export const CreatePage = () => {
  const { navigateReturn, createPortfolio, errorMessage } = usePortfolio();

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolio - Nuevo"
          textAction="Volver"
          handleAction={navigateReturn}
        />
      </div>

      {errorMessage ? <Alert message={errorMessage} alert="alert-error" /> : ""}

      <Form handleForm={createPortfolio} />
    </>
  );
};
