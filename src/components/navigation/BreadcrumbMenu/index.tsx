import { Stack } from "../../layouts/Stack";
import { BreadcrumbMenuLink } from "../BreadcrumbMenuLink";
import { IBreadcrumbMenuProps } from "./interfaces/BreadcrumbMenu.interface";
import { StyledBreadcrumbMenu } from "./styles";

const BreadcrumbMenu = (props: IBreadcrumbMenuProps) => {
  const { routes } = props;

  return (
    <StyledBreadcrumbMenu>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route) => (
          <BreadcrumbMenuLink
            key={route.id}
            id={route.id}
            path={route.path}
            label={route.label}
          />
        ))}
      </Stack>
    </StyledBreadcrumbMenu>
  );
};

export { BreadcrumbMenu };
