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
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const StyledDescriptionContainer = styled.div`
  white-space: normal;
  word-break: break-word;
`;

export { StyledSectionMessage, StyledDescriptionContainer };
