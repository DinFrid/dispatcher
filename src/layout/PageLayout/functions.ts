import { FILTER_DEPENDENCIES } from "../../utils/consts/FiltersDependencies";
import { toCamelCase } from "../FiltersBar/functions";

export const replaceWhiteSpacesAndToLowerCase = (value : string) => {
    return value.replace(/\s/g, '-').toLowerCase();
};

export const capitalizeFilterLabel = (label: string): string => {
  return label
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};




  export const parseFilters = (filters: Map<string, string>) => {
    let filterString = '';


    const processDate = (date: string): string => {

        return date;
    };
    
    filters.forEach((value, key) => {
        if (value && value !== 'none') {
            if (key.toLowerCase() === 'dates' && value.includes(',')) {

                const [from, to] = value.split(',').map(date => date.trim());
                

                const processedFrom = processDate(from);
                const processedTo = processDate(to);
                

                filterString += `&from=${encodeURIComponent(processedFrom)}`;
                filterString += `&to=${encodeURIComponent(processedTo)}`;
            } else {

                filterString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            }
        }
    });

    return filterString;
};

export const disableDependenciesFilters = (selectedFilter : string, disabledFilters : Set<string>) => {
    const updatedDisabledFilters = new Set(disabledFilters);
  
    const filtersToDisable = FILTER_DEPENDENCIES[selectedFilter];
  
    if(filtersToDisable) {
      filtersToDisable.forEach(filter => {
        updatedDisabledFilters.add(filter);
        });
    }
    
    return updatedDisabledFilters;
  }
  
  export const handleClearFilterSelected = (
    clearedFilter: string,
    disabledFilters: Set<string>,
    chosenFilters: Map<string, string>
  ) => {
    const updatedDisabledFilters = new Set(disabledFilters);
  
    const filtersToReEnable = FILTER_DEPENDENCIES[clearedFilter];
  
    console.log('Cleared filter :', clearedFilter);

    if (filtersToReEnable) {
      for (const filter of filtersToReEnable) {
        let shouldReEnable = true;
        console.log('filtersToReEnable : ',filtersToReEnable);
        console.log('current filter from filtersToReEnable : ',filter);
        
  
        for (const [chosenFilterLabel, chosenFilterValue] of chosenFilters.entries()) {
          console.log('current filter from chosenFilters : ',chosenFilterLabel);
          if (chosenFilterLabel === toCamelCase(clearedFilter)) continue;

          console.log('the cameled case : ', toCamelCase(chosenFilterLabel));

          const dependenciesOfChosenFilter = FILTER_DEPENDENCIES[capitalizeFilterLabel(chosenFilterLabel)] || [];
          console.log('dependenciesOfChosenFilter : ',dependenciesOfChosenFilter);
          if (dependenciesOfChosenFilter.includes(filter)) {
            shouldReEnable = false;
            break;
          }
        }
  
        if (shouldReEnable) {
          updatedDisabledFilters.delete(filter);
        }
      }
    }
  
    return updatedDisabledFilters;
  };