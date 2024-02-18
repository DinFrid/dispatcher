import { DropdownTypeEnum, FilterType } from "../Enums";
import { categoryMenuItems, countryMenuItems, langMenuItems, searchMenuOptions, sortByMenuItems, sourceMenuItems } from "./ConstsMenuItems";

export const everythingScopeFilters = [
    {
        label: FilterType.SortBy,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sortByMenuItems
    },
    {
        label: FilterType.Dates,
        dropDownType: DropdownTypeEnum.DateDropdown,
    },
    {
        label: FilterType.Sources,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sourceMenuItems
    },
    {
        label: FilterType.Language,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: langMenuItems
    },
];

export const topHeadlinesScopeFilters = [
    {
        label: FilterType.Country,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: countryMenuItems
    },
    {
        label: FilterType.Category,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems : categoryMenuItems
    },
    {
        label: FilterType.Sources,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sourceMenuItems
    }
];

export const searchBarDropDownProps = {dropDownType : DropdownTypeEnum.SearchBarDropdown, label: 'Top Headlines',
         dropdownItems : searchMenuOptions}