import { MdKeyboardArrowRight } from "react-icons/md";
import { Icon } from "@data/Icon";
import { Text } from "@data/Text";
import { Grid } from "@layouts/Grid";

import { StyledLink, StyledNavList } from "./styles";

export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: (e: PointerEvent) => void;
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
    <StyledNavList
      id={id}
      disabled={disabled}
      selected={selected}
      onClick={onClick}
    >
      <StyledLink to={path} disabled={+disabled}>
        <Grid
          templateColumns={icon ? "auto 1fr auto" : "1fr auto"}
          gap="s300"
          padding="s0 s200"
          alignItems="center"
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
        </Grid>
      </StyledLink>
    </StyledNavList>
  );
};

export { NavLink };
