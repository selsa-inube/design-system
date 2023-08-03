import { Stack } from "@layouts/Stack";
import { Text } from "@data/Text";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";
import { Typos, typos } from "./props";

export interface IBreadcrumbMenuLinkProps {
  label: string;
  path: string;
  id: string;
  typo?: Typos;
}

const defaultTypo: Typos = "large";

const BreadcrumbMenuLink = (props: IBreadcrumbMenuLinkProps) => {
  const { label, path, id, typo = defaultTypo } = props;
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;
  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Text
            type="label"
            size={transformedTypos}
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
