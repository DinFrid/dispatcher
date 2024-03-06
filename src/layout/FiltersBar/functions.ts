import { StyledDropdownProps } from "../../components/StyledDropdown/StyledDropdown";

export const checkIfDropdownIsDisabled = (label : string, disabledFilters : Set<string>) => {
  return disabledFilters.has(label);
}

  export const toCamelCase = (value : string) => {
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

  export const updateChosenFiltersMap = (value : string, label : string, valueIsNone : boolean, updatedChosenFiltersMap : Map<string,string>) => {
    valueIsNone ? updatedChosenFiltersMap.delete(label) : updatedChosenFiltersMap.set(label, value);
  };

// export const mapDropdownsToMobileDropdowns = (dropdowns : StyledDropdownProps[]) => {
//   return dropdowns.map((dropdown) =>  {
//     return {
//       label : dropdown.label,
//       items : dropdown.dropdownItems
//     }
//   });
// }
