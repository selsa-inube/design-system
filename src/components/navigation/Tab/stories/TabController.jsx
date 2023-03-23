import React, { useState } from "react";
import { Tab } from "../index";

const TabController = (props) => {
  const { isSelected = false, handleClick } = props;
  const [tabSelected, setTabSelected] = useState(isSelected);

  const handleClickTab = () => {
    setTabSelected(!tabSelected);
    handleClick(!tabSelected);
  };

  return (
    <Tab {...props} isSelected={tabSelected} handleClick={handleClickTab} />
  );
};

export { TabController };
