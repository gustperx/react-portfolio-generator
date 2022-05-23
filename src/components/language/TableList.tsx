import { FC, useState } from "react";
import { useLanguage } from "../../hooks";
import { LanguageAttributes, LanguageItem } from "../../models";
import { Header, Modal } from "../ui";
import { Form } from "./";

interface Props {
  languages: LanguageItem[];
}

export const TableList: FC<Props> = ({ languages }) => {
  const { createLanguage, updateLanguage, deleteLanguage, getLanguageById } =
    useLanguage();

  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentId, setCurrentId] = useState<string>();
  const [currentLang, setCurrentLang] = useState<LanguageAttributes>();

  const getLang = async (id: string) => {
    setCurrentId("");
    setCurrentLang({ name: "" });

    const language = await getLanguageById(id);
    setCurrentId(id);
    setCurrentLang(language);

    setOpenModalUpdate(!openModalUpdate);
  };

  const createLang = () => {
    setCurrentId("");
    setCurrentLang({ name: "" });

    setOpenModalCreate(!openModalCreate);
  };

  const handleEdit = async (data: LanguageAttributes) => {
    if (!currentId) return;
    await updateLanguage(currentId, data);
  };

  return (
    <>
      <div className="mb-4">
        <Header
          title="Lenguajes de programación"
          textAction="Crear nuevo"
          handleAction={createLang}
        />
      </div>

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
                      onClick={() => getLang(item.id)}
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

      <Modal openModal={openModalUpdate} handleModal={setOpenModalUpdate}>
        <Form
          handleForm={handleEdit}
          formValues={currentLang}
          handleModal={setOpenModalUpdate}
        />
      </Modal>

      <Modal openModal={openModalCreate} handleModal={setOpenModalCreate}>
        <Form
          handleForm={createLanguage}
          formValues={currentLang}
          handleModal={setOpenModalCreate}
        />
      </Modal>
    </>
  );
};
