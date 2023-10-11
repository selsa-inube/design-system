import { Stack } from "@layouts/Stack";

import { BreadcrumbMenuLink } from "../BreadcrumbMenuLink";
import { StyledBreadcrumbMenu } from "./styles";
import { IBreadcrumbsRoutes } from "../props";

const BreadcrumbMenu = (props: IBreadcrumbsRoutes) => {
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
