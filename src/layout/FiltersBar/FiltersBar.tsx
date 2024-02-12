import React from "react";
import { FiltersContainer } from "./styles";
import StyledDropdown, { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { DropdownTypeEnum } from "../../utils/Enums";
import DateComponent from "../../components/DateComponent/DateComponent";

interface FiltersBarProps {
    dropdowns : StyledDropdownProps[];
};

export const FiltersBar:React.FC<FiltersBarProps> = ({dropdowns}) => {
    
    return(
        <FiltersContainer>
            {dropdowns.map((dropdown) => {
                if(dropdown.dropDownType === DropdownTypeEnum.DateDropdown)
                    return <DateComponent key={dropdown.label}/>;
                else
                    return <StyledDropdown key={dropdown.label} dropDownType={dropdown.dropDownType} dropdownItems={dropdown.dropdownItems} label={dropdown.label} onChange={dropdown.onChange}/>
            })}
        </FiltersContainer>
    );
};
