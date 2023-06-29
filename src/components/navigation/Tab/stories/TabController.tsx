import { useState, useEffect } from "react";
import { TabProps } from "../interfaces/interface.Tab";
import { Tab } from "../index";

const TabController = (props: TabProps) => {
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
