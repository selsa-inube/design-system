import { ILink } from "./Nav.Link.interface";

export interface ISection {
  name: string;
  links: { [key: string]: ILink };
}
