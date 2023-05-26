import React, { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes, { object } from "prop-types";
import { MdMenu, MdClose, MdLogout } from "react-icons/md";

import { Stack } from "../../layouts/Stack/index";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink/index";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledContainertitleSection,
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";
import { useLocation } from "react-router-dom";

const FullscreenNav = (props) => {
  const { portalId, navigation, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavLink, setSelectedNavLink] = useState(null);
  let location = useLocation();

  const renderMenu = document.getElementById(portalId);

  const numberSections = Object.keys(navigation.sections);

  const handleNavLinkSelection = (link) => {
    setSelectedNavLink(link.id);
  };

  if (numberSections.length === 0) {
    throw new Error("The navigation must have at least one section");
  }

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
            {Object.entries(navigation.sections).map(
              ([sectionKey, sectionValue]) => (
                <Stack key={sectionKey} direction="column">
                  <StyledContainertitleSection>
                    <Text
                      as="h2"
                      typo="titleSmall"
                      appearance="secondary"
                      padding="16px"
                    >
                      {sectionValue.nameSection}
                    </Text>
                  </StyledContainertitleSection>

                  <Stack direction="column">
                    {Object.entries(sectionValue.links).map(
                      ([linkKey, linkValue]) => {
                        const isActive = selectedNavLink === linkValue.id;
                        return (
                          <NavLink
                            key={linkKey}
                            id={linkValue.id}
                            label={linkValue.label}
                            icon={linkValue.icon}
                            path={linkValue.path}
                            isSelected={isActive}
                            handleClick={() =>
                              handleNavLinkSelection(linkValue)
                            }
                          />
                        );
                      }
                    )}
                  </Stack>
                </Stack>
              )
            )}
          </Stack>

          <StyledSeparatorLine />
          <NavLink
            id={navigation.logoutPath.id}
            label={navigation.logoutPath.label}
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
    }
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text typo="titleSmall" appearance="secondary">
            {navigation.title}
          </Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        <Stack>
          {Object.entries(navigation.sections).map(
            ([sectionKey, sectionValue]) => (
              <Stack key={sectionKey} direction="column">
                {Object.entries(sectionValue.links).map(
                  ([linkKey, linkValue]) => (
                    <NavLink
                      key={linkKey}
                      id={linkValue.id}
                      label={linkValue.label}
                      icon={linkValue.icon}
                      path={linkValue.path}
                    />
                  )
                )}
              </Stack>
            )
          )}
        </Stack>
        <StyledSeparatorLine />
        <NavLink
          id={navigation.logoutPath.id}
          label={navigation.logoutPath.label}
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
/* 
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
 */
export { FullscreenNav };
