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
  const { navigation, logoutPath, handleClick } = props;
  const getValues = (object) => Object.values(object);
  const sections = getValues(navigation.sections);
  const totalSections = Object.keys(navigation.sections).length;

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
          {navigation.title}
        </Text>
        {totalSections > 1 ? (
          <Stack direction="column" gap="26px">
            {sections.map((navSection) => (
              <Stack
                key={navSection.nameSections}
                direction="column"
                justifyContent="center"
              >
                <Text
                  padding="16px"
                  as="h2"
                  appearance="secondary"
                  typo="titleSmall"
                >
                  {navSection.nameSections.toUpperCase()}
                </Text>
                <Stack direction="column">
                  {
                    <NavLinkSection
                      routes={getValues(navSection.links)}
                      handleClick={handleClick}
                    />
                  }
                </Stack>
              </Stack>
            ))}
          </Stack>
        ) : (
          <Stack direction="column">
            <Stack key="links" direction="column" justifyContent="center">
              <Stack direction="column">
                <NavLinkSection
                  routes={getValues(sections[0].links)}
                  handleClick={handleClick}
                />
              </Stack>
            </Stack>
          </Stack>
        )}
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
          <Text typo="labelMedium" appearance="disabled" padding="24px">
            ©2023 - Inube
          </Text>
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
