import React, { useState } from "react";
import { Button } from "../index";

const ButtonController = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("handleClick: ", count);
  };

  return <Button {...props} handleClick={handleClick} />;
};

export { ButtonController };
