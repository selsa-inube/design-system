import React, { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { MdMenu, MdClose, MdLogout } from "react-icons/md";

import { Stack } from "../../layouts/Stack/index";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink/index";

import {
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledContainerText,
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";

const FullscreenNav = (props) => {
  const { portalId, navObject, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavLink, setSelectedNavLink] = useState(null);

  const renderMenu = document.getElementById(portalId);

  const handleNavLinkSelection = (route) => {
    setSelectedNavLink(route);
  };

  const FullscreenMenu = () => {
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text typo="titleLarge" appearance="secondary">
            Menu
          </Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        <Stack direction="column" gap="24px">
          {navObject.map((section) => (
            <section key={section.subTitle}>
              {section.subTitle && (
                <StyledContainerText>
                  <Text typo="titleSmall" appearance="secondary">
                    {section.subTitle}
                  </Text>
                </StyledContainerText>
              )}

              {section.routes.map((route) => {
                const isActived = selectedNavLink === route;
                return (
                  <Stack
                    key={route.id}
                    direction="column"
                    alignItems="flex-start"
                  >
                    <NavLink
                      id={route.id}
                      label={route.label}
                      path={route.path}
                      icon={route.icon}
                      isSelected={isActived}
                      handleClick={() => handleNavLinkSelection(route)}
                    />
                  </Stack>
                );
              })}
            </section>
          ))}
        </Stack>
        <StyledSeparatorLine />

        <NavLink
          id="logout"
          label="logout"
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
        <div>
          <MdMenu onClick={() => setIsMenuOpen(true)} />
        </div>
      ) : (
        createPortal(<FullscreenMenu />, renderMenu)
      )}
    </>
  );
};

FullscreenNav.propTypes = {
  portalId: PropTypes.string.isRequired,
  navObject: PropTypes.arrayOf(
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
