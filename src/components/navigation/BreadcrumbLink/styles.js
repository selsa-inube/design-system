import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledLink = styled.a`
  color: ${(props) =>
    props.isActive ? colors.sys.text.dark : colors.sys.text.secondary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { StyledLink };
