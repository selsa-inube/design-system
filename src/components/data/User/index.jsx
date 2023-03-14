import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Stack } from "../../layouts/Stack";

import { StyledUser } from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "large";

const User = (props) => {
  const { userName, businessUnit, size = defaultSize } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <StyledUser size={transformedSize}>
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
      {transformedSize === "large" && <Avatar />}
    </StyledUser>
  );
};

User.propTypes = {
  userName: PropTypes.string.isRequired,
  businessUnit: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes),
};

export { User };
