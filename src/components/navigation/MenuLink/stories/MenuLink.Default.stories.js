import { BrowserRouter } from "react-router-dom";
import MenuLink from "../MenuLink";
import { label } from "./props";

const story = {
  title: "navigation/MenuLink/Default",
  components: [MenuLink],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

const Default = (args) => <MenuLink {...args} />;

Default.args = {
  label: "Privileges",
};

export default story;

export { Default };
