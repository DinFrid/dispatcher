export enum MenuItemTypeEnum {
    FiltersMenuItemType = 'FiltersMenuItemType',
    RecentSearchesMenuItemType = 'RecentSearchesMenuItemType',
  }

export enum DropdownTypeEnum {
  FiltersDropdown = 'FiltersDropdown',
  RecentSearchesDropdown = 'RecentSearchesDropdown',
  SearchBarDropdown = 'SearchBarDropdown'
}

export enum DropdownTypeToMenuItemTypeConverter {
  FiltersDropdown = 'FiltersMenuItemType',
  RecentSearchesDropdown = 'RecentSearchesMenuItemType',
  SearchBarDropdown = 'FiltersMenuItemType'
}