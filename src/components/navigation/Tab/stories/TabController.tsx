import { useState, useEffect } from "react";
import { Tab, ITabProps } from "../index";

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

  return <Tab {...props} isSelected={tabSelected} onClick={handleClickTab} />;
};

export { TabController };
