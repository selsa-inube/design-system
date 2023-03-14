import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { StyledUser, StyledCard } from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "large";

const User = (props) => {
  const { userName, businessUnit, size = defaultSize } = props;
  const transformedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <StyledUser size={transformedSize}>
      <StyledCard>
        <Text id="userName" as="span" appearance={"dark"} typo={"labelMedium"}>
          {userName}
        </Text>
        <Text
          id="businessUnit"
          as="span"
          appearance={"secondary"}
          typo={"bodySmall"}
        >
          {businessUnit}
        </Text>
      </StyledCard>
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
