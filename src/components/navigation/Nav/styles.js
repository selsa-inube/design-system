import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;

  background-color: ${colors.ref.palette.neutral.n10};
  border-right: 1px solid ${colors.ref.palette.neutral.n40};
`;

const StyledFooter = styled.footer`
  & p {
    color: ${colors.ref.palette.neutral.n60};
    padding: 24px;
    margin: 0px;
  }

  position: absolute;
  bottom: 0;
  width: 100%;
`;

const SeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 0 16px;
  height: 1px;
  background-color: ${colors.ref.palette.neutral.n40};
`;

export { StyledNav, StyledFooter, SeparatorLine };
