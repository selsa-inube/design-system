import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledContDropMenu = styled.div`
  position: absolute;
  width: fit-content;
  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const StyledFullscreenNav = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.ref.palette.neutral.n10};
  padding: 0px 16px;
  z-index: 2;

  & > div:nth-child(2) {
    & > div:nth-child(n + 2) {
      margin-top: 28px;
    }
  }
`;

const StyledCloseMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 32px 24px 16px 16px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const StyledSeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 16px 16px 16px;
  height: 1px;
  background-color: ${colors.ref.palette.neutral.n40};
`;

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

export {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledSeparatorLine,
  StyledFooter,
};
