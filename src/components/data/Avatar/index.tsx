import { IAvatarProps } from "./interfaces/Avatar.interface";

import { Icon } from "../Icon";
import { MdPersonOutline } from "react-icons/md";

export const defaultIcon = <MdPersonOutline />;
const Avatar = (props: IAvatarProps) => {
  const { icon = defaultIcon } = props;

  return (
    <Icon
      appearance="primary"
      variant="filled"
      shape="circle"
      icon={icon}
      spacing="wide"
      size="20px"
    />
  );
};

export { Avatar };
