import { Themed } from "@shared/types/types";
import styled from "styled-components";
import { ISectionMessageProps } from ".";
import { inube } from "@shared/tokens";

interface IStyledSectionMessageProps extends ISectionMessageProps {
  theme: Themed;
}

const StyledSectionMessage = styled.div`
  background-color: ${({ theme, appearance }: IStyledSectionMessageProps) => {
    return (
      theme?.color?.surface?.[appearance!]?.clear ||
      inube.color.surface[appearance!].clear
    );
  }};
  width: ${(props: IStyledSectionMessageProps) =>
    props.isMessageResponsive ? "auto" : "400px"};
  right: ${(props: IStyledSectionMessageProps) =>
    props.isMessageResponsive ? "16px" : "64px"};
  bottom: ${(props: IStyledSectionMessageProps) =>
    props.isMessageResponsive ? "16px" : "32px"};
  left: ${(props: IStyledSectionMessageProps) =>
    props.isMessageResponsive ? "16px" : "auto"};
  height: auto;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  & > div:first-child {
    padding: 16px;
  }
`;

export { StyledSectionMessage };
