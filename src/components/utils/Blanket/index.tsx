import { useMediaQuery } from "@hooks/useMediaQuery";
import { Stack } from "@layouts/Stack";
import { StyledBlanket } from "./styles";
import { inube } from "@shared/tokens";

export type Themed = { theme?: typeof inube };
export interface IBlanketProps extends Themed {
  children?: React.ReactNode;
}

const Blanket = (props: IBlanketProps) => {
  const { children } = props;
  const isSmallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledBlanket isSmallScreen={!isSmallScreen}>
      <Stack alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </StyledBlanket>
  );
};

export { Blanket };
