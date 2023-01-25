import React, { useCallback, useState, useEffect } from "react";
import { StyledBlanket } from "./Blanketstyles";

/**
 * componente de "Blanket" que se utiliza para ocultar o mostrar una capa oscura en la pantalla
 * @param {*} props  {AllowClickOut} boolean enables clicks underneath the blanket
 * @param {*} child son component shown with him on top of the blanket
 * @returns
 */
const BlanketComponent = (props, child) => {
  const { AllowClickOut } = props;
  const [usBlanketVisible, setUsBlanketVisible] = useState(false);
  const [usAllowClickOut, setUsAllowClickOut] = useState(AllowClickOut);

  const getPointerEvents = (value) => (value ? "auto" : "none");

  useEffect(() => {
    setUsAllowClickOut(AllowClickOut);
  }, [AllowClickOut]);

  const showBlanketComponent = useCallback(() => {
    setUsBlanketVisible(true);
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
          pointerEvents: getPointerEvents(usAllowClickOut),
        }}
        onClick={usAllowClickOut ? onClickBlanket : null}
      />
    </>
  );
};

export default BlanketComponent;
