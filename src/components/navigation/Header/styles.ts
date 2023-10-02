import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { IHeaderProps } from ".";
import { inube } from "@src/shared/tokens";

interface IStyledHeaderProps extends IHeaderProps {
  theme?: Themed;
}

const StyledHeader = styled.header`
  & > div {
    box-shadow: 0px 1px 3px 1px
        ${({ theme }: IStyledHeaderProps) =>
          theme?.color?.stroke?.divider?.regular ||
          inube.color.stroke.divider.regular},
      0px 1px 2px 0px
        ${({ theme }: IStyledHeaderProps) =>
          theme?.color?.surface.light.disabled ||
          inube.color.surface.light.disabled};

    & > div > div {
      position: unset;
      display: flex;
      align-items: center;
    }

    & > div:first-child {
      padding-left: ${inube.spacing.s150};
    }
    & > div:last-child {
      padding: ${inube.spacing.s100} ${inube.spacing.s200};
      border-left: 1px solid
        ${({ theme }: IStyledHeaderProps) =>
          theme?.color?.stroke?.divider?.regular ||
          inube.color.stroke.divider.regular};
    }
  }
`;

export { StyledHeader };
