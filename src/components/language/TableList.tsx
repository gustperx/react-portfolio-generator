import { FC } from "react";
import { useLanguage } from "../../hooks";
import { LanguageItem } from "../../models";

interface Props {
  languages: LanguageItem[];
}

export const TableList: FC<Props> = ({ languages }) => {
  const { navigateEdit, deleteLanguage } = useLanguage();

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {languages.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn btn-ghost"
                    onClick={() => navigateEdit(item.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => deleteLanguage(item.id)}
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
