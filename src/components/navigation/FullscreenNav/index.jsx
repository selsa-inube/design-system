import React, { useState } from "react";

import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

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

const MultiSections = ({ navigation, isActive }) => {
  const navigationSectionValues = Object.values(navigation.sections);

  return (
    <Stack direction="column">
      {navigationSectionValues.map((sectionValue) => (
        <Stack key={sectionValue.section} direction="column">
          <Text as="h2" typo="titleSmall" appearance="secondary" padding="16px">
            {sectionValue.section}
          </Text>

          <Stack direction="column">
            {Object.values(sectionValue.links).map((linkValue) => (
              <NavLink
                key={linkValue.id}
                id={linkValue.id}
                label={linkValue.label}
                icon={linkValue.icon}
                path={linkValue.path}
                isSelected={isActive(linkValue.path)}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation, isActive }) => {
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
          isSelected={isActive(linkValue.path)}
        />
      ))}
    </Stack>
  );
};

const FullscreenNav = (props) => {
  const { portalId, navigation, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let location = useLocation();
  const currentUrl = location.pathname;

  const renderMenu = document.getElementById(portalId);

  const isActive = (url) => currentUrl.startsWith(url);

  const FullscreenMenu = () => {
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text typo="titleSmall" appearance="secondary">
            {navigation.title}
          </Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        {Object.keys(navigation.sections).length > 1 ? (
          <MultiSections navigation={navigation} isActive={isActive} />
        ) : (
          <OneSection navigation={navigation} isActive={isActive} />
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

  return (
    <>
      {!isMenuOpen ? (
        <StyledContDropMenu>
          <MdMenu onClick={() => setIsMenuOpen(true)} />
        </StyledContDropMenu>
      ) : (
        createPortal(<FullscreenMenu />, renderMenu)
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
