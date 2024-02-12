import { FormControl, IconButton, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import { CustomDropdown, StyledParagraph, dropDownStyles, menuScrollerStyles, paperPropsStyles } from './styles';
import { useState } from 'react';
import { DropdownItem, DropdownType } from './types';
import { StyledMenuItem } from '../StyledMenuItem/StyledMenuItem';
import { DropdownTypeToMenuItemTypeConverter } from '../../utils/Enums';


export interface StyledDropdownProps extends SelectProps {
  label?: string;
  dropDownType: keyof DropdownType;
  dropdownItems?: DropdownItem[];
}

export const StyledDropdown: React.FC<StyledDropdownProps> = ({
  dropDownType,
  label,
  onChange,
  dropdownItems,
  ...props }) => {

  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);
  const styles = dropDownStyles[dropDownType];
  const menuItemType = DropdownTypeToMenuItemTypeConverter[dropDownType];
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
    <IconButton style={{padding: `${styles.iconPadding || '8px'}`}} onClick={handleOpen}   >
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
            style: paperPropsStyles,
            sx: menuScrollerStyles,
          },
        }}
        {...props}
      >
        {dropdownItems && dropdownItems.map((dropdownItem) => {
          return <StyledMenuItem key={dropdownItem.value} value={dropdownItem.value} menuItemType={menuItemType} label={dropdownItem.label}> </StyledMenuItem>
        })}
        
      </Select>
    </FormControl>
  );
};

export default StyledDropdown;