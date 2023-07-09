interface Link {
  id: string;
  label: string;
  icon: Element;
  path: string;
}

interface Section {
  name: string;
  links: { [key: string]: Link };
}

interface Navigation {
  title: string;
  sections: { [key: string]: Section };
  logoutPath: string;
}

export interface INavProps {
  navigation: Navigation;
  logoutPath: string;
}
