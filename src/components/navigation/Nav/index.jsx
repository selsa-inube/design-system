import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { NavUI } from "./interface";
import { Text } from "../../data/Text";

import { StyledNav, StyledFooter, SeparatorLine } from "./styles";
import { NavLink } from "../NavLink";

import { MdLogout } from "react-icons/md";

const Nav = (props) => {
  const { title, navObject, logoutPath } = props;

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
        <Stack id="nav" direction="column" gap="43px">
          {navObject.map((navSection, index) => (
            <Stack key={index} direction="column" justifyContent="center">
              <Text
                padding="0px 0px 26px 16px"
                as="h2"
                appearance="secondary"
                typo="titleSmall"
              >
                {navSection.subTitle}
              </Text>
              <Stack direction="column">
                <NavUI routes={navSection.routes} />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <SeparatorLine />
        {/* <Stack direction="column"> */}
        <NavLink
          id="logout"
          label="logout"
          icon={<MdLogout />}
          path={logoutPath}
        />
        {/* </Stack> */}
      </Stack>
      <StyledFooter>
        <Stack justifyContent="center">
          <Text typosOptions="labelMedium">© 2023 Sistemas Enlinea S.A</Text>
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
