import { FormControl, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import { CustomDropdown, StyledInputLabel, dropDownStyles } from './DropdownStyles';

export interface StyledDropdownProps extends SelectProps {
  label?: string;
  dropDownType: keyof DropdownType;
}

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
  boxShadow?: string;
};

export type DropdownType = {
  FiltersDropdown: DropdownStyles;
  RecentSearchesDropdown: DropdownStyles;
};

const DropdownIcon = () => (
  <img src={DropdownArrow} alt="Dropdown Arrow" />
);

export const StyledDropdown: React.FC<StyledDropdownProps> = ({dropDownType, label,onChange, ...props }) => {
  const styles = dropDownStyles[dropDownType]; 

  return (
    <FormControl>
      <StyledInputLabel >{label}</StyledInputLabel>

      <CustomDropdown 
      dropdownstyles={styles}
      IconComponent={DropdownIcon}
      MenuProps={{
        PaperProps: {
          style: {
            marginTop: '6px',
            minWidth: '189px', 
            marginLeft: '0px',
            height: '120px',  
          },
          sx: {
            '::-webkit-scrollbar': {
              width: '3px',
            },
            '::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '6px',
            },
          }
        },
      }} 
      {...props}>
        {props.children}

      </CustomDropdown>
      </FormControl>
  );
}

export default StyledDropdown;
