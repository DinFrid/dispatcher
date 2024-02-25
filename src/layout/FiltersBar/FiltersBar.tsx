import React from "react";
import { FiltersContainer, FiltersWrapper } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";
import { checkIfDropdownIsDisabled } from "./functions";
import { useMediaQuery, useTheme } from "@mui/material";
import MobileFiltersButton from "../mobile/FilterIcon/MobileFiltersButton";
import { topHeadlinesScopeMobileFilters } from "../../utils/consts/FiltersGroups";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    searchScope : string;
    disabledFilters : Set<string>
    onFilterDropdownChange : (label : string, value : string) => void;
    onSearchDropdownChange : (value : string) => void;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, searchScope, disabledFilters, onFilterDropdownChange, onSearchDropdownChange }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('xs','sm'));
    
    return(
        <FiltersContainer theme={theme}>
            <FiltersWrapper theme={theme}>
                {!isMobile && dropdowns.map((dropdown) => {
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
                {isMobile && 
                    <MobileFiltersButton 
                    onFilterChange={onFilterDropdownChange}
                    disabledFilters={disabledFilters}
                    filters={topHeadlinesScopeMobileFilters}
                    />
                }
            </FiltersWrapper>

        </FiltersContainer>
    );
};
