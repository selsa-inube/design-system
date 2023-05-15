import React, { useState } from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";
import { useLocation } from "react-router-dom";
import { StyledNav, StyledFooter, SeparatorLine } from "./styles";
import { NavLink } from "../NavLink";

import { MdLogout } from "react-icons/md";

const NavLinkSection = (props) => {
  const { routes, handleClick } = props;
  const location = useLocation();
  const currentUrl = location.pathname;

  const isSelected = (url) => currentUrl.startsWith(url);

  return routes.map((route) => (
    <NavLink
      key={route.id}
      id={route.id}
      label={route.label}
      icon={route.icon}
      path={route.path}
      isSelected={isSelected(route.path)}
      handleClick={handleClick}
    />
  ));
};

const Nav = (props) => {
  const { title, navObject, logoutPath, handleClick } = props;

  const transformedGap = navObject.some((navSection) => navSection.subTitle)
    ? "32px"
    : "0px";

  return (
    <StyledNav>
      <Stack direction="column">
        <Text
          padding="20px 17px"
          margin="0px 0px 32px 0px"
          as="h2"
          appearance="secondary"
          typoToken="titleMedium"
        >
          {title}
        </Text>
        <Stack direction="column" gap={transformedGap}>
          {navObject.map((navSection, index) => (
            <Stack key={index} direction="column" justifyContent="center">
              {navSection.subTitle && (
                <Text
                  padding="0px 0px 26px 16px"
                  as="h2"
                  appearance="secondary"
                  typo="titleSmall"
                >
                  {navSection.subTitle}
                </Text>
              )}
              <Stack direction="column">
                <NavLinkSection
                  routes={navSection.routes}
                  handleClick={handleClick}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <SeparatorLine />
        <NavLink
          id="logout"
          label="logout"
          icon={<MdLogout />}
          path={logoutPath}
        />
      </Stack>
      <StyledFooter>
        <Stack justifyContent="center">
          <Text typo="labelMedium">©2023 - Inube</Text>
        </Stack>
      </StyledFooter>
    </StyledNav>
  );
};

Nav.propTypes = {
  navObject: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          icon: PropTypes.node.isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export { Nav };
