import { DropdownTypeEnum } from "../utils/Enums";
import { mockedFiltersMenuItems } from "./MockMenuItems";

export const mockedDropdowns = [
    {
        label: 'Country',
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: mockedFiltersMenuItems
    },
    {
        label: 'Dates',
        dropDownType: DropdownTypeEnum.DateDropdown,
    },
    {
        label: 'Sources',
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        dropdownItems: mockedFiltersMenuItems
    },
];