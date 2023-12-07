import { User } from "@data/User";
import { useMediaQueries } from "@hooks/useMediaQueries";
import { Stack } from "@layouts/Stack";
import { FullscreenNav, INavigation } from "@navigation/FullscreenNav";
import { BreadcrumbLink } from "../Breadcrumbs/BreadcrumbLink";
import { Links } from "./props";
import { StyledHeader } from "./styles";

export interface IHeaderProps {
  portalId: string;
  navigation: INavigation;
  logoURL: JSX.Element;
  userName: string;
  client: string;
  links?: Links;
}

const Header = (props: IHeaderProps) => {
  const { portalId, navigation, logoURL, userName, client, links } = props;

  const [mobile, tablet] = Object.values(
    useMediaQueries(["(max-width: 420px)", "(max-width: 944px) "])
  );
  console.log("tablet", tablet, "mobile", mobile);
  return (
    <StyledHeader>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack justifyContent="space-between" gap="23px">
          {tablet && (
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
          {links &&
            !tablet &&
            Object.values(links).map((link) => (
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
            size={mobile ? "small" : "large"}
          />
        </Stack>
      </Stack>
    </StyledHeader>
  );
};

export { Header };
