import { useState, useEffect } from "react";
import { ITabProps } from "../interfaces/Tab.interface";
import { Tab } from "../index";

const TabController = (props: ITabProps) => {
  const { isDisabled = false } = props;
  const [tabSelected, setTabSelected] = useState(false);

  useEffect(() => {
    if (isDisabled) {
      setTabSelected(false);
    }
  }, [isDisabled]);

  const handleClickTab = () => {
    if (!isDisabled) {
      setTabSelected(true);
    }
  };

  return (
    <Tab {...props} isSelected={tabSelected} handleClick={handleClickTab} />
  );
};

export { TabController };
