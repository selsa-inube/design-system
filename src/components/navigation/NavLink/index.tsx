import { MdKeyboardArrowRight } from "react-icons/md";
import { Text } from "@data/Text";

import { StyledNavLink, StyledLink, StyledNavList } from "./styles";

export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  disabled?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavLink = (props: INavLinkProps) => {
  const {
    id,
    label,
    path,
    disabled = false,
    isSelected = false,
    icon,
    onClick,
  } = props;

  return (
    <StyledNavList>
      <StyledLink to={path} isdisabled={+disabled}>
        <StyledNavLink
          disabled={disabled}
          isSelected={isSelected}
          id={id}
          onClick={onClick}
          icon={icon}
        >
          {icon}
          <Text type="label" disabled={disabled}>
            {label}
          </Text>
          <MdKeyboardArrowRight />
        </StyledNavLink>
      </StyledLink>
    </StyledNavList>
  );
};

export { NavLink };
