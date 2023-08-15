import { useState } from "react";
import { Switch, ISwitchProps } from "..";

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
