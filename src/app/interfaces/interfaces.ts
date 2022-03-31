interface Menu {
  title: string;
  path: string;
  childrens: Array<Menu>
}

export { Menu };