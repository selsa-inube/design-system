import { IUserProps } from "./interfaces/User.interface";
import { sizes } from "./types/User.Size.type";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Stack } from "../../layouts/Stack";
import { spacing } from "@src/shared/tokens/spacing/spacing";

const defaultSize = "large";

const User = (props: IUserProps) => {
  const { userName, businessUnit, size = defaultSize } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <Stack justifyContent="flex-start" alignItems="center" gap={spacing.s200}>
      {transformedSize === "large" && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap={spacing.s050}
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
