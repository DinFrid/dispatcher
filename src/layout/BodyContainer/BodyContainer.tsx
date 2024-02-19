import { FC, useEffect, useState } from "react";
import { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import BodyLayout from "../BodyLayout/BodyLayout";
import { parseFilters } from "../PageLayout/functions";
import { toCamelCase, updateChosenFiltersMap } from "../FiltersBar/functions";
import { FilterType } from "../../utils/Enums";

interface BodyContainerProps {
    filters : StyledDropdownProps[];
    searchScope : string;
    searchInput : string;
};

const BodyContainer:FC<BodyContainerProps> = ({filters, searchScope, searchInput}) => {
    const [disabledFilters, setDisabledFilters] = useState<Set<string>>(new Set());
    const [chosenFiltersMap, setChosenFiltersMap] = useState<Map<string, string>>(new Map());

    useEffect(() => {
        setDisabledFilters(new Set());
        setChosenFiltersMap(new Map());
    },[filters]);

    const handleFilterDropdownChange = (value: string, label: string) => {
        const valueIsNone = value.toLowerCase() === 'none';
        const labelCamelCase = toCamelCase(label);
        const updatedChosenFiltersMap = new Map(chosenFiltersMap);
        const updatedDisabledFilters = new Set(disabledFilters);
    
        updateChosenFiltersMap(value, labelCamelCase,valueIsNone, updatedChosenFiltersMap);
        setChosenFiltersMap(updatedChosenFiltersMap);
    
        setDisabledFilters(updatedDisabledFilters);
    }
    
    return(
        <>
            <FiltersBar dropdowns={filters} searchScope={searchScope} disabledFilters={disabledFilters} onFilterDropdownChange={handleFilterDropdownChange}/>
            <BodyLayout filters={parseFilters(chosenFiltersMap)} searchScope={searchScope} searchInput={searchInput}/>
        </>
    );
}

export default BodyContainer;