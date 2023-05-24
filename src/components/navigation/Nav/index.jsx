import React from "react";
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
  const { title, navigation, logoutPath, handleClick } = props;

  if (Array.isArray(navigation) && navigation.length === 1) {
    throw new Error(
      `Invalid parameter: Please consider defining 'navigation' as a data object rather than utilizing an array data structure. The use of an array data structure for a single section is not necessary.`
    );
  }

  if (Array.isArray(navigation)) {
    const transformedRoutes = (routes) => Object.values(routes);
    return (
      <StyledNav>
        <Stack direction="column">
          <Text
            padding="0px"
            margin="32px 0px 32px 16px"
            as="h2"
            appearance="secondary"
            typo="titleSmall"
          >
            {title}
          </Text>
          <Stack direction="column" gap="26px">
            {navigation.map((navSection) => (
              <Stack
                key={navSection.section}
                direction="column"
                justifyContent="center"
              >
                <Text
                  padding="16px"
                  as="h2"
                  appearance="secondary"
                  typo="titleSmall"
                >
                  {navSection.section.toUpperCase()}
                </Text>
                <Stack direction="column">
                  <NavLinkSection
                    routes={transformedRoutes(navSection.links)}
                    handleClick={handleClick}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
          <SeparatorLine />
          <NavLink
            id="logout"
            label="Logout"
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
  }

  const transformedNavigation = Object.values(navigation.links);
  return (
    <StyledNav>
      <Stack direction="column">
        <Text
          padding="0px"
          margin="32px 0px 32px 16px"
          as="h2"
          appearance="secondary"
          typo="titleSmall"
        >
          {title}
        </Text>
        <Stack direction="column">
          <Stack key="links" direction="column" justifyContent="center">
            <Stack direction="column">
              <NavLinkSection
                routes={transformedNavigation}
                handleClick={handleClick}
              />
            </Stack>
          </Stack>
        </Stack>
        <SeparatorLine />
        <NavLink
          id="logout"
          label="Logout"
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
  title: PropTypes.string,
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  logoutPath: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export { Nav };
