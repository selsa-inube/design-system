import { InteractiveModal } from "../../../feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import PropTypes from "prop-types";

function DisplayEntry(props) {
  const {
    portalId,
    entry,
    actions,
    title,
    titleLabels,
    infoTitle,
    actionsTitle,
  } = props;
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
}

DisplayEntry.propTypes = {
  portalId: PropTypes.string,
  entry: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  titleLabels: PropTypes.array.isRequired,
  infoTitle: PropTypes.string,
  actionsTitle: PropTypes.string,
};

export { DisplayEntry };
