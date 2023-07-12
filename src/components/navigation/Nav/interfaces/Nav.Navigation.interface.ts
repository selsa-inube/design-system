import { ISection } from "./Nav.Sections.interface";

export interface INavigation {
  title: string;
  sections: { [key: string]: ISection };
}
