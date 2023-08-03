import { Avatar } from "@data/Avatar";
import { Text } from "@data/Text";
import { Stack } from "@layouts/Stack";
import { spacing } from "@src/shared/tokens/spacing/spacing";
import { Size } from "./props";

export interface IUserProps {
  userName: string;
  client: string;
  size: Size;
}

const defaultSize = "large";

const User = (props: IUserProps) => {
  const { userName, client, size = defaultSize } = props;

  return (
    <Stack justifyContent="flex-start" alignItems="center" gap={spacing.s200}>
      {size === "large" && (
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
          {client && (
            <Text
              id="businessUnit"
              as="span"
              appearance="gray"
              type="body"
              size="small"
            >
              {client}
            </Text>
          )}
        </Stack>
      )}
      <Avatar />
    </Stack>
  );
};

export { User };
