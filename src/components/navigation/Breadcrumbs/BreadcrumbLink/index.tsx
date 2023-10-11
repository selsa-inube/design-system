import { Text } from "@data/Text";
import { Typos } from "./props";
import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";

export interface IBreadcrumbLinkProps {
  label: string;
  path: string;
  id: string;
  typo?: Typos;
  handleClick?: () => void;
}

const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const { label, path, id, typo = "large", handleClick } = props;

  return (
    <StyledContainerLink id={id} onClick={handleClick}>
      <Text type="label" size={typo} appearance="gray">
        <StyledBreadcrumbLink to={path}>{label}</StyledBreadcrumbLink>
      </Text>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
