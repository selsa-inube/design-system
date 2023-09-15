import styled from "styled-components";

import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
import { IOptionItemProps } from ".";

interface IStyledOptionItemProps extends IOptionItemProps {
  theme?: Themed;
}

const StyledOptionItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: ${inube.spacing.s500};
  cursor: pointer;
  border-left: ${inube.spacing.s050} solid transparent;
  padding: ${() =>
    `${inube.spacing.s050} ${inube.spacing.s200} ${inube.spacing.s050} ${inube.spacing.s150}`};

  p {
    color: ${({ theme }: IStyledOptionItemProps) =>
      theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
  }

  &:hover {
    border-left: ${inube.spacing.s050} solid
      ${({ theme }: IStyledOptionItemProps) =>
        theme?.color?.stroke?.primary?.regular ||
        inube.color.stroke.primary.regular};
    background-color: ${({ theme }: IStyledOptionItemProps) =>
      theme?.color?.surface?.gray?.hover || inube.color.surface.gray.hover};

    p {
      color: ${({ theme }: IStyledOptionItemProps) =>
        theme?.color?.text?.primary?.regular ||
        inube.color.text.primary.regular};
    }
  }
`;

export { StyledOptionItem };
