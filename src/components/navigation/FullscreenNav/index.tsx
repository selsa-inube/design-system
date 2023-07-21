import { useState } from "react";
import { createPortal } from "react-dom";
import { MdMenu, MdClose, MdLogout } from "react-icons/md";

import { IFullscreenNavProps } from "./interfaces/FullscreenNav.interface";
import { IFullscreenMenuProps } from "./interfaces/FullscreenNav.FullscreenMenu.interface";
import { IMenuSectionsProps } from "./interfaces/Fullscreennav.MultiSections.interface";

import { Stack } from "../../layouts/Stack/index";
import { Text } from "../../data/Text";
import { NavLink } from "../NavLink/index";

import {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledSeparatorLine,
  StyledFooter,
} from "./styles";

const MultiSections = ({ navigation }: IMenuSectionsProps) => {
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
  const { navigation, logoutPath, onClose } = props;
  const handleClick = () => {
    onClose();
  };
  const totalSections = Object.keys(navigation.sections).length;

  return (
    <StyledFullscreenNav>
      <StyledCloseMenu>
        <Text type="title" size="small" appearance="gray">
          {navigation.title}
        </Text>
        <MdClose onClick={handleClick} />
      </StyledCloseMenu>
      {totalSections > 1 ? (
        <MultiSections navigation={navigation} />
      ) : (
        <OneSection navigation={navigation} />
      )}
      <StyledSeparatorLine />
      <NavLink
        id="logoutPath"
        label="Logout"
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
  const { portalId, navigation, logoutPath } = props;
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
            onClose={handleClose}
          />,
          node
        )}
    </>
  );
};

export { FullscreenNav };
