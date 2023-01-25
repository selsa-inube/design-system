import React from "react";
import {
  StyledFlexField,
  StyledTitleCard,
  StyledContainer,
  StyledColor,
} from "./styles";
import { colors } from "../../colors";

/**
 * This function takes in two parameters, an object and a value,
 * and returns the key associated with the value.
 * If the value is an object, it will recursively search for the key within that object.
 * If no key is found, it will return null.
 * @param {*} obj
 * @param {*} value
 * @returns
 */
function getKeyByValue(obj, value) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        const result = getKeyByValue(obj[key], value);
        if (result) {
          return `${key}.${result}`;
        }
      } else if (obj[key] === value) {
        return key;
      }
    }
  }
  return null;
}

/**
 * This is a functional component that takes in a prop called "props"
 * which contains two properties, "tokens" and "name".
 * It returns an array of styled flex fields that contain three spans,
 * the first containing the string "sys.actions.",
 * the second containing the token name followed by a 1,
 * and the third containing a styled color with the name and token passed in as props.
 * @param {*} props
 * @returns
 */
const Field = (props) => {
  const { tokens, name } = props;
  return Object.entries(tokens).map(([token]) => (
    <StyledFlexField key={token}>
      <span>
        sys.{name}.{token}
      </span>
      <span>ref.{getKeyByValue(colors.ref, colors.sys[name][token])}</span>
      <span>
        <StyledColor name={name} token={token}>
          {colors.sys[name][token]}
        </StyledColor>
      </span>
    </StyledFlexField>
  ));
};

/**
 * This is a function called SystemReference which takes in an argument of dataColors.
 * It returns an array of objects that are mapped from the dataColors.colors.sys object.
 * The objects contain a StyledFlexBox, with a h1 tag inside,
 * containing the name of the object from the dataColors.colors.sys object, as well as
 * another StyledFlexBox and StyledContainer with a Field component inside, containing the name
 * and tokens from the dataColors.colors.sys object.
 * @param {*} dataColors
 * @returns
 */
const SystemReference = (dataColors) => {
  return Object.entries(dataColors.colors.sys).map(([name, systemTokens]) => (
    <div key={name}>
      <StyledTitleCard>
        <h1>{name}</h1>
      </StyledTitleCard>
      <StyledContainer>
        <Field name={name} tokens={systemTokens}></Field>
      </StyledContainer>
    </div>
  ));
};

export { SystemReference };
