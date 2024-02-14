import { DropdownTypeEnum, FiltersBank } from "../utils/Enums";
import { categoryMenuItems, countryMenuItems, langMenuItems, sortByMenuItems, sourceMenuItems } from "./MockMenuItems";

export const everythingFilters = [
    {
        label: FiltersBank.SortBy,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sortByMenuItems
    },
    {
        label: FiltersBank.Dates,
        dropDownType: DropdownTypeEnum.DateDropdown,
    },
    {
        label: FiltersBank.Sources,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sourceMenuItems
    },
    {
        label: FiltersBank.Language,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: langMenuItems
    },
];

export const topHeadlinesFilters = [
    {
        label: FiltersBank.Country,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: countryMenuItems
    },
    {
        label: FiltersBank.Category,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems : categoryMenuItems
    },
    {
        label: FiltersBank.Sources,
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: sourceMenuItems
    }
];