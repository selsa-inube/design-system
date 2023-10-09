import styled from "styled-components";
import { colors } from "@shared/colors/colors";

const StyledNav = styled.div`
  height: 100%;
  width: 248px;
  box-sizing: border-box;
  background-color: ${colors.ref.palette.neutral.n10};
  border-right: 1px solid ${colors.ref.palette.neutral.n40};
`;

const StyledFooter = styled.footer`
  width: 100%;
`;

const SeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 8px 16px;
  height: 1px;
  padding: 0.5px 0px;
  background-color: ${colors.ref.palette.neutral.n40};
`;

export { StyledNav, StyledFooter, SeparatorLine };
