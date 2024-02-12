export enum MenuItemTypeEnum {
    FiltersMenuItemType = 'FiltersMenuItemType',
    RecentSearchesMenuItemType = 'RecentSearchesMenuItemType',
  }

export enum DropdownTypeEnum {
  FiltersDropdown = 'FiltersDropdown',
  RecentSearchesDropdown = 'RecentSearchesDropdown',
  SearchBarDropdown = 'SearchBarDropdown',
  DateDropdown = 'DateDropdown'
}

export enum DropdownTypeToMenuItemTypeConverter {
  FiltersDropdown = 'FiltersMenuItemType',
  RecentSearchesDropdown = 'RecentSearchesMenuItemType',
  SearchBarDropdown = 'FiltersMenuItemType',
  DateDropdown = 'FiltersMenuItemType'
}