import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";
import { useLocation } from "react-router-dom";
import { StyledNav, StyledFooter, SeparatorLine } from "./styles";
import { NavLink } from "../NavLink";

import { MdLogout } from "react-icons/md";

const Links = (props) => {
  const { section } = props;
  const location = useLocation();
  const currentUrl = location.pathname;

  const isSelected = (url) => currentUrl.startsWith(url);

  return section.map((sectionObject) => (
    <NavLink
      key={sectionObject.id}
      id={sectionObject.id}
      label={sectionObject.label}
      icon={sectionObject.icon}
      path={sectionObject.path}
      isSelected={isSelected(sectionObject.path)}
    />
  ));
};

const MultiSections = ({ navigation, sections }) => {
  return (
    <Stack direction="column" gap="26px">
      {sections.map((section) => (
        <Stack
          key={navigation.sections[section].name}
          direction="column"
          justifyContent="center"
        >
          <Text padding="16px" as="h2" appearance="secondary" typo="titleSmall">
            {navigation.sections[section].name}
          </Text>
          <Stack direction="column">
            {
              <Links
                section={Object.values(navigation.sections[section].links)}
              />
            }
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation, firstSection }) => {
  return (
    <Stack direction="column">
      <Stack key="links" direction="column" justifyContent="center">
        <Stack direction="column">
          <Links
            section={Object.values(navigation.sections[firstSection].links)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

const Nav = (props) => {
  const { navigation, logoutPath } = props;
  const sections = Object.keys(navigation.sections);
  const firstSection = sections[0];
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
          <MultiSections navigation={navigation} sections={sections} />
        ) : (
          <OneSection navigation={navigation} firstSection={firstSection} />
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
};

export { Nav };
