import { DisabledFiltersMapAction, FilterType } from "../../utils/Enums";

export const checkIfDropdownIsDisabled = (label : string, disabledFilters : Map<string,number>) => {
    return (disabledFilters.get(label) ?? 0) > 0;
}

export const handleDisabledFiltersMap = (label : string, disabledFiltersAction : DisabledFiltersMapAction, disabledFilters : Map<string, number>) => {
    const currentValue = disabledFilters.get(label) ?? 0;
    const newValue = disabledFiltersAction === DisabledFiltersMapAction.Increment ? currentValue + 1 : currentValue - 1;
    disabledFilters.set(label,newValue);
  };
  
  export const handleSourceFilterChange = (valueIsNone : boolean, updatedDisabledFilters : Map<string, number>) => {
    if(valueIsNone) {
        handleDisabledFiltersMap(FilterType.Country,DisabledFiltersMapAction.Decrement,updatedDisabledFilters);
        handleDisabledFiltersMap(FilterType.Category,DisabledFiltersMapAction.Decrement,updatedDisabledFilters);
    }
    else {
        handleDisabledFiltersMap(FilterType.Country,DisabledFiltersMapAction.Increment,updatedDisabledFilters);
        handleDisabledFiltersMap(FilterType.Category,DisabledFiltersMapAction.Increment,updatedDisabledFilters);
    }
  };
  
  export const handleSourceDependenciesFiltersChange = (valueIsNone : boolean, updatedDisabledFilters : Map<string, number>) => {
      valueIsNone ? handleDisabledFiltersMap(FilterType.Sources, DisabledFiltersMapAction.Decrement, updatedDisabledFilters) 
      : handleDisabledFiltersMap(FilterType.Sources, DisabledFiltersMapAction.Increment, updatedDisabledFilters);
  }
