import { useMediaQueries } from "@hooks/useMediaQueries";
import { User } from "@data/User";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { StyledHeader } from "./styles";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logoURL: JSX.Element;
  userName: string;
  client: string;
  isClient: boolean;
}

const SMALL_SCREEN = "(min-width: 320px)";
const MEDIUM_SCREEN = "(min-width: 744px)";
const LARGE_SCREEN = "(min-width: 1440px)";

const Header = (props: IHeaderProps) => {
  const {
    portalId,
    navigation,
    logoURL,
    userName,
    client,
    isClient = false,
  } = props;

  const matches = useMediaQueries([SMALL_SCREEN, MEDIUM_SCREEN, LARGE_SCREEN]);

  const transformedClient = isClient ? client : "";
  return (
    <StyledHeader alignItems="center" justifyContent="space-between">
      <Stack justifyContent="space-between" gap="23px">
        {!matches[LARGE_SCREEN] && (
          <FullscreenNav
            portalId={portalId}
            navigation={navigation}
            logoutPath="/logout"
            logoutTitle="Logout"
          />
        )}
        {logoURL}
      </Stack>
      <User
        userName={userName}
        client={transformedClient}
        size={matches[SMALL_SCREEN] ? "small" : "large"}
      />
    </StyledHeader>
  );
};

export { Header };
