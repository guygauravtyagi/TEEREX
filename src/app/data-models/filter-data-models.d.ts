export interface Filter {
    id: number;
    title: string;
    subMenu: SubMenu[];
}

export interface SubMenu {
    isActive: boolean;
    name: string;
    upperLimit?: number;
    lowerLimit?: number;
}

export interface CheckBoxEvent {
    isChecked: boolean,
    value: string,
    parentId: number,
  }