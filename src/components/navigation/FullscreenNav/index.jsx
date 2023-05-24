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
  StyledContainerNavLink,
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";

const Footer = ({ children }) => {
  return (
    <Text typo="labelMedium" appearance="disabled">
      {children}
    </Text>
  );
};

const FullscreenNav = (props) => {
  const { portalId, navigation, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [selectedNavLink, setSelectedNavLink] = useState(null);

  const renderMenu = document.getElementById(portalId);

  /*  const handleNavLinkSelection = (route) => {
    setSelectedNavLink(route);
  }; */

  const FullscreenMenu = () => {
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text typo="titleSmall" appearance="secondary">
            {navigation.title}
          </Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        <Stack>
          {Object.keys(navigation.navigation).map((section) => (
            <Text>{section}</Text>
          ))}
        </Stack>

        <StyledSeparatorLine />

        <NavLink
          id="logout"
          label="logout"
          icon={navigation.logoutPath.icon}
          path={navigation.logoutPath.path}
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
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          icon: PropTypes.node.isRequired,
        })
      ),
    })
  ).isRequired,
  logoutPath: PropTypes.string.isRequired,
};

export { FullscreenNav };
