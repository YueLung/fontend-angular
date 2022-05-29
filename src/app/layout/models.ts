export interface MenuModel {
  title: string;
  code: string;
  icon?: string;
  link?: string;
  child?: Array<MenuModel>;
}
