import React, { useEffect, useState } from "react";
import { FiltersContainer } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum, FilterType } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";
import { checkIfDropdownIsDisabled, handleSourceDependenciesFiltersChange, handleSourceFilterChange } from "./functions";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    onFilterDropdownChange : (value : string, label : string ) => void;
    searchScope : string;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, onFilterDropdownChange, searchScope }) => {
    const [disabledFilters, setDisabledFilters] = useState<Map<string,number>>(new Map());

    useEffect(() => {
        setDisabledFilters(new Map());
    },[dropdowns]);

    const handleFilterDropdownChange = (value: string, label: string) => {
        const valueIsNone = value.toLowerCase() === 'none';
        const updatedDisabledFilters = new Map(disabledFilters);
    
        if (label === FilterType.Sources) {
            handleSourceFilterChange(valueIsNone,updatedDisabledFilters);

        } else if (label === FilterType.Category || label === FilterType.Country) {
            handleSourceDependenciesFiltersChange(valueIsNone, updatedDisabledFilters);
        }
    
        setDisabledFilters(updatedDisabledFilters);

        onFilterDropdownChange(value,label);
    };    

    
    return(
        <FiltersContainer>
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
                    onDropdownChange={handleFilterDropdownChange}
                    disabled={isDisabled}
                    /> 
                    );
                }
            })}
        </FiltersContainer>
    );
};
