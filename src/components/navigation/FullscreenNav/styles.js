import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledFullscreenNav = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${colors.ref.palette.neutral.n10};
  padding-left: 24px;
`;

const StyledCloseMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 32px 24px 16px;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledSeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 0 16px;
  height: 1px;
  background-color: ${colors.ref.palette.neutral.n10};
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

export {
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledSeparatorLine,
  StyledFooter,
};
