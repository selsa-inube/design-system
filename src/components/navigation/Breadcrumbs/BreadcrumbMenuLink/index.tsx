import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";
import { typos } from "./props";
import { IRoute } from "../props";

const BreadcrumbMenuLink = (props: IRoute) => {
  const { label, path, id, typo = "large" } = props;

  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Text
            type="label"
            size={typos.includes(typo) ? typo : "large"}
            appearance="gray"
            padding="8px 12px"
          >
            {label}
          </Text>
        </Stack>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};

export { BreadcrumbMenuLink };
