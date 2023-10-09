import { MdKeyboardArrowRight } from "react-icons/md";
import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Grid } from "@layouts/Grid";

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
          <Icon
            icon={icon}
            appearance={selected ? "primary" : "dark"}
            disabled={disabled}
            size="24px"
            parentHover={!disabled && true}
          />
          <Text type="label" disabled={disabled}>
            {label}
          </Text>
          {!disabled && selected && (
            <Icon
              icon={<MdKeyboardArrowRight />}
              appearance="dark"
              size="24px"
              parentHover={!disabled && true}
            />
          )}
        </StyledNavLink>
      </StyledLink>
      <Grid>prueba</Grid>
    </StyledNavList>
  );
};

export { NavLink };
