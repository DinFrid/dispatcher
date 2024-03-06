import { IconButton, Select } from "@mui/material";
import styled from "styled-components";
import { DropdownStyles, DropdownType } from "./types";

export const dropDownStyles: DropdownType = {
  FiltersDropdown: {
    padding: '11.5px 5px',
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
    padding: '1px',
    borderRadius: '0px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    maxWidth: '160px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    borderLeft: '0.5px outset #D9DBE9',
    placeholder: 'Top Headlines',
    iconPadding: '21.5px 21.5px 21.5px 16px'
  },
  SearchBarDropdown: {
    padding: '1px',
    borderRadius: '0px',
    backgroundColor: '#FFF',
    color: '#5A5A89',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0.25px',
    display: 'flex',
    maxWidth: '160px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    borderLeft: '0.5px outset #D9DBE9',
    placeholder: 'Top Headlines',
    iconPadding: '21.5px 21.5px 21.5px 16px'
  },
  DateDropdown: {
    
  }
};

export const CustomDropdown = styled(Select)<{dropdownstyles : DropdownStyles; disabled?: boolean}>`
  &&& {
    height: ${({ dropdownstyles }) => dropdownstyles.height || '47px'};
    font-family: ${({ dropdownstyles }) => dropdownstyles.fontFamily || 'Roboto'};
    font-weight: ${({ dropdownstyles }) => dropdownstyles.fontWeight || '500'};
    font-style: normal;
    padding: ${({ dropdownstyles }) => dropdownstyles.padding || '11.5px 5px'};
    border-radius: ${({ dropdownstyles }) => dropdownstyles.borderRadius || '10px'};
    background-color: ${({ dropdownstyles, disabled }) => disabled ? '#E3E3E3' : dropdownstyles.backgroundColor || '#FFF'};
    color: ${({ dropdownstyles, disabled }) => disabled ? '#808080' : dropdownstyles.color || '#5A5A89'};
    font-size: ${({ dropdownstyles }) => dropdownstyles.fontSize || '14px'};
    font-style: ${({ dropdownstyles }) => dropdownstyles.fontStyle || 'normal'};
    line-height: ${({ dropdownstyles }) => dropdownstyles.lineHeight || '22px'};
    letter-spacing: ${({ dropdownstyles }) => dropdownstyles.letterSpacing || '0.25px'};
    display: ${({ dropdownstyles }) => dropdownstyles.display || 'flex'};
    justify-content: ${({ dropdownstyles }) => dropdownstyles.justifyContent || 'space-between'};
    align-items: ${({ dropdownstyles }) => dropdownstyles.alignItems || 'center'};
    max-width: ${({ dropdownstyles }) => dropdownstyles.maxWidth || '175px'};
    width: ${({ dropdownstyles }) => dropdownstyles.width || 'none'};
    border-left: ${({ dropdownstyles }) => dropdownstyles.borderLeft || 'none'};
    cursor: ${({ disabled }) => (disabled ? 'normal' : 'pointer')};

    ${({ theme }) => theme.breakpoints.between('xs','md')} {
        height: 44px;
        font-size: 16px;
        max-width: none;
    }
  };

    .MuiSelect-icon {
      
    }

    .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover{
        background-color: transparent;
    }

    .css-78trlr-MuiButtonBase-root-MuiIconButton-root{
      color : ${({ disabled}) => disabled ? 'transparent' : 'rgba(0, 0, 0, 0.54)'};

    }

    .MuiPaper-root .MuiPaper-elevation .MuiPaper-rounded .MuiPaper-elevation8 .MuiPopover-paper .MuiMenu-paper .MuiMenu-paper .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper{
      width: 150px;
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

  export const StyledParagraph = styled.p`
    padding-left: 10px;
    
  `;

  export const menuScrollerStyles = {
    '::-webkit-scrollbar': {
      width: '3px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#5A5A89',
      borderRadius: '6px',

    },
  }

  export const paperPropsStyles = {
    marginTop: '6px',
    minWidth: '175px',
    paddingLeft: '0px',
    height: '120px',
    boxShadow: '0px 4px 12px 0px #00000014'
  };

  export const mobilePaperPropsStyles = {
    marginTop: '6px',
    minWidth: '150px',
    paddingLeft: '0px',
    height: '120px',
    boxShadow: '0px 4px 12px 0px #00000014'
  };

  export const StyledIconButton = styled(IconButton)<{disabled : boolean, styles : DropdownStyles}>`
    &&{
    cursor : ${({ disabled }) => disabled ? 'default' : 'pointer'};
    padding : ${({ styles}) => styles.iconPadding || '8px'};
    }
  `;