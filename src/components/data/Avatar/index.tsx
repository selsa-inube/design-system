import { IAvatarProps } from "./interfaces/Avatar.interface";
import { MdPersonOutline } from "react-icons/md";

import { StyledAvatar } from "./styles";
//prueba
export const defaultIcon = <MdPersonOutline />;

const Avatar = (props: IAvatarProps) => {
  const { icon = defaultIcon } = props;

  return <StyledAvatar>{icon}</StyledAvatar>;
};

export { Avatar };
