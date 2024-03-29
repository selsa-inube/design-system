import { useMediaQuery } from "@hooks/useMediaQuery";
import { Stack } from "@layouts/Stack";
import { StyledBlanket } from "./styles";

export interface IBlanketProps {
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
