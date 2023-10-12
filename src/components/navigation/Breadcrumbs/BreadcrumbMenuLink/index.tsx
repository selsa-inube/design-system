import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";
import { IRoute } from "../props";

const BreadcrumbMenuLink = (props: IRoute) => {
  const { label, path, id, size = "large" } = props;

  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Text type="label" size={size} appearance="gray" padding="8px 12px">
            {label}
          </Text>
        </Stack>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};

export { BreadcrumbMenuLink };
