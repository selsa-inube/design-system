import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  MdMenu,
  MdClose,
  MdLogout,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Stack } from "@layouts/Stack/index";
import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { NavLink } from "@navigation/NavLink";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledSeparatorLine,
  StyledDetails,
  StyledSummary,
  StyledFooter,
} from "./styles";

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

export interface IMenuSectionsProps {
  navigation: INavigation;
}

export interface INavigation {
  title: string;
  sections: { [key: string]: ISection };
}

export interface IFullscreenMenuProps {
  navigation: INavigation;
  logoutPath: string;
  logoutTitle: string;
  onClose: () => void;
}

export interface IFullscreenNavProps {
  portalId: string;
  navigation: INavigation;
  logoutPath: string;
  logoutTitle: string;
}

const MultiSections = (
  props: Pick<IFullscreenNavProps, "navigation"> & { totalSections: string[] }
) => {
  const { navigation, totalSections } = props;

  const links = useMemo(
    () =>
      Object.values(navigation.sections).map((section) =>
        Object.values(section.links)
      ),
    [navigation]
  );

  console.log(links, "multi sections");
  return (
    <Stack direction="column">
      {totalSections.map((section) => (
        <Stack>
          <StyledDetails key={section} id={section}>
            <StyledSummary>
              {section}
              <span>
                <Icon
                  appearance="dark"
                  icon={<MdOutlineArrowDropDown />}
                  size="24px"
                />
              </span>
            </StyledSummary>
            <Stack direction="column">
              {Object.values(navigation.sections[section].links).map(
                (linkValue) => (
                  <NavLink
                    key={linkValue.id}
                    id={linkValue.id}
                    label={linkValue.label}
                    icon={linkValue.icon}
                    path={linkValue.path}
                  />
                )
              )}
            </Stack>
          </StyledDetails>
        </Stack>
      ))}
    </Stack>
  );
};

const TwoSections = ({ navigation }: IMenuSectionsProps) => {
  const navigationSectionValues = Object.values(navigation.sections);

  return (
    <Stack direction="column">
      {navigationSectionValues.map((sectionValue) => (
        <Stack key={sectionValue.name} direction="column">
          <Text
            as="h2"
            type="title"
            size="small"
            appearance="gray"
            padding="16px"
          >
            {sectionValue.name}
          </Text>
          <Stack direction="column">
            {Object.values(sectionValue.links).map((linkValue) => (
              <NavLink
                key={linkValue.id}
                id={linkValue.id}
                label={linkValue.label}
                icon={linkValue.icon}
                path={linkValue.path}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const OneSection = ({ navigation }: IMenuSectionsProps) => {
  const sectionValue = Object.values(navigation.sections)[0];

  return (
    <Stack direction="column">
      {Object.values(sectionValue.links).map((linkValue) => (
        <NavLink
          key={linkValue.id}
          id={linkValue.id}
          label={linkValue.label}
          icon={linkValue.icon}
          path={linkValue.path}
        />
      ))}
    </Stack>
  );
};

const FullscreenMenu = (props: IFullscreenMenuProps) => {
  const { navigation, logoutTitle, logoutPath, onClose } = props;
  const handleClick = () => {
    onClose();
  };
  const totalSections = Object.keys(navigation.sections);

  return (
    <StyledFullscreenNav>
      <StyledCloseMenu>
        <Text type="title" size="small" appearance="gray">
          {navigation.title}
        </Text>
        <MdClose onClick={handleClick} />
      </StyledCloseMenu>
      {totalSections.length === 1 && <OneSection navigation={navigation} />}
      {totalSections.length === 2 && <TwoSections navigation={navigation} />}
      {totalSections.length > 2 && (
        <MultiSections navigation={navigation} totalSections={totalSections} />
      )}
      <StyledSeparatorLine />
      <NavLink
        id="logoutPath"
        label={logoutTitle}
        icon={<MdLogout />}
        path={logoutPath}
      />
      <StyledFooter>
        <Text type="label" size="medium" appearance="gray">
          ©2023 - Inube
        </Text>
      </StyledFooter>
    </StyledFullscreenNav>
  );
};

const FullscreenNav = (props: IFullscreenNavProps) => {
  const { portalId, navigation, logoutTitle, logoutPath } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <StyledContDropMenu>
        <MdMenu onClick={() => setIsMenuOpen(true)} />
      </StyledContDropMenu>
      {isMenuOpen &&
        createPortal(
          <FullscreenMenu
            navigation={navigation}
            logoutPath={logoutPath}
            logoutTitle={logoutTitle}
            onClose={handleClose}
          />,
          node
        )}
    </>
  );
};

export { FullscreenNav };
