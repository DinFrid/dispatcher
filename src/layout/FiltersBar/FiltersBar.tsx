import React from "react";
import { FiltersContainer } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    onFilterDropdownChange : (value : string, label : string ) => void;
    disabledFilters : Set<string>;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, onFilterDropdownChange, disabledFilters }) => {
    
    return(
        <FiltersContainer>
            {dropdowns.map((dropdown) => {
                const isDisabled = disabledFilters.has(dropdown.label as string);

                if(dropdown.dropDownType === DropdownTypeEnum.DateDropdown)
                    return <DateComponent key={dropdown.label} onDateChange={onFilterDropdownChange}/>;
                else {
                    

                    return (
                    <StyledDropdown key={dropdown.label} 
                    dropDownType={dropdown.dropDownType} 
                    dropdownItems={dropdown.dropdownItems} 
                    label={dropdown.label} 
                    onDropdownChange={onFilterDropdownChange}
                    disabled={isDisabled}
                    /> 
                    );
                }
            })}
        </FiltersContainer>
    );
};
