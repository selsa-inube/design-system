import React from "react";
import { PaginationController } from "./PaginationController";
import { Pagination } from "../Pagination";

const story = {
  tile: "data/Table/Paginations",
  component: [Pagination],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Paginations = (args) => {
  return <PaginationController {...args} />;
};

Paginations.args = {
  entries: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  pageLength: 5,
};
export default story;
export { Paginations };
