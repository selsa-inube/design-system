import React, { useCallback, useState, useEffect } from "react";
import { StyledBlanket } from "./Blanketstyles";

const BlanketComponent = (props, child) => {
  const { AllowClickOut } = props;
  const [usBlanketVisible, setUsBlanketVisible] = useState(false);
  const [usAllowClickOut, setUsAllowClickOut] = useState(AllowClickOut);

  useEffect(() => {
    setUsBlanketVisible(AllowClickOut);
  }, [AllowClickOut]);

  const showBlanketComponent = useCallback(() => {
    setUsBlanketVisible(true);
    setUsAllowClickOut(false);
  }, []);

  const onClickBlanket = useCallback(() => {
    setUsBlanketVisible(false);
    setUsAllowClickOut(true);
  }, []);

  return (
    <>
      <button onClick={showBlanketComponent}>
        {!usBlanketVisible ? "Show Blanket" : "Hide Blanket"}
      </button>
      <StyledBlanket
        as="button"
        AllowClickOut={false}
        style={{
          display: usBlanketVisible ? "block" : "none",
          pointerEvents: usAllowClickOut ? "none" : "auto",
        }}
        onClick={AllowClickOut ? onClickBlanket : null}
      />
    </>
  );
};

export default BlanketComponent;
