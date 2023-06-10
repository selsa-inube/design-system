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

const Header = (props) => {
  const { portalId, navigation, logoutPath, logo } = props;

  const matches = useMediaQueries(Object.values(breakpoints));
  const transformedUserSize =
    matches[breakpoints.small] && !matches[breakpoints.medium]
      ? "small"
      : "large";
  const transformedMatches =
    (matches[breakpoints.small] || matches[breakpoints.medium]) &&
    !matches[breakpoints.large];

  return (
    <StyledHeader>
      <Stack justifyContent="space-between">
        <Stack justifyContent="space-between" gap="23px">
          {transformedMatches && (
            <FullscreenNav
              portalId={portalId}
              navigation={navigation}
              logoutPath={logoutPath}
            />
          )}
          <div>{logo}</div>
        </Stack>
        <User
          userName="Leonardo Garzón"
          businessUnit="Sistemas Enlínea S.A"
          size={transformedUserSize}
        />
      </Stack>
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
