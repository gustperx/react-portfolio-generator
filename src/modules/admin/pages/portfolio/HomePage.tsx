import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Header, TableList } from "../../components/portfolio";

import { portfolioReducer } from "../../reducers";

const init = () => {
  return [
    {
      id: "12aassasa",
      title: "project 1",
      description: "project 1 description",
      slug: "project-1-super",
      visible: true,
    },
    {
      id: "221asasasww",
      title: "project 2",
      description: "project 2 description",
      slug: "project-2-super-duper",
      visible: true,
    },
  ];
};

export const HomePage = () => {
  const [portfolios, dispatch] = useReducer(portfolioReducer, [], init);
  console.log(portfolios);

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/admin/portfolios/create");
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Portfolios"
          textAction="Crear nuevo"
          handleAction={handleCreate}
        />
      </div>

      <TableList portfolios={portfolios} />
    </>
  );
};
