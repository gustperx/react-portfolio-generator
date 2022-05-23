import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
  openModal: boolean;
  handleModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({ openModal, handleModal, children }) => {
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
          {children}
        </div>
      </div>
    </>
  );
};
