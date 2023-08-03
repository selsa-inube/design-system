import styled from "styled-components";
import { colors } from "@shared/colors/colors";
import { Link } from "react-router-dom";
import { IBreadcrumbLinkProps } from "./index";

const StyledContainerLink = styled.li`
  display: inline-block;
`;

const StyledBreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: ${(props: { [x: string]: IBreadcrumbLinkProps }) =>
    props["data-is-active"] ? colors.sys.text.dark : colors.sys.text.secondary};
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${colors.sys.actions.secondary.stroke};
  }
`;

export { StyledContainerLink, StyledBreadcrumbLink };
