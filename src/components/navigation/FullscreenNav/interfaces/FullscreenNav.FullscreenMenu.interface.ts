import { INavigation } from "./FullscreenNav.Navigation.interface";

export interface IFullscreenMenuProps {
  navigation: INavigation;
  logoutPath: string;
  logoutTitle: string;
  onClose: () => void;
}
