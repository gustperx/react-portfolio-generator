import { useReducer } from "react";
import { TableList } from "../../components/portfolio";

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

  return (
    <>
      <h3>Portfolio Page</h3>

      <TableList portfolios={portfolios} />
    </>
  );
};
