import { AvatarProps } from "./interfaces/interface.Avatar";
import { MdPersonOutline } from "react-icons/md";

import { StyledAvatar } from "./styles";

export const defaultIcon = <MdPersonOutline />;

const Avatar = (props: AvatarProps) => {
  const { icon = defaultIcon } = props;

  return <StyledAvatar>{icon}</StyledAvatar>;
};

export { Avatar };
