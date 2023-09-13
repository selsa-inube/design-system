import styled, { keyframes } from "styled-components";
import { inube } from "@shared/tokens";
import { Themed } from "@src/shared/Types/types";
import { ISpinnerProps } from ".";

interface IStyledSpinnerProps extends ISpinnerProps {
  theme?: Themed;
}

const sizes = {
  large: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "32px",
    height: "32px",
  },
  small: {
    width: "24px",
    height: "24px",
  },
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  animation: 0.8s linear infinite ${spinner};
  border: solid 4px;
  border-color: ${({ transparent, theme }: IStyledSpinnerProps) =>
    transparent === true
      ? theme?.color?.stroke?.spinner?.transparent ||
        inube.color.stroke.spinner.transparent
      : theme?.color?.stroke?.spinner?.regular ||
        inube.color.stroke.spinner.regular};
  border-bottom-color: ${({ appearance, theme }: IStyledSpinnerProps) =>
    appearance &&
    (theme?.color?.stroke?.[appearance]?.regular ||
      inube?.color?.stroke?.[appearance]?.regular)};
  border-radius: 50%;
  ${(props: IStyledSpinnerProps) => props.size && sizes[props.size]}
  box-sizing: border-box;
`;

export { StyledSpinner };
