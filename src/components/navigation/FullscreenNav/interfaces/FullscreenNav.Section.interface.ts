import { ILink } from "./FullscreenNav.Link.interface";

export interface ISection {
  name: string;
  links: { [key: string]: ILink };
}
