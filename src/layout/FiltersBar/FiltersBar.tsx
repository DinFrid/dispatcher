import React, { useState } from "react";
import { FiltersContainer, FiltersWrapper, StyledDiv } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";
import { checkIfDropdownIsDisabled } from "./functions";
import { useMediaQuery, useTheme } from "@mui/material";
import MobileFiltersButton from "../mobile/FilterIcon/MobileFiltersButton";
import { everythingScopeMobileFilters, searchBarDropDownProps, topHeadlinesScopeMobileFilters } from "../../utils/consts/FiltersGroups";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    searchScope : string;
    disabledFilters : Set<string>
    onFilterDropdownChange : (label : string, value : string) => void;
    onSearchDropdownChange : (label : string) => void;
    resetDropdowns : boolean;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, searchScope, disabledFilters, onFilterDropdownChange, onSearchDropdownChange, resetDropdowns }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('xs','sm'));
    const mobileDropdowns = searchScope === 'top-headlines' ? topHeadlinesScopeMobileFilters : everythingScopeMobileFilters;    
    
    const handleSearchScopeFilterChange = (value: string, label: string) => {
        onSearchDropdownChange(label);
    };        
    
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
                        resetDropdown={resetDropdowns}
                        /> 
                        );
                    }
                })}
                {isMobile &&
                 <StyledDiv >
                    <StyledDropdown 
                    label={'Top Headlines'}
                    dropDownType={DropdownTypeEnum.FiltersDropdown} 
                    dropdownItems={searchBarDropDownProps.dropdownItems}
                    onDropdownChange={handleSearchScopeFilterChange}
                    resetDropdown={false}
                    />
                    <MobileFiltersButton 
                    onFilterChange={onFilterDropdownChange}
                    disabledFilters={disabledFilters}
                    filters={mobileDropdowns}
                    />
                </StyledDiv>
                }
            </FiltersWrapper>

        </FiltersContainer>
    );
};
