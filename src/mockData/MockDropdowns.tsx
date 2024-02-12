import { SelectChangeEvent } from "@mui/material";
import { DropdownTypeEnum } from "../utils/Enums";
import { mockedFiltersMenuItems } from "./MockMenuItems";

export const handleDropdownChange = (event: SelectChangeEvent<unknown>) => {
    console.log("Selected value:", event.target.value);
  };

export const mockedDropdowns = [
    {
        label: 'Country',
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        onChange : handleDropdownChange,
        dropdownItems: mockedFiltersMenuItems
    },
    {
        label: 'Dates',
        dropDownType: DropdownTypeEnum.DateDropdown,
    },
    {
        label: 'Sources',
        dropDownType: DropdownTypeEnum.FiltersDropdown,
        onChange : handleDropdownChange,
        dropdownItems: mockedFiltersMenuItems
    },
];