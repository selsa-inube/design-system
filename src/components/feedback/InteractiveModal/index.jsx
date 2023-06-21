import React from "react";
import PropTypes from "prop-types";
import { Blanket } from "../../utils/Blanket";
import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";
import { TextField } from "../../inputs/TextField";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import { StyledActionContainer, StyledModal } from "./styles";

const InteractiveModal = (props) => {
  const { portalId, title, closeModal, infoData, actions, labels } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const hasActions = actions && actions.length > 0;

  const hasLabels = labels && labels.length > 0;

  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="24px">
          <Stack direction="column" gap="16px">
            <Stack alignItems="center" justifyContent="space-between">
              <Text typo="headlineSmall">{title}</Text>
              <MdClear size={24} cursor="pointer" onClick={closeModal} />
            </Stack>
            {hasActions && <Text typo="titleMedium">Información</Text>}
            {hasLabels
              ? labels.map(
                  (field, id) =>
                    infoData[field.id] && (
                      <TextField
                        key={id}
                        label={field.titleName}
                        name={field.id}
                        id={field.id}
                        placeholder={field.titleName}
                        value={infoData[field.id]}
                        isFullWidth={true}
                        type="text"
                        size="compact"
                        readOnly={true}
                      />
                    )
                )
              : Object.keys(infoData).map((key, id) => (
                  <TextField
                    key={id}
                    label={key}
                    name={key}
                    id={key}
                    placeholder={key}
                    value={infoData[key]}
                    isFullWidth={true}
                    type="text"
                    size="compact"
                    readOnly={true}
                  />
                ))}
          </Stack>
          {hasActions && (
            <Stack direction="column" gap="16px">
              <Text typo="titleMedium">Acciones</Text>
              {actions.map((action) => (
                <Stack key={action.id} gap="10px">
                  <StyledActionContainer>
                    {typeof action.content === "function"
                      ? action.content(infoData)
                      : action.content}
                  </StyledActionContainer>
                  <Text typo="labelLarge" appearance="secondary">
                    {action.actionName}
                  </Text>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

InteractiveModal.propTypes = {
  portalId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  infoData: PropTypes.object.isRequired,
  actions: PropTypes.array,
  labels: PropTypes.array,
};

export { InteractiveModal };
