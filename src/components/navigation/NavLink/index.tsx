import { MdKeyboardArrowRight } from "react-icons/md";

import { StyledNavLink, StyledLink, StyledNavList } from "./styles";

export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavLink = (props: INavLinkProps) => {
  const {
    id,
    label,
    path,
    disabled = false,
    selected = false,
    icon,
    onClick,
  } = props;

  return (
    <StyledNavList>
      <StyledLink to={path} isdisabled={+disabled}>
        <StyledNavLink
          disabled={disabled}
          selected={selected}
          id={id}
          onClick={onClick}
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
