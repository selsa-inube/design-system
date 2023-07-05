import { useState } from "react";
import { ISwitchProps } from "../interfaces/Switch.interface";
import { Switch } from "../index";

const SwitchController = (props: ISwitchProps) => {
  const { checked = false } = props;
  const [switchChecked, setSwitchChecked] = useState(checked);

  const handleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchChecked(e.target.checked);
  };

  return (
    <Switch {...props} checked={switchChecked} handleChange={handleChenge} />
  );
};

export { SwitchController };
