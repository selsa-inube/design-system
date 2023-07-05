import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";
import { IBreadcrumbMenuLinkProps } from "./interfaces/BreadcrumbMenuLink.interface";
import { Typos, typos } from "./types/BreadcrumbMenuLink.typos.type";

const defaultTypo: Typos = "labelLarge";

const BreadcrumbMenuLink = (props: IBreadcrumbMenuLinkProps) => {
  const { label, path, id, typo = defaultTypo } = props;
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;
  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Text
            typo={transformedTypos}
            appearance="secondary"
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