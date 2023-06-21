import React from "react";
import PropTypes from "prop-types";
import { FullscreenNav } from "../FullscreenNav";
import { User } from "../../data/User";
import { Stack } from "../../layouts/Stack";
import { useMediaQueries } from "../../../hooks/useMediaQueries";
import { StyledHeader } from "./styles";

const SMALL_SCREEN = "(min-width: 320px)";
const MEDIUM_SCREEN = "(min-width: 744px)";
const LARGE_SCREEN = "(min-width: 1440px)";

const getScreenSize = (matches) =>
  matches[SMALL_SCREEN] && !matches[MEDIUM_SCREEN] ? "small" : "large";

const shouldDisplayNav = (matches) =>
  matches[SMALL_SCREEN] || matches[MEDIUM_SCREEN];

const LogoAndNav = (props) => {
  const { portalId, navigation, logoutPath, logo, shouldDisplay } = props;
  return (
    <Stack justifyContent="space-between" gap="23px">
      {shouldDisplay && (
        <FullscreenNav
          portalId={portalId}
          navigation={navigation}
          logoutPath={logoutPath}
        />
      )}
      {logo}
    </Stack>
  );
};

const Header = (props) => {
  const { portalId, navigation, logoutPath, logo, userName, businessUnit } =
    props;
  const matches = useMediaQueries([SMALL_SCREEN, MEDIUM_SCREEN, LARGE_SCREEN]);
  const shouldDisplayLogoAndNav =
    !matches[LARGE_SCREEN] && shouldDisplayNav(matches);

  return (
    <StyledHeader alignItems="center" justifyContent="space-between">
      <LogoAndNav
        portalId={portalId}
        navigation={navigation}
        logoutPath={logoutPath}
        logo={logo}
        shouldDisplay={shouldDisplayLogoAndNav}
      />
      <User
        userName={userName}
        businessUnit={businessUnit}
        size={getScreenSize(matches)}
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  portalId: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  logo: PropTypes.node.isRequired,
  logoutPath: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  businessUnit: PropTypes.string.isRequired,
};

export { Header };
