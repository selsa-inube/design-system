import { StyledSquare } from "./stories.styles";

const Squares = (props: any) => {
  const { item } = props;

  return <StyledSquare>{item}</StyledSquare>;
};

export { Squares };
