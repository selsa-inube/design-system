import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";
import { useLocation } from "react-router-dom";
import { StyledNav, StyledFooter, SeparatorLine } from "./styles";
import { NavLink } from "../NavLink";

import { MdLogout } from "react-icons/md";

const checkSections = (navigation) => {
  let result = [];

  Object.keys(navigation).forEach((key) => {
    const item = navigation[key];
    if (
      item &&
      item.hasOwnProperty("id") &&
      item.hasOwnProperty("label") &&
      item.hasOwnProperty("icon") &&
      item.hasOwnProperty("path")
    ) {
      result.push({ type: "Page", key: key });
    } else if (item && typeof item === "object") {
      result.push({ type: "Section", key: key });
      result = result.concat(checkSections(item));
    }
  });

  return result;
};

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

  const transformedNavigation = checkSections(navigation);
  const containsSection = transformedNavigation.some(
    (item) => item.type === "Section"
  );

  if (containsSection) {
    const transformedRoutes = (routeKey) => Object.values(navigation[routeKey]);
    const filterSections = transformedNavigation.filter(
      (item) => item.type === "Section"
    );

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
            {filterSections.map((navSection) => (
              <Stack
                key={navSection.key}
                direction="column"
                justifyContent="center"
              >
                <Text
                  padding="16px"
                  as="h2"
                  appearance="secondary"
                  typo="titleSmall"
                >
                  {navSection.key.toUpperCase()}
                </Text>

                <Stack direction="column">
                  <NavLinkSection
                    routes={transformedRoutes(navSection.key)}
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
          {transformedNavigation.map((navSection, index) => (
            <Stack key={index} direction="column" justifyContent="center">
              <Stack direction="column">
                <NavLinkSection
                  routes={Array(navigation[navSection.key])}
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
};

Nav.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object.isRequired,
  logoutPath: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export { Nav };
