import React, { useState } from "react";
import {PageContainer } from "./styles";
import BodyLayout from "../BodyLayout/BodyLayout";
import Navbar from "../../components/Navbar/Navbar";
import { FiltersBar } from "../FiltersBar/FiltersBar";
import { everythingFilters, topHeadlinesFilters } from "../../mockData/FiltersBankImpl";
import { FiltersBank } from "../../utils/Enums";

interface PageLayoutProps {};

const replaceWhiteSpacesAndToLowerCase = (value : string) => {
    return value.replace(/\s/g, '-').toLowerCase();
}

function toCamelCase(value : string) {
    return value
      .split(/[\s-_]+/)
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join('');
  }

const PageLayout:React.FC<PageLayoutProps> = () => {
    const [filters, setFilters] = useState(everythingFilters);
    const [chosenFiltersMap, setChosenFiltersMap] = useState<Map<string, string>>(new Map());
    const [disabledFilters, setDisabledFilters] = useState<Set<string>>(new Set());
    const [searchScope, setSearchScope] = useState('Everything');
    const [searchInput, setSearchInput] = useState('israel');
    
    const onSearchAction = (value : string) => {
        setSearchInput(value);

        //console.log("Searched : " + value);
      };
    
    const handleSearchDropdownChange = (value : string, label : string) => {
        if(value === 'Everything') {
            setFilters(everythingFilters);
        }
        else {
            setFilters(topHeadlinesFilters);
        }
        
        setChosenFiltersMap(new Map())
        setSearchScope(replaceWhiteSpacesAndToLowerCase(value));
        
        //console.log(`Dropdown ${label} new value : ${value} :`);
      };
    
      const handleFilterDropdownChange = (value: string, label: string) => {

        if(label === FiltersBank.Sources && value.toLowerCase() !== 'none') {
            const updatedDisabledFilters = new Set(disabledFilters);
            updatedDisabledFilters.add(FiltersBank.Country);
            updatedDisabledFilters.add(FiltersBank.Category);
            setDisabledFilters(updatedDisabledFilters);
        }

        if(label === FiltersBank.Category || label === FiltersBank.Country) {
            const updatedDisabledFilters = new Set(disabledFilters);
            if(value.toLowerCase() !== 'none') {
                updatedDisabledFilters.add(FiltersBank.Sources);
            }
            else {
                if(label === FiltersBank.Category) {
                    if (!chosenFiltersMap.has(toCamelCase(FiltersBank.Country))) {
                        updatedDisabledFilters.delete(FiltersBank.Sources);
                    }
                }
                else {
                    if (!chosenFiltersMap.has(toCamelCase(FiltersBank.Category))) {
                        updatedDisabledFilters.delete(FiltersBank.Sources);
                    }
                }
            }
            setDisabledFilters(updatedDisabledFilters);
        }

        setChosenFiltersMap(new Map(chosenFiltersMap).set(toCamelCase(label), value));


        //console.log(`Dropdown ${label} new value : ${value} :`);
        
        if(value.toLowerCase() === 'none') {
            const updatedFilters = new Map(chosenFiltersMap);
            updatedFilters.delete(toCamelCase(label));
            setChosenFiltersMap(updatedFilters);

            if(label === FiltersBank.Sources) {
                const updatedDisabledFilters = new Set(disabledFilters);
                updatedDisabledFilters.delete(FiltersBank.Country);
                updatedDisabledFilters.delete(FiltersBank.Category);
                setDisabledFilters(updatedDisabledFilters);
            }
        }

    };

    return (
        <PageContainer>
            <Navbar onSearchAction={onSearchAction} handleSearchDropdownChange={handleSearchDropdownChange}/>
            <FiltersBar dropdowns={filters} onFilterDropdownChange={handleFilterDropdownChange} disabledFilters={disabledFilters}/>
           <BodyLayout filters={chosenFiltersMap} searchScope={searchScope} searchInput={searchInput}/>
        </PageContainer>
    );
};

export default PageLayout;