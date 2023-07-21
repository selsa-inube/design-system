import { useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { INavLinkProps } from "./interfaces/Nav.LinkComponet.interface";
import { INavMultiSectionsProps } from "./interfaces/Nav.MultiSections.interface";
import { INavProps } from "./interfaces/Nav.interface";
import { INavOneSectionProps } from "./interfaces/Nav.OneSection.interface";

import { NavLink } from "../NavLink";
import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";

import { StyledNav, StyledFooter, SeparatorLine } from "./styles";

const Links = (props: INavLinkProps) => {
  const { section } = props;

  const location = useLocation();
  const currentUrl = location.pathname;

  const isSelected = (url: string) => currentUrl.startsWith(url);

  const LinkElements = section.map((sectionObject) => (
    <NavLink
      key={sectionObject.id}
      id={sectionObject.id}
      label={sectionObject.label}
      icon={sectionObject.icon}
      path={sectionObject.path}
      isSelected={isSelected(sectionObject.path)}
    />
  ));
  return <>{LinkElements} </>;
};

const MultiSections = ({ navigation, sections }: INavMultiSectionsProps) => {
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

const OneSection = ({ navigation, firstSection }: INavOneSectionProps) => {
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
  const { navigation, logoutPath } = props;

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
          label="Logout"
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
