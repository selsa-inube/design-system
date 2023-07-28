import { IUserProps } from "./interfaces/User.interface";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Stack } from "../../layouts/Stack";

const defaultSize = "large";

const User = (props: IUserProps) => {
  const { userName, businessUnit, size = defaultSize } = props;

  return (
    <Stack justifyContent="flex-start" alignItems="center" gap="16px">
      {size === "large" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="4px"
        >
          <Text
            id="userName"
            as="span"
            appearance="dark"
            type="label"
            size="medium"
          >
            {userName}
          </Text>
          <Text
            id="businessUnit"
            as="span"
            appearance="gray"
            type="body"
            size="small"
          >
            {businessUnit}
          </Text>
        </Stack>
      )}
      <Avatar />
    </Stack>
  );
};

export { User };
