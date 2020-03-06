export interface IBaseNavigationProps {
  links: INavigationLink[];
}

interface INavigationLink {
  label: string;
  route: string;
}
