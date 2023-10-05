import { useState } from "react";
import { Tab, ITabProps } from "../index";

const TabController = (props: ITabProps) => {
  const { disabled = false } = props;

  const [isSelected, setIsSelected] = useState(false);

  const handleTabClick = () => {
    if (!disabled) {
      setIsSelected(true);
    }
  };

  return (
    <div onClick={handleTabClick}>
      <Tab {...props} selected={isSelected} />
    </div>
  );
};

export { TabController };
