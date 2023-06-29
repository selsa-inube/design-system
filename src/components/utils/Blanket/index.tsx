import { BlanketProps } from "./interfaces/interface.Blanket";
import { StyledBlanket } from "./styles";

const Blanket = (props: BlanketProps) => {
  const { children } = props;
  return <StyledBlanket>{children}</StyledBlanket>;
};

export { Blanket };
