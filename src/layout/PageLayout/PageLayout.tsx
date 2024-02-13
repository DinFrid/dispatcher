import React, { useState } from "react";
import {PageContainer } from "./styles";
import BodyLayout from "../BodyLayout/BodyLayout";
import Navbar from "../../components/Navbar/Navbar";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import { mockedDropdowns } from "../../mockData/MockDropdowns";

interface PageLayoutProps {};

console.log("PageLayout rendered!");

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filtersMap, setFiltersMap] = useState<Map<string, string>>(new Map());
    const [searchScope, setSearchScope] = useState('Everything');
    const [searchInput, setSearchInput] = useState('');
    
    const onSearchAction = (value : string) => {
        setSearchInput(value);

        console.log("Searched : " + value);
      };
    
    const handleSearchDropdownChange = (value : string, label : string) => {
        setSearchScope(value);
        console.log("previous search scope " + searchScope);
        
        console.log(`Dropdown ${label}s new value : ${value} :`);
      };
    
      const handleFilterDropdownChange = (value: string, label: string) => {
        setFiltersMap(new Map(filtersMap).set(label, value));

        console.log("Map previous status: " + filtersMap.get(label));
        
        console.log(`Dropdown ${label}s new value : ${value} :`);
        
        if(value === 'none') {
            const updatedFilters = new Map(filtersMap);
            updatedFilters.delete(label);
            setFiltersMap(updatedFilters);
        }
    };

    return (
        <PageContainer>
            <Navbar onSearchAction={onSearchAction} handleSearchDropdownChange={handleSearchDropdownChange}/>
            <FiltersBar dropdowns={mockedDropdowns} onFilterDropdownChange={handleFilterDropdownChange}/>
           <BodyLayout filters={filtersMap} searchScope={searchScope} searchInput={searchInput}/>
        </PageContainer>
    );
};

export default PageLayout;