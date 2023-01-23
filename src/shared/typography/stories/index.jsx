import { typography } from "../typography";
import { StyledRole, StyledList, StyledContainer } from "./styles";

/**
 * RoleLorem component is used to display a stylized typography with a role and a text
 * @param {*} props
 * @param {string} props.role - The role to be displayed
 * @returns
 */
const RoleLorem = (props) => {
  const { role } = props;

  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}, sans-serif`,
    "line-height": `${typography.sys.typescale[role].lineHeight}`,
    "font-size": `${typography.sys.typescale[role].size}`,
    "letter-spacing": `${typography.sys.typescale[role].tracking}`,
    "font-weight": `${typography.sys.typescale[role].weight}`,
  };

  return (
    <StyledContainer>
      <div>
        {Object.entries(typographyStory).map(([key, value]) => (
          <StyledRole role={role}>{`${key}: ${value}`}</StyledRole>
        ))}
      </div>
      <div>
        <StyledRole role={role}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          minus neque doloremque accusamus odit id, animi hic beatae minima,
          quidem! Cupiditate.
        </StyledRole>
      </div>
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
      <RoleLorem role={role} />
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
        <StyledList aria-label={roleName}>
          <Role role={roleName} />
          <hr />
        </StyledList>
      ))}
    </ul>
  );
};

export { RoleList };
