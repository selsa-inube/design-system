import React from "react";
import { StyledContainerActions } from "./styles";
import { MdToggleOff, MdModeEdit, MdDelete } from "react-icons/md";

const titlesMuck = [
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

const actionsMuck = [
  {
    id: "Activate",
    actionName: "Activate",
    content: () => (
      <StyledContainerActions>
        <MdToggleOff />
      </StyledContainerActions>
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Edit",
    content: () => (
      <StyledContainerActions>
        <MdModeEdit />
      </StyledContainerActions>
    ),
    type: "primary",
  },
  {
    id: "Deleten ",
    actionName: "Delete",
    content: () => (
      <StyledContainerActions>
        <MdDelete />
      </StyledContainerActions>
    ),
    type: "remove",
  },
];

const breakPointsMuck = [
  { breakPoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakPoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakPoint: "(max-width: 980px)", totalColumns: 2 },
  { breakPoint: "(max-width: 850px)", totalColumns: 4 },
  { breakPoint: "(max-width: 680px)", totalColumns: 3 },
  { breakPoint: "(max-width: 550px)", totalColumns: 2 },
  { breakPoint: "(max-width: 360px)", totalColumns: 1 },
];

export { titlesMuck, actionsMuck, breakPointsMuck };
