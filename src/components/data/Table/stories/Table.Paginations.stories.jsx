import { titlesMuck, actionsMuck, breakPointsMuck } from "./mucks";

import { Table } from "../index";

import {
  parameters,
  titles,
  actions,
  entries,
  breakPoints,
  filter,
  pageLength,
} from "./props";

const story = {
  title: "data/Table/Paginations",
  component: Table,
  parameters,
};

const Paginations = (args) => <Table {...args} />;
Paginations.args = {
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
    {
      id: "15",
      username: "Fernando Cañas",
      code: "FCANAS",
      userID: "365224",
      position: "Credit Analyst",
    },
    {
      id: "16",
      username: "Carlos Batativa",
      code: "CBATATIVA",
      userID: "2357421",
      position: "Adviser",
    },
    {
      id: "17",
      username: "Cesar Marin",
      code: "CMARIN",
      userID: "1000245",
      position: "Credit Analyst",
    },
    {
      id: "18",
      username: "Pedro Perez",
      code: "PEREZ",
      userID: "687440",
      position: "Adviser",
    },
    {
      id: "19",
      username: "Sofia Henao",
      code: "SHENAO",
      userID: "352411",
      position: "Adviser",
    },
    {
      id: "20",
      username: "Daniel Novoa",
      code: "DNOVOA",
      userID: "320145",
      position: "Credit Analyst",
    },
    {
      id: "21",
      username: "Jose Gomez",
      code: "JGOMEZ",
      userID: "4578899",
      position: "Adviser",
    },
    {
      id: "22",
      username: "Jeimmy Cruz",
      code: "JCRUZ",
      userID: "586745",
      position: "Adviser",
    },
    {
      id: "23",
      username: "Samuel Mejia",
      code: "SMEJIA",
      userID: "235652",
      position: "Credit Analyst",
    },
    {
      id: "24",
      username: "Laura Amado",
      code: "LAMADO",
      userID: "3201153",
      position: "Adviser",
    },
    {
      id: "25",
      username: "Jhonatan Fernandez",
      code: "JFERNANDEZ",
      userID: "0215451",
      position: "Credit Analyst",
    },
    {
      id: "26",
      username: "Diego Morales",
      code: "DMORALES",
      userID: "5656461",
      position: "Adviser",
    },
    {
      id: "27",
      username: "Carolina Gomez",
      code: "CGOMEZ",
      userID: "841216423",
      position: "Adviser",
    },
    {
      id: "28",
      username: "Fabian Jaramillo",
      code: "FJARAMILLO",
      userID: "47456444",
      position: "Adviser",
    },
    {
      id: "29",
      username: "Jsica Beltran",
      code: "JBELTRAN",
      userID: "22115151",
      position: "Credit Analyst",
    },
    {
      id: "30",
      username: "Sebastian Gonzales",
      code: "SGONZALES",
      userID: "84548774",
      position: "Credit Analyst",
    },
    {
      id: "31",
      username: "Felipe Alvarez",
      code: "FALVAREZ",
      userID: "84545478",
      position: "Credit Analyst",
    },
    {
      id: "32",
      username: "freddy Baquero",
      code: "FBAQUERO",
      userID: "78785744",
      position: "Adviser",
    },
    {
      id: "33",
      username: "Tomas Rodriguez",
      code: "TRODRIGUEZ",
      userID: "845456",
      position: "Adviser",
    },
    {
      id: "34",
      username: "Daniel Zamora",
      code: "DZAMORA",
      userID: "966586",
      position: "Credit Analyst",
    },
    {
      id: "35",
      username: "Brandon Pineda",
      code: "BPINEDA",
      userID: "7414542",
      position: "Adviser",
    },
    {
      id: "36",
      username: "Jeimmy Zambrano",
      code: "JZAMBRANO",
      userID: "4001154",
      position: "Credit Analyst",
    },
    {
      id: "37",
      username: "Andres Lopez",
      code: "ALOPEZ",
      userID: "41251321",
      position: "Credit Analyst",
    },
    {
      id: "38",
      username: "Carmen Pedraza",
      code: "CPEDRAZA",
      userID: "843254432",
      position: "Credit Analyst",
    },
    {
      id: "39",
      username: "Camilo Torres",
      code: "CTORRES",
      userID: "8641651",
      position: "Adviser",
    },
    {
      id: "40",
      username: "Alvaro Rosales",
      code: "AROSALES",
      userID: "325215",
      position: "Adviser",
    },
  ],
  filter: "",
  pageLength: 10,
  breakPoints: breakPointsMuck,
};

Paginations.argTypes = {
  titles,
  actions,
  entries,
  filter,
  pageLength,
  breakPoints,
};

export default story;
export { Paginations };
