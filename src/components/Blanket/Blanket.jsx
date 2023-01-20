import React, { useCallback, useState } from "react";
import { StyledBlanket } from "./Blanketstyles";

const BlanketComponent = ({ props, child }) => {
  //[allowClickBelow,] = props
  const [usBlanketVisible, setUsBlanketVisible] = useState(false);

  const showBlanketComponent = useCallback(() => {
    setUsBlanketVisible((usBlanketVisible) => !usBlanketVisible);
  }, [setUsBlanketVisible]);

  return (
    <>
      <button onClick={showBlanketComponent}>
        {!usBlanketVisible ? "Show Blanket" : "Hide Blanket"}
      </button>
      <StyledBlanket
        as="button"
        onClick={showBlanketComponent}
        style={{ display: usBlanketVisible ? "block" : "none" }}
      >
        {child}
      </StyledBlanket>
    </>
  );
};

export default BlanketComponent;
