import styled from "styled-components";
import { inube } from "@src/shared/tokens";

const StyledContDropMenu = styled.div`
  position: absolute;
  width: fit-content;
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
  background-color: ${inube.color.surface.nav.regular};
  padding: 0px 16px;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const StyledSeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 16px 16px 16px;
  height: 1px;
  background-color: ${inube.color.stroke.divider.regular};
`;

const StyledFooter = styled.footer`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

const StyledDetails = styled.details`
  width: 100%;
  margin: ${inube.spacing.s0} ${inube.spacing.s300};
  list-style: none;
`;

const StyledSummary = styled.summary`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    background-color: ${inube.color.surface.navLink.hover};
  }
`;

export {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledSeparatorLine,
  StyledDetails,
  StyledSummary,
  StyledFooter,
};
