import { DropdownTypeEnum } from "../../utils/Enums";
import { DropdownStyles } from "./types";

export const getPlaceholders = (dropDownType : string, styles : DropdownStyles, label : string) => {
    return dropDownType === DropdownTypeEnum.RecentSearchesDropdown || dropDownType === DropdownTypeEnum.SearchBarDropdown ? styles.placeholder : label;
}