import { MdPersonOutline } from "react-icons/md";
import { Icon } from "@data/Icon";

export interface IAvatarProps {
  icon?: React.ReactElement;
}

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
      size="24px"
    />
  );
};

export { Avatar };
