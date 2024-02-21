
export type MenuItemStyles = {
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    height?: string;
    width?: string;
    paddingLeft?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    selectedBackgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    lineHeight?: string;
    flexShrink?: string;
    letterSpacing?: string;
};

export type MenuItemType = {
    FiltersMenuItemType: MenuItemStyles;
    RecentSearchesMenuItemType: MenuItemStyles;
    NoneItemType: MenuItemStyles;
};