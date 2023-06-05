import React from "react";
import { PaginationController } from "./PaginationController";
import { Pagination } from "../Pagination";

const story = {
  title: "data/Table/Paginations",
  components: [Pagination],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Paginations = (args) => <PaginationController {...args} />;
Paginations.args = {
  entries: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  pageLength: 5,
};

export default story;
