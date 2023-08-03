import { Stack } from "@layouts/Stack";
import { StyledBlanket } from "./styles";
import { useMediaQuery } from "@src/hooks/useMediaQuery";

export interface BlanketProps {
  children?: React.ReactNode;
}

const Blanket = (props: BlanketProps) => {
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
