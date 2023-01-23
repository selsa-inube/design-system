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

  return (
    <StyledContainer>
      <StyledRole role={role}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum
        assumenda dolor deleniti beatae rerum consequuntur
      </StyledRole>
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
