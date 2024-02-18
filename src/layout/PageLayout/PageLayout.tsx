import React, { useState } from "react";
import {PageContainer } from "./styles";
import BodyLayout from "../BodyLayout/BodyLayout";
import Navbar from "../../components/Navbar/Navbar";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import { parseFilters, replaceWhiteSpacesAndToLowerCase, toCamelCase, updateChosenFiltersMap } from "./functions";
import { everythingScopeFilters, topHeadlinesScopeFilters } from "../../utils/consts/FiltersGroups";
import { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";

interface PageLayoutProps {};

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filters, setFilters] = useState<StyledDropdownProps[]>(topHeadlinesScopeFilters);
    const [chosenFiltersMap, setChosenFiltersMap] = useState<Map<string, string>>(new Map());
    const [searchScope, setSearchScope] = useState('Top-Headlines');
    const [searchInput, setSearchInput] = useState('israel');
    
    const onSearchAction = (value : string) => {
        setSearchInput(value);

        //console.log("Searched : " + value);
      };
    
    const handleSearchDropdownChange = (value : string, label : string) => {
        const filtersGroupToSet = value === 'Everything' ? everythingScopeFilters : topHeadlinesScopeFilters;
        
        setFilters(filtersGroupToSet);
        setChosenFiltersMap(new Map());
        setSearchScope(replaceWhiteSpacesAndToLowerCase(value));

        console.log("chosen filters map : ",chosenFiltersMap);
        
        //console.log(`Dropdown ${label} new value : ${value} :`);
      };

      const handleFilterDropdownChange = (value: string, label: string) => {
        const valueIsNone = value.toLowerCase() === 'none';
        const labelCamelCase = toCamelCase(label);
        const updatedChosenFiltersMap = new Map(chosenFiltersMap);
    
        updateChosenFiltersMap(value, labelCamelCase,valueIsNone, updatedChosenFiltersMap);
    
        setChosenFiltersMap(updatedChosenFiltersMap);
    };

    console.log(chosenFiltersMap);

    return (
        <PageContainer>
            <Navbar onSearchAction={onSearchAction} handleSearchDropdownChange={handleSearchDropdownChange}/>
            <FiltersBar dropdowns={filters} onFilterDropdownChange={handleFilterDropdownChange} searchScope={searchScope}/>
            <BodyLayout filters={parseFilters(chosenFiltersMap)} searchScope={searchScope} searchInput={searchInput}/>
        </PageContainer>
    );
};

export default PageLayout;