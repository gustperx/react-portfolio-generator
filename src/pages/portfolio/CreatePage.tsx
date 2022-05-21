import { Form, Header } from "../../components/portfolio";
import { usePortfolio } from "../../hooks/usePortfolio";


export const CreatePage = () => {
  const { navigateReturn, createPortfolio } = usePortfolio();

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolio - Nuevo"
          textAction="Volver"
          handleAction={navigateReturn}
        />
      </div>

      <Form handleForm={createPortfolio} />
    </>
  );
};
