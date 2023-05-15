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
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";

const FullscreenNav = (props) => {
  const { portalId, navObject, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMenu = document.getElementById(portalId);

  const FullscreenMenu = () => {
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <Text>Menu</Text>
          <MdClose onClick={() => setIsMenuOpen(false)} />
        </StyledCloseMenu>
        <Stack direction="column">
          {navObject.map((section) => (
            <section key={section.subTitle}>
              {section.subTitle && <Text>{section.subTitle}</Text>}
              {section.routes.map((route) => (
                <Stack
                  key={route.id.toString()}
                  direction="column"
                  alignItems="flex-start"
                >
                  <NavLink
                    id={route.id.toString()}
                    label={route.label}
                    path={route.path}
                    icon={route.icon}
                  />
                </Stack>
              ))}
            </section>
          ))}
          <hr />
        </Stack>
        <StyledSeparatorLine />
        <NavLink
          id="logout"
          label="logout"
          icon={<MdLogout />}
          path={logoutPath}
        />
        <StyledFooter>
          <Text typo="labelMedium">©2023 - Inube</Text>
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
