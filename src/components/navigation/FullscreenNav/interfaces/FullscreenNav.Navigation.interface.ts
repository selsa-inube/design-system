import { ISection } from "./FullscreenNav.Section.interface";

export interface INavigation {
  title: string;
  sections: { [key: string]: ISection };
}
