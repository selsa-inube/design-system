import { useState } from "react";
import { BlanketProps } from "../interfaces/interface.Blanket";

import { Button } from "@src/components/inputs/Button";

import { Blanket } from "../index";
import { StyledBackdropBlanket } from "./styles";

const story = {
  title: "utils/Blanket/Default",
  components: Blanket,
  parameters: {
    docs: {
      description: {
        component:
          "the Blanket is used when you want to render  a screen lock to interact with a component in the foreground",
      },
    },
  },
  argTypes: {
    children: {
      description:
        "property used to determine if the component is capable of hosting nodes **ReactElement**",
    },
  },
};

const Default = (args: BlanketProps) => {
  const [showBlanket, setShowBlanket] = useState(false);

  const handleShowBlanket = () => {
    setShowBlanket(true);
  };

  return (
    <>
      <Button handleClick={handleShowBlanket}>Show Blanket</Button>
      {showBlanket && (
        <Blanket {...args}>
          <StyledBackdropBlanket onClick={() => setShowBlanket(false)} />
        </Blanket>
      )}
    </>
  );
};

export default story;
export { Default };
