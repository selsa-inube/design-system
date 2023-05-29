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

const FullscreenNav = (props) => {
  const { portalId, navigation, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let location = useLocation();
  const currentUrl = location.pathname;

  const renderMenu = document.getElementById(portalId);

  const isActive = (url) => currentUrl.startsWith(url);

  const numberSections = Object.keys(navigation.sections);

  const navigationSectionValues = Object.values(navigation.sections);

  const FullscreenMenu = () => {
    if (numberSections.length > 1) {
      return (
        <StyledFullscreenNav>
          <StyledCloseMenu>
            <Text typo="titleSmall" appearance="secondary">
              {navigation.title}
            </Text>
            <MdClose onClick={() => setIsMenuOpen(false)} />
          </StyledCloseMenu>
          <Stack direction="column">
            {navigationSectionValues.map((sectionValue) => (
              <Stack key={sectionValue.nameSection} direction="column">
                <Text
                  as="h2"
                  typo="titleSmall"
                  appearance="secondary"
                  padding="16px"
                >
                  {sectionValue.nameSection}
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
    }
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text typo="titleSmall" appearance="secondary">
            {navigation.title}
          </Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        <Stack direction="column">
          {navigationSectionValues.map((sectionValue) => (
            <Stack key={sectionValue} direction="column">
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
          ))}
        </Stack>
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
