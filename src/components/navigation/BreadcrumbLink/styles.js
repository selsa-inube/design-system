import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledBreadcrumbLink = styled.div`
  & a {
    text-decoration: none;
    color: ${(props) =>
      props.isActive ? colors.sys.text.dark : colors.sys.text.secondary};
    &:hover {
      color: ${colors.sys.text.secondary};
      text-decoration: underline;
      text-decoration-color: ${colors.sys.actions.secondary.stroke};
    }
  }
`;

export { StyledBreadcrumbLink };
