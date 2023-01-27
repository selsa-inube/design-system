import React, { useState } from "react";
import { Spinner } from ".";

import styled from "styled-components";

const sizes = ["large", "medium", "small"];
const tokensSpinner = [
  "primary",
  "secondary",
  "confirm",
  "warning",
  "remove",
  "help",
];

const StyledFlexDirection = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px dotted;
`;

const StyledFlexSizes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 57px;
`;

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

const StyledTitle = styled.h3`
  color: #556580;
`;

/**
 * This button is in use for now, it'll be changed as soon as the button-component
 * be refactored in order to receive the the necessary properties
 */
const StyledButton = styled.button`
  max-width: 120px;
  margin-left: 80px;
  appearance: none;
  backface-visibility: hidden;
  background-color: ${(props) =>
    props.progressValue === 100 ? "#00875A" : "#4c9aff"};
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Roboto, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:hover {
    background-color: #5243aa;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }

  &:active {
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  &:hover {
    box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
  }
`;

const story = {
  title: "Spinners",
  components: [Spinner],
};

export const Standard = (args) => <Spinner {...args} />;
Standard.args = {
  size: "large",
  colorToken: "primary",
  thickness: "3",
  classes: {
    animation: "rotate 1.4s linear infinite",
  },
};

export const Sizes = () => (
  <StyledFlexDirection>
    {tokensSpinner.map((token) => (
      <div key={token}>
        <StyledTitle>{token}</StyledTitle>
        {sizes.map((size) => (
          <StyledFlexSizes key={size}>
            <Spinner colorToken={token} size={size} />
          </StyledFlexSizes>
        ))}
      </div>
    ))}
  </StyledFlexDirection>
);

export const ProgressIndicator = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [disabled, setDisabled] = useState(0);

  const handleClick = async () => {
    setDisabled(true);
    for (let i = 0; i <= 100; i++) {
      setProgressValue(i);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  };

  return (
    <StyledFlexColumn>
      <Spinner
        colorToken={progressValue === 100 ? "confirm" : "primary"}
        size="large"
        thickness="2"
        progressValue={progressValue}
      />
      <StyledButton
        progressValue={progressValue}
        disabled={progressValue === 100 ? false : disabled}
        onClick={handleClick}
      >
        {progressValue === 100 ? "success" : "Start Progress"}
      </StyledButton>
    </StyledFlexColumn>
  );
};

export default story;
