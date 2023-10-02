import { useMediaQueries } from "@hooks/useMediaQueries";
import { User } from "@data/User";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { StyledHeader } from "./styles";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logoURL: JSX.Element;
  logoutPath: string;
  logoutTitle: string;
  userName: string;
  businessUnit: string;
  isBusinessUnit: boolean;
}

const SMALL_SCREEN = "(min-width: 320px)";
const MEDIUM_SCREEN = "(min-width: 744px)";
const LARGE_SCREEN = "(min-width: 1440px)";

const getScreenSize = (matches: { [key: string]: boolean }) =>
  matches[SMALL_SCREEN] && !matches[MEDIUM_SCREEN] ? "small" : "large";

const shouldDisplayNav = (matches: { [key: string]: boolean }) =>
  matches[SMALL_SCREEN] || matches[MEDIUM_SCREEN];

const LogoAndNav = (
  props: Pick<
    IHeaderProps,
    "portalId" | "navigation" | "logoutPath" | "logoutTitle" | "logoURL"
  > & { shouldDisplay?: boolean }
) => {
  const {
    portalId,
    navigation,
    logoutPath,
    logoutTitle,
    logoURL,
    shouldDisplay,
  } = props;
  return (
    <Stack justifyContent="space-between" gap="23px">
      {shouldDisplay && (
        <FullscreenNav
          portalId={portalId}
          navigation={navigation}
          logoutPath={logoutPath}
          logoutTitle={logoutTitle}
        />
      )}
      {logoURL}
    </Stack>
  );
};

const Header = (props: IHeaderProps) => {
  const {
    portalId,
    navigation,
    logoutPath,
    logoutTitle,
    logoURL,
    userName,
    businessUnit,
    isBusinessUnit = false,
  } = props;

  const matches = useMediaQueries([SMALL_SCREEN, MEDIUM_SCREEN, LARGE_SCREEN]);

  const shouldDisplayLogoAndNav =
    !matches[LARGE_SCREEN] && shouldDisplayNav(matches);

  const transformedBusinessUnit = isBusinessUnit ? businessUnit : "";
  return (
    <StyledHeader alignItems="center" justifyContent="space-between">
      <LogoAndNav
        portalId={portalId}
        navigation={navigation}
        logoutPath={logoutPath}
        logoutTitle={logoutTitle}
        logoURL={logoURL}
        shouldDisplay={shouldDisplayLogoAndNav}
      />
      <User
        userName={userName}
        client={transformedBusinessUnit}
        size={getScreenSize(matches)}
      />
    </StyledHeader>
  );
};

export { Header };
