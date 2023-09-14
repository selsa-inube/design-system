import styled from "styled-components";
import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";
import { OptionListProps } from ".";

interface IStyledOptionListProps extends OptionListProps {
  theme?: Themed;
}
const StyledOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  background: ${({ theme }: IStyledOptionListProps) => {
    return (
      theme?.color?.surface?.light?.clear || inube.color.surface.light.clear
    );
  }};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export { StyledOptionList };
