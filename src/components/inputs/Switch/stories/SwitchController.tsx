import { useState } from "react";
import { Switch, ISwitchProps } from "..";

const SwitchController = (
  props: ISwitchProps & {
    onSwitchChange?: any;
  }
) => {
  const { checked = false, onSwitchChange } = props;
  const [switchChecked, setSwitchChecked] = useState(checked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchChecked(e.target.checked);
    if (onSwitchChange) onSwitchChange(e.target.checked);
  };

  return <Switch {...props} checked={switchChecked} onChange={onChange} />;
};

export { SwitchController };
