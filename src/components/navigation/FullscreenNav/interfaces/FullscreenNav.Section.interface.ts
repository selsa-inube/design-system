import { Link } from "./FullscreenNav.Link.interface";

export interface Section {
  name: string;
  links: { [key: string]: Link };
}
