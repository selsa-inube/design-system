import { INavLinkProps } from "./interfaces/NavLink.interface";
import { MdKeyboardArrowRight } from "react-icons/md";

import { StyledNavLink, StyledLink, StyledNavList } from "./styles";

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
