import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

export interface IEntry {
  id: string;
  [key: string]: string;
}

export interface IDisplayActionsProps {
  content?: React.ReactElement;
}

const DisplayActions = ({ content }: IDisplayActionsProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
      {showModal && content}
    </>
  );
};

export { DisplayActions };
