import React, { useState, useEffect } from "react";
import { StyledBlanket, StyledButton } from "./Blanketstyles";

/**
 * componente de "Blanket" que se utiliza para ocultar o mostrar una capa oscura en la pantalla
 * @param {*} props  {AllowClickOut} boolean enables clicks underneath the blanket
 * @returns
 */
const BlanketComponent = (props, { children }) => {
  const { allowClickOut, onVisible } = props;
  const [usBlanketVisible, setUsBlanketVisible] = useState(onVisible);
  const [usAllowClickOut, setUsAllowClickOut] = useState(allowClickOut);

  const getPointerEvents = (value) => (value ? "auto" : "none");

  useEffect(() => {
    setUsAllowClickOut(allowClickOut);
    setUsBlanketVisible(onVisible);
  }, [allowClickOut, onVisible]);

  const showBlanketComponent = () => {
    setUsBlanketVisible(true);
  };

  const onClickBlanket = () => {
    setUsBlanketVisible(false);
    setUsAllowClickOut(true);
  };

  const stylesOnClick = {
    display: usBlanketVisible ? "block" : "none",
    pointerEvents: getPointerEvents(usAllowClickOut),
  };
  return (
    <>
      <StyledButton onClick={showBlanketComponent}>
        {!usBlanketVisible ? "Show Blanket" : "Hide Blanket"}
      </StyledButton>
      <StyledBlanket
        style={stylesOnClick}
        onClick={usAllowClickOut ? onClickBlanket : null}
      >
        <div>{children}</div>
      </StyledBlanket>
    </>
  );
};

export default BlanketComponent;
