import React from "react";
import { typography } from "../typography";
import { StyledRole } from "./styles";

/**
 * The Typography function is a React component that is responsible for displaying a list of all the properties and values of the typography object.
 * @returns cards with token information
 */

const Role = (props) => {
  const { role } = props;
  return <StyledRole role={role}>{role}</StyledRole>;
};

const RoleList = () => {
  const roleNames = Object.keys(typography.sys.typescale);

  return (
    <ul>
      {roleNames.map((roleName) => (
        <li>
          <Role role={roleName} />
        </li>
      ))}
    </ul>
  );
};

// const Typography = () => {
//   const createList = (obj, parentKey) => {
//     console.log(Object.entries(obj));

//     return Object.entries(obj).map(([key, value], index) => {
//       const currentKey = parentKey ? `${parentKey}.${key}` : key;
//       if (typeof value === "object") {
//         return createList(value, currentKey);
//       }
//       return (
//         <StyledContainer>
//           <StyledDiv>
//             <StyledP key={currentKey}>{`${currentKey}: ${value}`}</StyledP>
//           </StyledDiv>
//         </StyledContainer>
//       );
//     });
//   };
//   return <StyledContainer>{createList(typography)}</StyledContainer>;
// };

export { RoleList };
