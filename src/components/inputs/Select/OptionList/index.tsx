//import { OptionItem } from "@inputs/Select/OptionItem";

import { StyledOptionList } from "./styled";

export interface OptionListProps {
  children: JSX.Element[];
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionList = (props: OptionListProps) => {
  const { children, onClick } = props;

  const handleOptionClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onClick) onClick(e);
  };

  return (
    <StyledOptionList
      onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleOptionClick(e)}
    >
      {children}
    </StyledOptionList>
  );
};

export { OptionList };
