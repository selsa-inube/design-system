import { Section } from "./FullscreenNav.Section.interface";

export interface Navigation {
  title: string;
  sections: { [key: string]: Section };
}
