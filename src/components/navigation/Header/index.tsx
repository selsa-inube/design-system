import { useMediaQueries } from "@hooks/useMediaQueries";
import { User } from "@data/User";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { StyledHeader } from "./styles";
import { BreadcrumbLink } from "../Breadcrumbs/BreadcrumbLink";
import { Links } from "./props";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logoURL: JSX.Element;
  userName: string;
  client: string;
  links: Links;
}

const Header = (props: IHeaderProps) => {
  const { portalId, navigation, logoURL, userName, client, links } = props;
  const linksArray: Links[] = Object.values(links);
  const [mobile, tablet, desktop] = Object.values(
    useMediaQueries([
      "(min-width: 320px)",
      "(min-width: 744px)",
      "(min-width: 1440px)",
    ])
  );

  return (
    <StyledHeader>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack justifyContent="space-between" gap="23px">
          {!desktop && (
            <FullscreenNav
              portalId={portalId}
              navigation={navigation}
              logoutPath="/logout"
              logoutTitle="Logout"
            />
          )}
          {logoURL}
        </Stack>
        <Stack justifyContent="space-between" gap="23px">
          {linksArray.map((link) => (
            <BreadcrumbLink
              key={link.id}
              label={link.label}
              path={link.path}
              id={link.id}
            />
          ))}
          <User
            userName={userName}
            client={client}
            size={mobile && !tablet ? "small" : "large"}
          />
        </Stack>
      </Stack>
    </StyledHeader>
  );
};

export { Header };
