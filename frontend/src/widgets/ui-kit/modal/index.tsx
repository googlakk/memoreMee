import { FC, ReactNode } from "react";
interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  id: string;
  toggleModal: () => void;
}
const MyModal: FC<ModalProps> = ({ children, isOpen, id, toggleModal }) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="modal-toggle"
        checked={isOpen}
        onChange={toggleModal}
      />
      <div className="modal" role="dialog">
        <div className="modal-box w-11/12 max-w-7xl">{children}</div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </>
  );
};
export default MyModal;
