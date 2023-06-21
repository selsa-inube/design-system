import { InteractiveModal } from "../../../feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import PropTypes from "prop-types";

function DisplayEntry(props) {
  const { entry, actions, title, titleLabels } = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
      {showModal && (
        <InteractiveModal
          portalId="portals"
          title={title}
          closeModal={handleToggleModal}
          infoData={entry}
          actions={actions}
          labels={titleLabels}
        />
      )}
    </>
  );
}

DisplayEntry.propTypes = {
  entry: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  titleLabels: PropTypes.array.isRequired,
};

export { DisplayEntry };
