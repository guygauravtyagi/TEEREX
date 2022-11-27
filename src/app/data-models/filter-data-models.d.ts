export interface Filter {
    title: string;
    subMenu: SubMenu[]
}

export interface SubMenu {
    isActive: boolean;
    name: string;
    upperLimit?: number;
    lowerLimit?: number;
}