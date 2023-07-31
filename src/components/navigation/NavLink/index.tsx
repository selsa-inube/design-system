import { MdKeyboardArrowRight } from "react-icons/md";

import { StyledNavLink, StyledLink, StyledNavList } from "./styles";

export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  handleClick?: () => void;
  handleBlur?: () => void;
}

const NavLink = (props: INavLinkProps) => {
  const {
    id,
    label,
    path,
    isDisabled = false,
    isSelected = false,
    icon,
    handleClick,
    handleBlur,
  } = props;

  return (
    <StyledNavList>
      <StyledLink to={path} isdisabled={+isDisabled}>
        <StyledNavLink
          isDisabled={isDisabled}
          isSelected={isSelected}
          id={id}
          onClick={handleClick}
          icon={icon}
          onBlur={handleBlur}
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
