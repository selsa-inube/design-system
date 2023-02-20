import React, { useState } from "react";
import { Switch } from "../index";

const SwitchController = (props) => {
  const { checked = false, handleChange } = props;
  const [switchChecked, setSwitchChecked] = useState(checked);

  const handleToggle = () => {
    setSwitchChecked(!switchChecked);
    handleChange(!switchChecked);
    console.log("handleToggle: ", !switchChecked);
  };

  return (
    <Switch {...props} checked={switchChecked} handleChange={handleToggle} />
  );
};

export { SwitchController };
