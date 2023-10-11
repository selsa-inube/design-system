import styled from "styled-components";
import { Link } from "react-router-dom";
import { Themed } from "@shared/types/types";
import { colors } from "@shared/colors/colors";
import { inube } from "@shared/tokens";
import { IBreadcrumbLinkProps } from "./index";

interface IStyledBreadcrumbLinkProps extends IBreadcrumbLinkProps {
  themed: Themed;
}

const StyledContainerLink = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${(props: { [x: string]: IBreadcrumbLinkProps }) =>
    props["data-is-active"] ? colors.sys.text.dark : colors.sys.text.secondary};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ themed }: IStyledBreadcrumbLinkProps) =>
      themed?.color?.text?.gray?.regular || inube.color.text.gray.regular};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
