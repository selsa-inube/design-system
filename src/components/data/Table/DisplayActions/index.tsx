import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { ITableProps } from "..";

const DisplayActions = ({ content }: Pick<ITableProps, "content">) => {
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
