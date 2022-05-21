import { FC } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import { PortfolioItem } from "../../models";

interface Props {
  portfolios: PortfolioItem[];
}

export const TableList: FC<Props> = ({ portfolios }) => {
  const { navigateEdit, deletePortfolio } = usePortfolio();

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>visible</th>
            <th></th>
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
                  <button
                    className="btn btn-ghost"
                    onClick={() => navigateEdit(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => deletePortfolio(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
