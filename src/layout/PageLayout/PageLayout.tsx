import React, { useState } from "react";
import {PageContainer } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import { replaceWhiteSpacesAndToLowerCase } from "./functions";
import { everythingScopeFilters, topHeadlinesScopeFilters } from "../../utils/consts/FiltersGroups";
import { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import BodyContainer from "../BodyContainer/BodyContainer";

interface PageLayoutProps {};

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filters, setFilters] = useState<StyledDropdownProps[]>(topHeadlinesScopeFilters);
    const [searchScope, setSearchScope] = useState('Top-Headlines');
    const [searchInput, setSearchInput] = useState('israel');
    
    const onSearchAction = (value : string) => {
        setSearchInput(value);

        //console.log("Searched : " + value);
      };
    
    const handleSearchDropdownChange = (value : string, label : string) => {
        const filtersGroupToSet = value === 'Everything' ? everythingScopeFilters : topHeadlinesScopeFilters;
        
        setFilters(filtersGroupToSet);
        setSearchScope(replaceWhiteSpacesAndToLowerCase(value));

        //console.log("chosen filters map : ",chosenFiltersMap);
        
      };

    return (
        <PageContainer>
            <Navbar onSearchAction={onSearchAction} handleSearchDropdownChange={handleSearchDropdownChange}/>
            <BodyContainer filters={filters} searchScope={searchScope} searchInput={searchInput}/>
        </PageContainer>
    );
};

export default PageLayout;