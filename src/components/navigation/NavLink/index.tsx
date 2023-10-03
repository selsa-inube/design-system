import { MdKeyboardArrowRight } from "react-icons/md";

import { StyledNavLink, StyledLink, StyledNavList } from "./styles";

export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  disabled?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  handleClick?: () => void;
}

const NavLink = (props: INavLinkProps) => {
  const {
    id,
    label,
    path,
    disabled = false,
    isSelected = false,
    icon,
    handleClick,
  } = props;

  return (
    <StyledNavList>
      <StyledLink to={path} isdisabled={+disabled}>
        <StyledNavLink
          disabled={disabled}
          isSelected={isSelected}
          id={id}
          onClick={handleClick}
          icon={icon}
        >
          {icon}
          {label}
          <MdKeyboardArrowRight />
        </StyledNavLink>
      </StyledLink>
    </StyledNavList>
  );
};

export { NavLink };
