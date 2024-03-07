import React, { useEffect, useState } from "react";
import {PageContainer } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import { disableDependenciesFilters, handleClearFilterSelected, parseFilters, replaceWhiteSpacesAndToLowerCase } from "./functions";
import { everythingScopeFilters, topHeadlinesScopeFilters } from "../../utils/consts/FiltersGroups";
import { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";
import { toCamelCase, updateChosenFiltersMap } from "../FiltersBar/functions";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import BodyLayout from "../BodyLayout/BodyLayout";
import { INITIAL_CHOSEN_FILTERS_MAP } from "../BodyLayout/consts";

interface PageLayoutProps {};

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filters, setFilters] = useState<StyledDropdownProps[]>(topHeadlinesScopeFilters);
    const [disabledFilters, setDisabledFilters] = useState<Set<string>>(new Set());
    const [chosenFiltersMap, setChosenFiltersMap] = useState<Map<string, string>>(() => INITIAL_CHOSEN_FILTERS_MAP);
    const [searchScope, setSearchScope] = useState('Top-Headlines');
    const [searchInput, setSearchInput] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isFirstFilterChange, setIsFirstFilterChange] = useState(true);
    const [isInitState, setIsInitState] = useState(true);
    const [resetDropdowns, setResetDropdowns] = useState(false);

    useEffect(() => {
      if (!isInitialLoad) {
          setDisabledFilters(new Set());
          setChosenFiltersMap(new Map());
          setIsInitState(false);
          setIsInitialLoad(true);
          setResetDropdowns(true)
      }
      else {
        setIsInitialLoad(false);
      }
  },[searchInput, searchScope]);

    const onSearchAction = (value : string) => {
      setChosenFiltersMap(new Map());
      setSearchInput(value);
      setResetDropdowns(true);
      };

      const handleFilterDropdownChange = (label: string, value: string) => {
        const valueIsNone = value.toLowerCase() === 'none';
        const labelCamelCase = toCamelCase(label);
        const updatedChosenFiltersMap = isFirstFilterChange ? new Map() : new Map(chosenFiltersMap);
        let updatedDisabledFilters = new Set(disabledFilters);

        if(valueIsNone) {
            updatedDisabledFilters = handleClearFilterSelected(label,disabledFilters,chosenFiltersMap)
          }
        else {
            updatedDisabledFilters = disableDependenciesFilters(label,disabledFilters);
        }
    
        updateChosenFiltersMap(value, labelCamelCase,valueIsNone, updatedChosenFiltersMap);
        
        setChosenFiltersMap(updatedChosenFiltersMap);
        setDisabledFilters(updatedDisabledFilters);
        setIsFirstFilterChange(false);
        setIsInitState(false);
    }
    
    const handleSearchDropdownChange = (value : string) => {
      const filtersGroupToSet = value === 'everything' ? everythingScopeFilters : topHeadlinesScopeFilters;
    
      setFilters(filtersGroupToSet);
      setSearchScope(replaceWhiteSpacesAndToLowerCase(value));
      setChosenFiltersMap(new Map()); 
      setDisabledFilters(new Set());       
      };

      //console.log('chosen filters : ',chosenFiltersMap);

    return (
        <PageContainer>
            <Navbar 
              onSearchAction={onSearchAction} 
              handleSearchDropdownChange={handleSearchDropdownChange}/>
            <FiltersBar 
              dropdowns={filters} 
              searchScope={searchScope} 
              disabledFilters={disabledFilters} 
              onFilterDropdownChange={handleFilterDropdownChange}
              onSearchDropdownChange={handleSearchDropdownChange}
              resetDropdowns={resetDropdowns}
              />
            <BodyLayout 
              filters={parseFilters(chosenFiltersMap)} 
              searchScope={searchScope} 
              searchInput={searchInput} 
              isInitState={isInitState}/>
        </PageContainer>
    );
};

export default PageLayout;