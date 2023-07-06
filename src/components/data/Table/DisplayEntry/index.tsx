import { InteractiveModal } from "../../../feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { IDisplayEntryProps } from "../interfaces/Table.DisplayEntry.interface";

const DisplayEntry = ({
  portalId,
  entry,
  actions,
  title,
  titleLabels,
  infoTitle,
  actionsTitle,
}: IDisplayEntryProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
      {showModal && (
        <InteractiveModal
          portalId={portalId}
          title={title}
          closeModal={handleToggleModal}
          infoData={entry}
          actions={actions}
          labels={titleLabels}
          infoTitle={infoTitle}
          actionsTitle={actionsTitle}
        />
      )}
    </>
  );
};

export { DisplayEntry };
