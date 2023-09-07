import { Text } from "@data/Text";
import { Typos, typos } from "./props";
import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";

export interface IBreadcrumbLinkProps {
  isActive?: boolean;
  label: string;
  path: string;
  id: string;
  typo?: Typos;
  handleClick?: () => void;
}

const defaultTypo: Typos = "large";
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
      <Text type="label" size={transformedTypos} appearance="gray">
        <StyledBreadcrumbLink to={path} data-is-active={transformedIsActive}>
          {label}
        </StyledBreadcrumbLink>
      </Text>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
