import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";

const StyledContDropMenu = styled.div`
  width: fit-content;
  & > svg {
    cursor: pointer;
  }
`;

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
  padding: 32px 24px 16px 16px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const StyledContainerNavLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
`;

const StyledSeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 16px 16px 16px;
  height: 1px;
  background-color: ${colors.ref.palette.neutral.n40};
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

const StyledContainertitleSection = styled.div`
  width: 100%;
  height: 52px;

  & > Text:not(:first-child) {
    margin-top: 16px;
  }
`;

export {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledCloseMenu,
  StyledContainertitleSection,
  StyledSeparatorLine,
  StyledFooter,
};
