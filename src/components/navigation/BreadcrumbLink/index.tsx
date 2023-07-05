import { Text } from "../../data/Text";
import { IBreadcrumbLinkProps } from "./interfaces/BreadcrumbLink.interface";
import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";
import { Typos, typos } from "./types/BreadcrumbLink.typos.type";

const defaultTypo: Typos = "labelLarge";
const defaultIsActive: boolean = false;

const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const {
    isActive = defaultIsActive,
    label,
    path,
    id,
    typo = defaultTypo,
    handleClick,
  } = props;

  const transformedTypos: Typos = typos.includes(typo) ? typo : defaultTypo;
  const transformedIsActive: boolean =
    typeof isActive === "boolean" ? isActive : defaultIsActive;

  return (
    <StyledContainerLink id={id} onClick={handleClick}>
      <Text typo={transformedTypos} appearance="secondary">
        <StyledBreadcrumbLink to={path} data-is-active={transformedIsActive}>
          {label}
        </StyledBreadcrumbLink>
      </Text>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
