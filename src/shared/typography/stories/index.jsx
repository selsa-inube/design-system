import { typography } from "../typography";
import { StyledRole, StyledItems, StyledContainer } from "./styles";

/**
 * RoleExample component is used to display a stylized typography with a role and a text
 * @param {*} props
 * @param {string} props.role - The role to be displayed
 * @returns
 */
const RoleExample = (props) => {
  const { role } = props;

  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}`,
    "line-height": `${typography.sys.typescale[role].lineHeight}`,
    "font-size": `${typography.sys.typescale[role].size}`,
    "letter-spacing": `${typography.sys.typescale[role].tracking}`,
    "font-weight": `${typography.sys.typescale[role].weight}`,
  };

  return (
    <StyledContainer>
      {Object.entries(typographyStory).map(([key, value]) => (
        <StyledRole key={key} role={"BodyLarge"}>
          {`${key}: ${value}`}
        </StyledRole>
      ))}
    </StyledContainer>
  );
};

/**
 * The component is used to display typography, in a stylized form
 * @param {*} props {Role}
 * @param {string} props.role - The role to be displayed
 * @returns
 */
const Role = (props) => {
  const { role } = props;
  return (
    <>
      <StyledRole role={role}>{role}</StyledRole>
      <RoleExample role={role} />
    </>
  );
};

/**
 * The RoleList component is used to display a list of roles with type tokens.
 * @returns
 */
const RoleList = () => {
  const roleNames = Object.keys(typography.sys.typescale);
  return (
    <ul>
      {roleNames.map((roleName) => (
        <StyledItems key={roleName}>
          <Role role={roleName} />
        </StyledItems>
      ))}
    </ul>
  );
};

export { RoleList };
