import React, { useState } from "react";
import { Button } from "../index";
import { BrowserRouter } from "react-router-dom";

const ButtonController = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("handleClick: ", count);
  };

  return (
    <BrowserRouter>
      <Button {...props} handleClick={handleClick} />
    </BrowserRouter>
  );
};

export { ButtonController };
