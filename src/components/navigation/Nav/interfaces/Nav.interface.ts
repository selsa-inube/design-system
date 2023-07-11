export interface Link {
  id: string;
  label: string;
  icon: Element;
  path: string;
}

export interface Section {
  name: string;
  links: { [key: string]: Link };
}

export interface Navigation {
  title: string;
  sections: { [key: string]: Section };
}

export interface INavProps {
  navigation: Navigation;
  logoutPath: string;
}
