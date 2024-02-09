import { Select } from "@mui/material";
import styled from "styled-components";
import { DropdownType } from "./StyledDropdown";

export const dropDownStyles: DropdownType = {
  FiltersDropdown: {
    padding: '11.5px 15px',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    width: '175px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '47px',
    borderLeft: '1px solid #0808ffbcbcbd',
    hoverBackgroundColor: '#5ba8fa'
  },
  RecentSearchesDropdown: {
    padding: '11.5px 15px',
    borderRadius: '0px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    width: '175px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '47px',
    borderLeft: '0.5px outset #D9DBE9',
    placeholder: 'Everything'
  }
};

export const CustomDropdown = styled(Select)<{dropdownstyles : DropdownStyles}>`
  &&& {
    height: ${({ dropdownstyles }) => dropdownstyles.height || '47px'};
    font-family: ${({ dropdownstyles }) => dropdownstyles.fontFamily || 'Roboto'};
    font-weight: ${({ dropdownstyles }) => dropdownstyles.fontWeight || '500'};
    font-style: normal;
    padding: ${({ dropdownstyles }) => dropdownstyles.padding || '11.5px 15px'};
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
    width: ${({ dropdownstyles }) => dropdownstyles.width || '175px'};
    border-left: ${({ dropdownstyles }) => dropdownstyles.borderLeft || 'none'};
    cursor: pointer;
  };

    .MuiSelect-icon {
      color: #000;
    }

    .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover{
        background-color: #FFF;
    }

    .MuiOutlinedInput-notchedOutline:not(:hover) {
      border: none; 
    }

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
        padding: 0px;
    }
    &.Mui-focused {
    border: ${({ dropdownstyles }) => `1px solid ${dropdownstyles.focusBorderColor || 'none'}`};
    }

`;


export type DropdownStyles = {
    padding?: string;
    borderRadius?: string;
    display?: string;
    justifyContent ?: string;
    alignItems?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    height?: string;
    width?: string;
    paddingLeft?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    selectedBackgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    lineHeight?: string;
    flexShrink?: string;
    letterSpacing?: string;
    gap?: string;
    borderLeft?: string;
    focusBorderColor?: string;
    placeholder?: string;
  };

  export const StyledParagraph = styled.p`
    padding-left: 10px;
    
  `;