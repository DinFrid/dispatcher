import { FormControl, IconButton, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import { CustomDropdown, DropdownStyles, StyledParagraph, dropDownStyles } from './DropdownStyles';
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
  const [open, setOpen] = useState(false);
  const styles = dropDownStyles[dropDownType];
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
    <IconButton style={{padding: `${styles.iconPadding || '8px'}`}} onClick={handleOpen}  >
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
        renderValue={(selected) => selected === '' ? <StyledParagraph>{placeholder}</StyledParagraph> 
        : <StyledParagraph>{selected as string}</StyledParagraph>}
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
                backgroundColor: '#5A5A89',
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