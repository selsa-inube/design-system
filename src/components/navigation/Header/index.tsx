import { useMediaQueries } from "@hooks/useMediaQueries";
import { User } from "@data/User";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { StyledHeader } from "./styles";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logo: JSX.Element;
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
  props: Pick<IHeaderProps, "portalId" | "navigation" | "logo"> & {
    shouldDisplay?: boolean;
  }
) => {
  const { portalId, navigation, logo, shouldDisplay } = props;
  return (
    <Stack justifyContent="space-between" gap="23px">
      {shouldDisplay && (
        <FullscreenNav
          portalId={portalId}
          navigation={navigation}
          logoutPath="/logout"
          logoutTitle="Logout"
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
    logo,
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
        logo={logo}
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
