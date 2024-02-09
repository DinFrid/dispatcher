import { FormControl, IconButton, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import { CustomDropdown, DropdownStyles, dropDownStyles } from './DropdownStyles';
import { useState } from 'react';

export interface StyledDropdownProps extends SelectProps {
  label?: string;
  dropDownType: keyof DropdownType;
}

export type DropdownType = {
  FiltersDropdown: DropdownStyles;
  RecentSearchesDropdown: DropdownStyles;
};


export const StyledDropdown: React.FC<StyledDropdownProps> = ({
  dropDownType,
  label,
  onChange,
  children,
  ...props }) => {

  const [value, setValue] = useState<string>('');
  const styles = dropDownStyles[dropDownType];
  const [open, setOpen] = useState(false);
  const placeholder = label ? label : styles.placeholder;
  
  const handleValueChange = (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
    const newValue = event.target.value as string; 
    setValue(newValue); 
    setOpen(false);
  
    if (onChange) {
      onChange(event,child); 
    }
  };

  const handleOpen = () => {
    setOpen(true); 
  };
  
  const DropdownIconButton = () => (
    <IconButton  onClick={handleOpen} >
      <img src={DropdownArrow} alt="Dropdown Arrow" />
    </IconButton>
  );

  return (
    <FormControl>
      <Select
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={handleValueChange}
        displayEmpty
        input={<CustomDropdown dropdownstyles={styles} />}
        IconComponent={DropdownIconButton}
        renderValue={(selected) => selected === '' ? <p>{placeholder}</p> : <p>{selected as string}</p>}
        sx={{
          "&:hover": {
            "&& fieldset": {
              border: `1px solid ${styles.hoverBackgroundColor || 'none'}`
            }
          },
          
        }}
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: '6px',
              minWidth: '175px',
              paddingLeft: '0px',
              height: '120px',
              boxShadow: '0px 4px 12px 0px #00000014',

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
              
            },
          },
        }}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default StyledDropdown;