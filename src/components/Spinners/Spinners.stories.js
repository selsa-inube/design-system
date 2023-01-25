import React from "react";
import { Spinner } from ".";

const sizes = ["large", "medium", "small"];
const tokensSpinner = [
  "primary",
  "secondary",
  "confirm",
  "warning",
  "remove",
  "help",
];

const story = {
  title: "Spinners",
  components: [Spinner],
  decorators: [
    (Story) => (
      <div style={{ margin: "1em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Sizes = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      border: "1px dotted",
    }}
  >
    {tokensSpinner.map((token) => (
      <div
        key={token}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3 style={{ color: "#556580" }}>{token}</h3>
        {sizes.map((size) => (
          <div
            key={size}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "57px",
            }}
          >
            <Spinner colorToken={token} size={size} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default story;
