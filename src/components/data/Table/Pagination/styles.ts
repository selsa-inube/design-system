import styled from "styled-components";
import { IPaginationProps } from ".";
import { Themed } from "@shared/types/types";
import { inube } from "@shared/tokens";

interface IStyledPaginationProps extends IPaginationProps {
  theme?: Themed;
}

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }: IStyledPaginationProps) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  border: none;
  border-radius: 5px;
  padding: ${({ theme }: IStyledPaginationProps) =>
    `${theme?.spacing?.s050 || inube.spacing.s050}`};
  width: ${({ theme }: IStyledPaginationProps) =>
    `${theme?.spacing?.s300 || inube.spacing.s300}`};
  height: ${({ theme }: IStyledPaginationProps) =>
    `${theme?.spacing?.s300 || inube.spacing.s300}`};

  &:hover {
    background-color: ${({ theme }: IStyledPaginationProps) =>
      theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  }

  & svg {
    width: ${({ theme }: IStyledPaginationProps) =>
      `${theme?.spacing?.s200 || inube.spacing.s200}`};
    height: ${({ theme }: IStyledPaginationProps) =>
      `${theme?.spacing?.s200 || inube.spacing.s200}`};
    color: ${({ theme }: IStyledPaginationProps) =>
      theme?.color?.stroke?.dark?.regular || inube.color.stroke.dark.regular};
  }

  & svg:hover {
    color: ${({ theme }: IStyledPaginationProps) =>
      theme?.color?.stroke?.information?.regular ||
      inube.color.stroke.information.regular};
  }
`;

export { StyledButton };
