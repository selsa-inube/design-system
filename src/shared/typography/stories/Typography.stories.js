import { typography } from "../typography";

import { Typography } from ".";

/**
 * history of typography tokens (system and reference)
 */
const story = {
  title: "shared/Typography",
  components: [typography],
};

/**
 * renders a <typography> component.
 * @returns the <typography> element, the component calls and renders another component called Typography()
 */
const TokensTypography = () => <Typography />;

export default story;
export { TokensTypography };
