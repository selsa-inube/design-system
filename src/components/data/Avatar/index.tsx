import { IAvatarProps } from "./interfaces/Avatar.interface";

import { Icon } from "../../../components/inputs/Icon";

const Avatar = (props: IAvatarProps) => {
  const { icon } = props;

  return (
    <Icon appearance="primary" variant="filled" shape="circle">
      {icon}
    </Icon>
  );
};

export { Avatar };
