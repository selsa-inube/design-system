import { Stack } from "@src/components/layouts/Stack";
import { BlanketProps } from "./interfaces/interface.Blanket";
import { StyledBlanket } from "./styles";
import { useMediaQuery } from "@src/hooks/useMediaQuery";

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
