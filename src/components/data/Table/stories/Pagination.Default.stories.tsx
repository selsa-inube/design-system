import { Pagination } from "../Pagination";
import { ITableProps } from "../interfaces/Table.interface";
import { PaginationController } from "./PaginationController";

const story = {
  title: "data/Table/Pagination",
  component: [Pagination],
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

const Default = (args: ITableProps) => <PaginationController {...args} />;

Default.args = {
  entries: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  pageLength: 5,
};

export default story;

export { Default };
