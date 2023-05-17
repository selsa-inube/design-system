import React from "react";
import { Table } from "../index";
import { Switch } from "../../../inputs/Switch/index";

import { MdModeEdit, MdDelete } from "react-icons/md";
const story = {
  title: "data/Table/Default",
  component: [Table],
};

const titles = [
  {
    id: "username",
    titleName: "Username",
    priority: 1,
  },
  {
    id: "code",
    titleName: "Code",
    priority: 2,
  },
  {
    id: "userID",
    titleName: "User Id",
    priority: 0,
  },
  {
    id: "position",
    titleName: "Position",
    priority: 3,
  },
];

const actions = [
  {
    id: 1,
    actionName: "Activate",
    content: <Switch />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Edit",
    content: <MdModeEdit />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdDelete />,
    type: "remove",
  },
];

const breakPoints = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 980px)", totalColumns: 2 },
  { breakpoint: "(max-width: 850px)", totalColumns: 4 },
  { breakpoint: "(max-width: 680px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const entriesDefault = [
  {
    id: 11,
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    id: 12,
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",
  },
  {
    id: 13,
    username: "Cristian Rojas",
    code: "CROJAS",
    userID: "258963",
    position: "Credit Analyst",
  },
  {
    id: 14,
    username: "Johan Nova",
    code: "JNOVA",
    userID: "589647",
    position: "Adviser",
  },
];

const entriesPagination = [
  {
    id: 11,
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    id: 12,
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",
  },
  {
    id: 13,
    username: "Cristian Rojas",
    code: "CROJAS",
    userID: "258963",
    position: "Credit Analyst",
  },
  {
    id: 14,
    username: "Johan Nova",
    code: "JNOVA",
    userID: "589647",
    position: "Adviser",
  },
  {
    id: 15,
    username: "Fernando Cañas",
    code: "FCANAS",
    userID: "365224",
    position: "Credit Analyst",
  },
  {
    id: 16,
    username: "Carlos Batativa",
    code: "CBATATIVA",
    userID: "2357421",
    position: "Adviser",
  },
  {
    id: 17,
    username: "Cesar Marin",
    code: "CMARIN",
    userID: "1000245",
    position: "Credit Analyst",
  },
  {
    id: 18,
    username: "Pedro Perez",
    code: "PEREZ",
    userID: "687440",
    position: "Adviser",
  },
  {
    id: 19,
    username: "Sofia Henao",
    code: "SHENAO",
    userID: "352411",
    position: "Adviser",
  },
  {
    id: 20,
    username: "Daniel Novoa",
    code: "DNOVOA",
    userID: "320145",
    position: "Credit Analyst",
  },
  {
    id: 21,
    username: "Jose Gomez",
    code: "JGOMEZ",
    userID: "4578899",
    position: "Adviser",
  },
  {
    id: 22,
    username: "Jeimmy Cruz",
    code: "JCRUZ",
    userID: "586745",
    position: "Adviser",
  },
  {
    id: 23,
    username: "Samuel Mejia",
    code: "SMEJIA",
    userID: "235652",
    position: "Credit Analyst",
  },
  {
    id: 24,
    username: "Laura Amado",
    code: "LAMADO",
    userID: "3201153",
    position: "Adviser",
  },
  {
    id: 25,
    username: "Jhonatan Fernandez",
    code: "JFERNANDEZ",
    userID: "0215451",
    position: "Credit Analyst",
  },
  {
    id: 26,
    username: "Diego Morales",
    code: "DMORALES",
    userID: "5656461",
    position: "Adviser",
  },
  {
    id: 27,
    username: "Carolina Gomez",
    code: "CGOMEZ",
    userID: "841216423",
    position: "Adviser",
  },
  {
    id: 28,
    username: "Fabian Jaramillo",
    code: "FJARAMILLO",
    userID: "47456444",
    position: "Adviser",
  },
  {
    id: 29,
    username: "Jsica Beltran",
    code: "JBELTRAN",
    userID: "22115151",
    position: "Credit Analyst",
  },
  {
    id: 30,
    username: "Sebastian Gonzales",
    code: "SGONZALES",
    userID: "84548774",
    position: "Credit Analyst",
  },
  {
    id: 31,
    username: "Felipe Alvarez",
    code: "FALVAREZ",
    userID: "84545478",
    position: "Credit Analyst",
  },
  {
    id: 32,
    username: "freddy Baquero",
    code: "FBAQUERO",
    userID: "78785744",
    position: "Adviser",
  },
  {
    id: 33,
    username: "Tomas Rodriguez",
    code: "TRODRIGUEZ",
    userID: "845456",
    position: "Adviser",
  },
  {
    id: 34,
    username: "Daniel Zamora",
    code: "DZAMORA",
    userID: "966586",
    position: "Credit Analyst",
  },
  {
    id: 35,
    username: "Brandon Pineda",
    code: "BPINEDA",
    userID: "7414542",
    position: "Adviser",
  },
  {
    id: 36,
    username: "Jeimmy Zambrano",
    code: "JZAMBRANO",
    userID: "4001154",
    position: "Credit Analyst",
  },
  {
    id: 37,
    username: "Andres Lopez",
    code: "ALOPEZ",
    userID: "41251321",
    position: "Credit Analyst",
  },
  {
    id: 38,
    username: "Carmen Pedraza",
    code: "CPEDRAZA",
    userID: "843254432",
    position: "Credit Analyst",
  },
  {
    id: 39,
    username: "Camilo Torres",
    code: "CTORRES",
    userID: "8641651",
    position: "Adviser",
  },
  {
    id: 40,
    username: "Alvaro Rosales",
    code: "AROSALES",
    userID: "325215",
    position: "Adviser",
  },
];

const Default = (args) => <Table {...args} />;
Default.args = {
  titles,
  actions,
  breakPoints,
  entriesDefault,
  entriesPagination,
};

export default story;
export { Default };
