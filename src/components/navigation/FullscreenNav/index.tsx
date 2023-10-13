import { useState } from "react";
import { createPortal } from "react-dom";
import {
  MdMenu,
  MdClose,
  MdLogout,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";

import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Grid } from "@layouts/Grid";
import { Stack } from "@layouts/Stack";
import { INavLinkProps, NavLink } from "@navigation/NavLink";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledSeparatorLine,
  StyledDetails,
  StyledSummary,
  StyledFooter,
} from "./styles";

export interface ISection {
  name: string;
  links: { [key: string]: INavLinkProps };
}

export interface IMenuSectionsProps {
  navigation: INavigation;
}

export interface INavigation {
  title: string;
  sections: { [key: string]: ISection };
}

export interface IFullscreenNavProps {
  portalId: string;
  navigation: INavigation;
  logoutPath: string;
  logoutTitle: string;
}

const MultiSections = (props: Pick<IFullscreenNavProps, "navigation">) => {
  const { navigation } = props;
  const sections = Object.keys(navigation.sections);

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (section === openSection) {
      setOpenSection("");
      return;
    }
    setOpenSection(section);
  };

  return (
    <Stack direction="column">
      {sections.map((section) => (
        <Stack key={section}>
          <StyledDetails
            id={section}
            open={section === openSection}
            onClick={(e: PointerEvent) => {
              e.preventDefault();
              toggleSection(section);
            }}
          >
            <StyledSummary>
              <Text margin="0px 16px" type="title" size="small">
                {section}
              </Text>
              <span>
                <Icon
                  appearance="dark"
                  icon={
                    section === openSection ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )
                  }
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
                    onClick={(e: PointerEvent) => e.stopPropagation()}
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
        <Stack
          key={sectionValue.name}
          direction="column"
          margin="s0 s0 s300 s0"
        >
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

const sectionsComponents: {
  [key: number]: ({ navigation }: IMenuSectionsProps) => JSX.Element;
  default: (props: Pick<IFullscreenNavProps, "navigation">) => JSX.Element;
} = {
  1: OneSection,
  2: TwoSections,
  default: MultiSections,
};

const FullscreenMenu = (
  props: Omit<IFullscreenNavProps, "portalId"> & { onClose: () => void }
) => {
  const { navigation, logoutTitle, logoutPath, onClose } = props;
  const handleClick = () => {
    onClose();
  };
  const sections = Object.keys(navigation.sections);

  const SectionComponent =
    sectionsComponents[sections.length] || sectionsComponents.default;

  return (
    <StyledFullscreenNav>
      <Grid templateColumns="1fr auto" padding="s400 s300 s200 s200">
        <Text type="title" size="small" appearance="gray">
          {navigation.title}
        </Text>
        <Icon
          appearance="dark"
          icon={<MdClose />}
          onClick={handleClick}
          size="24px"
          cursorHover={true}
        />
      </Grid>
      <SectionComponent navigation={navigation} />
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
        <Icon
          appearance="dark"
          icon={<MdMenu />}
          onClick={() => setIsMenuOpen(true)}
          size="24px"
          cursorHover={true}
        />
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
