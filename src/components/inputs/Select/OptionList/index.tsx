import { StyledOptionList } from "./styled";

export interface OptionListProps {
  children: JSX.Element[];
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionList = (props: OptionListProps) => {
  const { children, onClick } = props;

  return <StyledOptionList onClick={onClick}>{children}</StyledOptionList>;
};

export { OptionList };
