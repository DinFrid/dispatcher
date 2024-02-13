import React, { useState } from "react";
import {PageContainer } from "./styles";
import BodyLayout from "../BodyLayout/BodyLayout";
import Navbar from "../../components/Navbar/Navbar";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import { mockedDropdowns } from "../../mockData/MockDropdowns";

interface PageLayoutProps {};

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filtersMap, setFiltersMap] = useState<Map<string, string>>(new Map());
    
    const onSearchAction = (value : string) => {
        console.log("Searched : " + value);
      };
    
    const handleSearchDropdownChange = (value : string, label : string) => {
        setFiltersMap(new Map(filtersMap).set(label, value));
        console.log("Map previous status: " + filtersMap.get(label));
        
        //console.log(`Dropdown ${label}`s new value : ${value} :`);
      };
    
      const handleFilterDropdownChange = (value: string, label: string) => {
        setFiltersMap(new Map(filtersMap).set(label, value));

        console.log("Map previous status: " + filtersMap.get(label));
        
        //console.log(`Dropdown ${label}`s new value : ${value} :`);
        
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
           <BodyLayout/>
        </PageContainer>
    );
};

export default PageLayout;