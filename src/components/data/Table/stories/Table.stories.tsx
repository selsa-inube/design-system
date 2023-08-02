import { Table, ITableProps } from "../index";

import { titlesMuck, actionsMuck, breakPointsMuck } from "./mucks";

import {
  parameters,
  id,
  titles,
  actions,
  entries,
  breakpoints,
  filter,
  pageLength,
  infoTitle,
  actionsTitle,
} from "./props";

const story = {
  title: "data/Table",
  component: [Table],
  parameters,
};

const Default = (args: ITableProps) => <Table {...args} />;
Default.args = {
  id: "tableId",
  titles: titlesMuck,
  actions: actionsMuck,
  entries: [
    {
      id: "11",
      username: "David Leonardo Garzón",
      code: "LGARZON",
      userID: "1256545",
      position: "Credit Analyst",
    },
    {
      id: "12",
      username: "Angie Pinilla",
      code: "APINILLA",
      userID: "789654",
      position: "Adviser",
    },
    {
      id: "13",
      username: "Cristian Rojas",
      code: "CROJAS",
      userID: "258963",
      position: "Credit Analyst",
    },
    {
      id: "14",
      username: "Johan Nova",
      code: "JNOVA",
      userID: "589647",
      position: "Adviser",
    },
  ],
  filter: "",
  pageLength: 10,
  breakpoints: breakPointsMuck,
  modalTitle: "Form",
  infoTitle: "Information",
  actionsTitle: "Actions",
};

Default.argTypes = {
  id,
  titles,
  actions,
  entries,
  breakpoints,
  filter,
  pageLength,
  infoTitle,
  actionsTitle,
};

export default story;
export { Default };
