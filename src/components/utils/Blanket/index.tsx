import { Stack } from "@src/components/layouts/Stack";
import { BlanketProps } from "./interfaces/interface.Blanket";
import { StyledBlanket } from "./styles";

const Blanket = (props: BlanketProps) => {
  const { children } = props;
  return (
    <StyledBlanket>
      <Stack alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </StyledBlanket>
  );
};

export { Blanket };
