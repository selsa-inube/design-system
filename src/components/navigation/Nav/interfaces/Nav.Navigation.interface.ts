import { Section } from "./Nav.Sections.interface";

export interface Navigation {
  title: string;
  sections: { [key: string]: Section };
}
