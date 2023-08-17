import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

export interface IEntry {
  id: string;
  [key: string]: any;
}

export interface IDisplayEntryProps {
  content?: React.ReactElement;
}

const DisplayEntry = ({ content }: IDisplayEntryProps) => {
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

export { DisplayEntry };
