import { INavigation } from "./FullscreenNav.Navigation.interface";

export interface IFullscreenMenuProps {
  navigation: INavigation;
  logoutPath: string;
  onClose: () => void;
}
