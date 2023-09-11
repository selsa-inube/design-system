import { useState, useEffect } from "react";
import { Tab, ITabProps } from "../index";

const TabController = (props: ITabProps) => {
  const { disabled = false } = props;
  const [tabSelected, setTabSelected] = useState(false);

  useEffect(() => {
    if (disabled) {
      setTabSelected(false);
    }
  }, [disabled]);

  const onClickTab = () => {
    if (!disabled) {
      setTabSelected(true);
    }
  };

  return <Tab {...props} selected={tabSelected} onClick={onClickTab} />;
};

export { TabController };