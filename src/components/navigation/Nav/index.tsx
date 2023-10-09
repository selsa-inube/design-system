import { useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { Text } from "@data/Text";
import { Stack } from "@layouts/Stack";
import { NavLink } from "@navigation/NavLink";

import { StyledNav, StyledFooter, SeparatorLine } from "./styles";

export interface INavLinkProps {
  section: ILink[];
}

export interface ILink {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface ISection {
  name: string;
  links: { [key: string]: ILink };
}

export interface INavigation {
  title: string;
  sections: { [key: string]: ISection };
}

export interface INavProps {
  navigation: INavigation;
  logoutPath: string;
  logoutTitle: string;
}

const Links = (props: INavLinkProps) => {
  const { section } = props;

  const location = useLocation();
  const currentUrl = location.pathname;

  const LinkElements = section.map((sectionObject) => (
    <NavLink
      key={sectionObject.id}
      id={sectionObject.id}
      label={sectionObject.label}
      icon={sectionObject.icon}
      path={sectionObject.path}
      selected={currentUrl.startsWith(sectionObject.path)}
    />
  ));
  return <>{LinkElements} </>;
};

const MultiSections = ({
  navigation,
  sections,
}: Pick<INavProps, "navigation"> & { sections: string[] }) => {
  return (
    <Stack direction="column" gap="26px">
      {sections.map((section) => (
        <Stack
          key={navigation.sections[section].name}
          direction="column"
          justifyContent="center"
        >
          <Text
            padding="16px"
            as="h2"
            appearance="gray"
            type="title"
            size="small"
          >
            {navigation.sections[section].name}
          </Text>
          <Stack direction="column">
            <Links
              section={Object.values(navigation.sections[section].links)}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({
  navigation,
  firstSection,
}: Pick<INavProps, "navigation"> & { firstSection: string }) => {
  return (
    <Stack direction="column">
      <Stack key="links" direction="column" justifyContent="center">
        <Stack direction="column">
          {firstSection && (
            <Links
              section={Object.values(navigation.sections[firstSection].links)}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Nav = (props: INavProps) => {
  const { navigation, logoutTitle, logoutPath } = props;

  const sections = Object.keys(navigation.sections);
  const firstSection = sections[0];
  const totalSections = Object.keys(navigation.sections).length;

  return (
    <StyledNav>
      <Stack direction="column">
        <Text
          padding="0px"
          margin="32px 16px 16px 16px"
          as="h2"
          appearance="gray"
          type="title"
          size="small"
        >
          {navigation.title}
        </Text>
        {totalSections > 1 ? (
          <MultiSections navigation={navigation} sections={sections} />
        ) : (
          <OneSection navigation={navigation} firstSection={firstSection} />
        )}
        <SeparatorLine />
        <NavLink
          id="logout"
          label={logoutTitle}
          icon={<MdLogout />}
          path={logoutPath}
        />
      </Stack>
      <StyledFooter>
        <Stack justifyContent="center">
          <Text type="label" size="medium" appearance="gray" padding="24px">
            ©2023 - Inube
          </Text>
        </Stack>
      </StyledFooter>
    </StyledNav>
  );
};

export { Nav };
