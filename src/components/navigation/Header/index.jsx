import React from "react";
import PropTypes from "prop-types";
import { FullscreenNav } from "../FullscreenNav";
import { User } from "../../data/User";
import { Stack } from "../../layouts/Stack";
import { useMediaQueries } from "../../../hooks/useMediaQueries";
import { StyledHeader } from "./styles";

const breakpoints = {
  small: "(min-width: 320px)",
  medium: "(min-width: 744px)",
  large: "(min-width: 1440px)",
};

const LogoAndNav = (props) => {
  const { portalId, navigation, logoutPath, logo, shouldDisplay } = props;
  if (!shouldDisplay) return null;

  return (
    <Stack justifyContent="space-between" gap="23px">
      <FullscreenNav
        portalId={portalId}
        navigation={navigation}
        logoutPath={logoutPath}
      />
      <div>{logo}</div>
    </Stack>
  );
};

const Header = (props) => {
  const { portalId, navigation, logoutPath, logo } = props;
  const matches = useMediaQueries(Object.values(breakpoints));
  const isSmallScreen =
    matches[breakpoints.small] && !matches[breakpoints.medium];
  const shouldDisplayNav =
    matches[breakpoints.small] || matches[breakpoints.medium];

  return (
    <StyledHeader alignItems="center" justifyContent="space-between">
      <LogoAndNav
        portalId={portalId}
        navigation={navigation}
        logoutPath={logoutPath}
        logo={logo}
        shouldDisplay={!matches[breakpoints.large] && shouldDisplayNav}
      />
      <User
        userName="Leonardo Garzón"
        businessUnit="Sistemas Enlínea S.A"
        size={isSmallScreen ? "small" : "large"}
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  portalId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  logo: PropTypes.node.isRequired,
  logoutPath: PropTypes.string.isRequired,
};

export { Header };
