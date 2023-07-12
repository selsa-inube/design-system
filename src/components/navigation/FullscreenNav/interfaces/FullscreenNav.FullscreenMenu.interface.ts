import { Navigation } from "./FullscreenNav.Navigation.interface";

export interface IFullscreenMenuProps {
  navigation: Navigation;
  logoutPath: string;
  onClose: () => void;
}
