import { RoleList } from ".";

/**
 * history of typography tokens (system and reference)
 */
const story = {
  title: "shared/Typography",
  components: [RoleList],
};

/**
 * renders a <typography> component.
 * @returns the <typography> element, the component calls and renders another component called Typography()
 */
const Roles = () => <RoleList />;

export default story;
export { Roles };
