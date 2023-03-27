import React, { useState, useEffect } from "react";
import { Tab } from "../index";

const TabController = (props) => {
  const { isSelected = false, isDisabled = false } = props;
  const [tabSelected, setTabSelected] = useState(isSelected);

  useEffect(() => {
    if (isDisabled) {
      setTabSelected(false);
    }
  }, [isDisabled]);

  const handleClickTab = () => {
    if (!isDisabled) {
      setTabSelected(!tabSelected);
    }
  };

  return (
    <Tab {...props} isSelected={tabSelected} handleClick={handleClickTab} />
  );
};

export { TabController };
