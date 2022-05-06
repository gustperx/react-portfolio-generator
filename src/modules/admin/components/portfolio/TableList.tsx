import { FC } from "react";
import { PortfolioItem } from "../../models";

interface Props {
  portfolios: PortfolioItem[];
}

export const TableList: FC<Props> = ({ portfolios }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>visible</th>
        </tr>
      </thead>
      <tbody>
        {portfolios.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.visible ? "Si" : "No"}</td>
              <td>
                <button>Editar</button>
                <button>Borrar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
