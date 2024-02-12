export type DropdownStyles = {
    padding?: string;
    borderRadius?: string;
    display?: string;
    justifyContent ?: string;
    alignItems?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    paddingLeft?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    selectedBackgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    lineHeight?: string;
    flexShrink?: string;
    letterSpacing?: string;
    gap?: string;
    borderLeft?: string;
    focusBorderColor?: string;
    placeholder?: string;
    iconPadding?: string;
  };

  export type DropdownType = {
    FiltersDropdown: DropdownStyles;
    RecentSearchesDropdown: DropdownStyles;
    SearchBarDropdown: DropdownStyles;
  };

  export type DropdownItem = {
    value: string;
    label: string;
  };