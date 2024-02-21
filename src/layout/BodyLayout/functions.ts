import { FILTER_DEPENDENCIES } from "../../utils/consts/FiltersDependencies";

export const formatDate = (dateString : string) => {
    const date = new Date(dateString);

    const optionsDay = { weekday: 'long' as 'long' }; 

    const optionsDate = { year: 'numeric' as 'numeric', month: 'long' as 'long', day: 'numeric' as 'numeric' };
    

    const dayName = date.toLocaleDateString('en-US', optionsDay);

    const datePart = date.toLocaleDateString('en-US', optionsDate);

    const formattedDate = `${dayName} ${datePart.replace(',', '')}`; 

    return formattedDate;
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
  
    if (filtersToReEnable) {
      for (const filter of filtersToReEnable) {
        let shouldReEnable = true;
  
        for (const [chosenFilterLabel, chosenFilterValue] of chosenFilters.entries()) {
  
          if (chosenFilterLabel === clearedFilter) continue;
  
          const dependenciesOfChosenFilter = FILTER_DEPENDENCIES[chosenFilterLabel] || [];
          
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