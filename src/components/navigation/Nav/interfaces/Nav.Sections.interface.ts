import { Link } from "./Nav.Link.interface";

export interface Section {
  name: string;
  links: { [key: string]: Link };
}
