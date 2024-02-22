import React from "react";
import { FiltersContainer, FiltersWrapper } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";
import { checkIfDropdownIsDisabled } from "./functions";
import { useMediaQuery, useTheme } from "@mui/material";
import SearchScopeButton from "../tablet/FilterIcon/SearchScopeButton";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    searchScope : string;
    disabledFilters : Set<string>
    onFilterDropdownChange : (label : string, value : string) => void;
    onSearchDropdownChange : (value : string) => void;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, searchScope, disabledFilters, onFilterDropdownChange, onSearchDropdownChange }) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    
    return(
        <FiltersContainer theme={theme}>
            <FiltersWrapper theme={theme}>
                {dropdowns.map((dropdown) => {
                    const isDisabled = checkIfDropdownIsDisabled(dropdown.label, disabledFilters);

                    if(dropdown.dropDownType === DropdownTypeEnum.DateDropdown)
                        return <DateComponent key={dropdown.label} onDateChange={onFilterDropdownChange}/>;
                    else {
                        return (
                        <StyledDropdown key={`${dropdown.label}-filter-${searchScope}`} 
                        dropDownType={dropdown.dropDownType} 
                        dropdownItems={dropdown.dropdownItems} 
                        label={dropdown.label} 
                        onDropdownChange={onFilterDropdownChange}
                        disabled={isDisabled}
                        /> 
                        );
                    }
                })}
            </FiltersWrapper>
            {!isDesktop && <SearchScopeButton onSelect={onSearchDropdownChange}/>}
        </FiltersContainer>
    );
};
