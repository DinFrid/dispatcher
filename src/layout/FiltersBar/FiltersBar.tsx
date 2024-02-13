import React from "react";
import { FiltersContainer } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
    onFilterDropdownChange : (value : string, label : string ) => void;
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns, onFilterDropdownChange }) => {
    
    return(
        <FiltersContainer>
            {dropdowns.map((dropdown) => {
                if(dropdown.dropDownType === DropdownTypeEnum.DateDropdown)
                    return <DateComponent key={dropdown.label} onDateChange={onFilterDropdownChange}/>;
                else
                    return (
                    <StyledDropdown key={dropdown.label} 
                    dropDownType={dropdown.dropDownType} 
                    dropdownItems={dropdown.dropdownItems} 
                    label={dropdown.label} 
                    onDropdownChange={onFilterDropdownChange}/> );
            })}
        </FiltersContainer>
    );
};
