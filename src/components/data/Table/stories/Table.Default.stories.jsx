import { Table } from "../index";

import { titlesMuck, actionsMuck, breakPointsMuck } from "./mucks";

import {
  parameters,
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
  title: "data/Table/Default",
  component: [Table],
  parameters,
};

const Default = (args) => <Table {...args} />;
Default.args = {
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
  modalTitle: "Formulario",
  infoTitle: "Informacion",
  actionsTitle: "Acciones",
};

Default.argTypes = {
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
