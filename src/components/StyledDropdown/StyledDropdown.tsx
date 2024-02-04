import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import styled from 'styled-components';

export interface StyledDropdownProps extends SelectProps {
  label?: string;
  dropDownType: keyof DropdownType;
}

type DropdownStyles = {
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
  boxShadow?: string;
};

export type DropdownType = {
  FiltersDropdown: DropdownStyles;
  RecentSearchesDropdown: DropdownStyles;
};

const dropDownStyles: DropdownType = {
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

const CustomDropdown = styled(Select)<{dropdownstyles : DropdownStyles}>`
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

const DropdownIcon = () => (
  <img src={DropdownArrow} alt="Dropdown Arrow" />
);

export const StyledDropdown: React.FC<StyledDropdownProps> = ({MenuProps,dropDownType, label,onChange, ...props }) => {
  const styles = dropDownStyles[dropDownType]; 

  return (
    <FormControl>
      <InputLabel shrink={false}>{label}</InputLabel>

      <CustomDropdown 
      dropdownstyles={styles}
      IconComponent={DropdownIcon}
      MenuProps={MenuProps} 
      {...props}>
        {props.children}

      </CustomDropdown>
      </FormControl>
  );
}

export default StyledDropdown;
