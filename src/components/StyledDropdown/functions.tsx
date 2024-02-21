import { DropdownTypeEnum } from "../../utils/Enums";
import { DropdownItem, DropdownStyles } from "./types";

const checkIfDropdownIsRecentSearchesOrSearchBar = (dropDownType : string) => {
  return (dropDownType === DropdownTypeEnum.RecentSearchesDropdown || dropDownType === DropdownTypeEnum.SearchBarDropdown);
}

export const getPlaceholders = (dropDownType : string, styles : DropdownStyles, label : string) => {
    return checkIfDropdownIsRecentSearchesOrSearchBar(dropDownType) ? styles.placeholder as string : label;
}

export const getSelectedLabel = (selected : string, placeholder : string, dropdownItems : DropdownItem[]) => {
  {
    return selected === '' || selected === 'none'
      ? placeholder
      : dropdownItems.find(item => item.value === selected)?.label ?? selected;
  };
}