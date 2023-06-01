import React, { useState } from "react";

import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import { MdMenu, MdClose, MdLogout } from "react-icons/md";

import { Stack } from "../../layouts/Stack/index";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink/index";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";

const MultiSections = ({ navigation }) => {
  const navigationSectionValues = Object.values(navigation.sections);

  return (
    <Stack direction="column">
      {navigationSectionValues.map((sectionValue) => (
        <Stack key={sectionValue.name} direction="column">
          <Text as="h2" typo="titleSmall" appearance="secondary" padding="16px">
            {sectionValue.name}
          </Text>

          <Stack direction="column">
            {Object.values(sectionValue.links).map((linkValue) => (
              <NavLink
                key={linkValue.id}
                id={linkValue.id}
                label={linkValue.label}
                icon={linkValue.icon}
                path={linkValue.path}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation }) => {
  const sectionValue = Object.values(navigation.sections)[0];

  return (
    <Stack direction="column">
      {Object.values(sectionValue.links).map((linkValue) => (
        <NavLink
          key={linkValue.id}
          id={linkValue.id}
          label={linkValue.label}
          icon={linkValue.icon}
          path={linkValue.path}
        />
      ))}
    </Stack>
  );
};

const FullscreenMenu = ({ navigation, logoutPath, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <StyledFullscreenNav>
      <StyledCloseMenu>
        <Text typo="titleSmall" appearance="secondary">
          {navigation.title}
        </Text>
        <MdClose onClick={handleClick} />
      </StyledCloseMenu>
      {Object.keys(navigation.sections).length > 1 ? (
        <MultiSections navigation={navigation} />
      ) : (
        <OneSection navigation={navigation} />
      )}
      <StyledSeparatorLine />
      <NavLink
        id="logoutPath"
        label="Logout"
        icon={<MdLogout />}
        path={logoutPath}
      />
      <StyledFooter>
        <Text typo="labelMedium" appearance="disabled">
          ©2023 - Inube
        </Text>
      </StyledFooter>
    </StyledFullscreenNav>
  );
};

const FullscreenNav = (props) => {
  const { portalId, navigation, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledContDropMenu>
        <MdMenu onClick={() => setIsMenuOpen(true)} />
      </StyledContDropMenu>
      {isMenuOpen &&
        createPortal(
          <FullscreenMenu
            navigation={navigation}
            logoutPath={logoutPath}
            onClose={handleClose}
          />,
          node
        )}
    </>
  );
};

FullscreenNav.propTypes = {
  portalId: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
  }).isRequired,
  logoutPath: PropTypes.string.isRequired,
};

export { FullscreenNav };