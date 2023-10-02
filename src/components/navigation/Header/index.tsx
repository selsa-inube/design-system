import { useMediaQueries } from "@hooks/useMediaQueries";
import { User } from "@data/User";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { StyledHeader } from "./styles";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logo: JSX.Element;
  logoutPath: string;
  logoutTitle: string;
  userName: string;
  client: string;
  isClient: boolean;
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
    "portalId" | "navigation" | "logoutPath" | "logoutTitle" | "logo"
  > & { shouldDisplay?: boolean }
) => {
  const { portalId, navigation, logoutPath, logoutTitle, logo, shouldDisplay } =
    props;
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
      {logo}
    </Stack>
  );
};

const Header = (props: IHeaderProps) => {
  const {
    portalId,
    navigation,
    logoutPath,
    logoutTitle,
    logo,
    userName,
    client,
    isClient = false,
  } = props;

  const matches = useMediaQueries([SMALL_SCREEN, MEDIUM_SCREEN, LARGE_SCREEN]);

  const shouldDisplayLogoAndNav =
    !matches[LARGE_SCREEN] && shouldDisplayNav(matches);

  const transformedClient = isClient ? client : "";
  return (
    <StyledHeader alignItems="center" justifyContent="space-between">
      <LogoAndNav
        portalId={portalId}
        navigation={navigation}
        logoutPath={logoutPath}
        logoutTitle={logoutTitle}
        logo={logo}
        shouldDisplay={shouldDisplayLogoAndNav}
      />
      <User
        userName={userName}
        client={transformedClient}
        size={getScreenSize(matches)}
      />
    </StyledHeader>
  );
};

export { Header };
