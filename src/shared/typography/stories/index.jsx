import { typography } from "../typography";
import {
  StyledRole,
  StyledItems,
  StyledContainer,
  StyledTextP,
} from "./styles";

const roleNames = Object.keys(typography.sys.typescale);

const RoleProperties = (props) => {
  const { role } = props;

  const typographyStory = {
    "font-family": `${typography.ref.typeface.brand}`,
    "line-height": `${typography.sys.typescale[role].lineHeight}`,
    "font-size": `${typography.sys.typescale[role].size}`,
    "letter-spacing": `${typography.sys.typescale[role].tracking}`,
    "font-weight": `${typography.sys.typescale[role].weight}`,
  };

  const assignationRole = Object.entries(typographyStory);
  return (
    <section>
      {assignationRole.map(([key, value]) => (
        <StyledRole key={key} role={"bodyLarge"}>
          {key}: {value}
        </StyledRole>
      ))}
    </section>
  );
};

const RoleExample = (props) => {
  const { roleName } = props;
  return (
    <StyledContainer>
      <StyledTextP role={roleName}>{roleName}</StyledTextP>
      <RoleProperties role={roleName} />
    </StyledContainer>
  );
};

const RoleList = () => {
  return (
    <ul>
      {roleNames.map((roleName) => (
        <StyledItems key={roleName}>
          <RoleExample roleName={roleName} />
        </StyledItems>
      ))}
    </ul>
  );
};

export { RoleList };
