import styled from "styled-components";
import { Themed } from "@shared/types/types";
import { colors } from "@shared/colors/colors";
import { IHeaderProps } from ".";
import { inube } from "@src/shared/tokens";

interface IStyledHeaderProps extends IHeaderProps {
  theme?: Themed;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 3px 1px ${colors.ref.palette.neutral.n40},
    0px 1px 2px 0px ${colors.ref.palette.neutral.n10};

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
`;

export { StyledHeader };
