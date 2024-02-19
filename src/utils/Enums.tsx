export enum MenuItemTypeEnum {
    FiltersMenuItemType = 'FiltersMenuItemType',
    RecentSearchesMenuItemType = 'RecentSearchesMenuItemType',
    NoneItemType = 'NoneItemType'
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

export enum FilterType {
  Sources = "Sources",
  Dates = 'Dates',
  SortBy = 'Sort by',
  Language = 'Language',
  Category = 'Category',
  Country = 'Country'
}

export enum DisabledFiltersMapAction {
  Increment = "increment",
  Decrement = 'decrement'
}