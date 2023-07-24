import { IUserProps } from "./interfaces/User.interface";
import { sizes } from "./types/User.Size.type";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Stack } from "../../layouts/Stack";

import { MdPersonOutline } from "react-icons/md";

const defaultSize = "large";

const User = (props: IUserProps) => {
  const { userName, businessUnit, size = defaultSize } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <Stack justifyContent="flex-start" alignItems="center" gap="16px">
      {transformedSize === "large" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="4px"
        >
          <Text id="userName" as="span" appearance="dark" typo="labelMedium">
            {userName}
          </Text>
          <Text
            id="businessUnit"
            as="span"
            appearance="secondary"
            typo="bodySmall"
          >
            {businessUnit}
          </Text>
        </Stack>
      )}
      <Avatar icon={<MdPersonOutline />} />
    </Stack>
  );
};

export { User };
