import React, { useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { MdMenu, MdClose } from "react-icons/md";

import { Stack } from "../../layouts/Stack/index";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink/index";

import { StyledFullscreenNav, StyledCloseMenu } from "./styles";

const FullscreenNav = (props) => {
  const { portalId, navObject } = props;
  const [isOpen, setIsOpen] = useState(false);

  const titles = navObject[0].routes;
  console.log(titles);

  const renderMenu = document.getElementById(portalId);

  const FullscreenMenu = () => {
    return (
      <StyledFullscreenNav>
        <StyledCloseMenu>
          <MdClose onClick={() => setIsOpen(false)} />
        </StyledCloseMenu>
        <Text>Menu</Text>
        <Stack></Stack>
        <Stack></Stack>
      </StyledFullscreenNav>
    );
  };

  return (
    <>
      {!isOpen ? (
        <div>
          <MdMenu onClick={() => setIsOpen(true)} />
        </div>
      ) : (
        createPortal(<FullscreenMenu />, renderMenu)
      )}
    </>
  );
};

FullscreenNav.propTypes = {
  navObject: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      path: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { FullscreenNav };
