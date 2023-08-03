import styled from "styled-components";
import { colors } from "@shared/colors/colors";

const StyledNav = styled.div`
  box-sizing: border-box;
  width: 248px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
