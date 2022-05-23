import { Dispatch, FC, SetStateAction } from "react";
import { LanguageAttributes } from "../../models";
import { Form } from "./Form";

interface Props {
  openModal: boolean;
  handleModal: Dispatch<SetStateAction<boolean>>;
  formValues?: LanguageAttributes;
  handleForm: (data: LanguageAttributes) => void;
}

export const Modal: FC<Props> = ({
  openModal,
  handleModal,
  formValues,
  handleForm,
}) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div
        className={`modal modal-bottom sm:modal-middle ${
          openModal ? "modal-open" : ""
        }`}
      >
        <div className="modal-box">
          <button
            onClick={() => handleModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <Form
            handleForm={handleForm}
            formValues={formValues}
            handleModal={handleModal}
          />
        </div>
      </div>
    </>
  );
};
