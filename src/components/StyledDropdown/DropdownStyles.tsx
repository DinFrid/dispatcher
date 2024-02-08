import { InputLabel, Select } from "@mui/material";
import styled from "styled-components";
import { DropdownStyles, DropdownType } from "./StyledDropdown";

export const dropDownStyles: DropdownType = {
  FiltersDropdown: {
    padding: '8px 16px',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    width: '189px',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '47px',
    gap: '14px',

    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)'
  },
  RecentSearchesDropdown: {
    padding: '8px 16px',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    width: '189px',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '40px',
    gap: '14px',
  }
};

export const CustomDropdown = styled(Select)<{dropdownstyles : DropdownStyles}>`
  &&& {
    height: ${({ dropdownstyles }) => dropdownstyles.height || '40px'};
    font-family: ${({ dropdownstyles }) => dropdownstyles.fontFamily || 'Roboto'};
    font-weight: ${({ dropdownstyles }) => dropdownstyles.fontWeight || '500'};
    padding: ${({ dropdownstyles }) => dropdownstyles.padding || '8px 16px'};
    border-radius: ${({ dropdownstyles }) => dropdownstyles.borderRadius || '10px'};
    background-color: ${({ dropdownstyles }) => dropdownstyles.backgroundColor || '#FFF'};
    color: ${({ dropdownstyles }) => dropdownstyles.color || '#5A5A89'};
    font-size: ${({ dropdownstyles }) => dropdownstyles.fontSize || '14px'};
    font-style: ${({ dropdownstyles }) => dropdownstyles.fontStyle || 'normal'};
    line-height: ${({ dropdownstyles }) => dropdownstyles.lineHeight || '22px'};
    letter-spacing: ${({ dropdownstyles }) => dropdownstyles.letterSpacing || '0.25px'};
    display: ${({ dropdownstyles }) => dropdownstyles.display || 'flex'};
    justify-content: ${({ dropdownstyles }) => dropdownstyles.justifyContent || 'space-between'};
    align-items: ${({ dropdownstyles }) => dropdownstyles.alignItems || 'center'};
    gap: ${({ dropdownstyles }) => dropdownstyles.gap || '14px'};
    width: ${({ dropdownstyles }) => dropdownstyles.width || '189px'};
    box-shadow: ${({ dropdownstyles }) => dropdownstyles.boxShadow || 'inherit'};
  };
    
    &:focus {
      border-color: '#FFF';
      background-color: '#FFF';
    }

    .MuiSelect-icon {
      color: '#000';
    }
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
    .MuiSelect-select {
      padding-right: '24px';
    }
`;

export const StyledInputLabel = styled(InputLabel) `
&&{
  label.MuiFormLabel-root.MuiInputLabel-root {
  display: none;
}
  }
`;