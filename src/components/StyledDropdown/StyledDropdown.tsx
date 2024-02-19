import { FormControl, IconButton, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import DropdownArrow from '../../images/dropdown.svg';
import { CustomDropdown, StyledParagraph, dropDownStyles, menuScrollerStyles, paperPropsStyles } from './styles';
import { useState } from 'react';
import { DropdownItem, DropdownType } from './types';
import { StyledMenuItem } from '../StyledMenuItem/StyledMenuItem';
import { DropdownTypeToMenuItemTypeConverter, MenuItemTypeEnum } from '../../utils/Enums';
import { getPlaceholders, getSelectedLabel } from './functions';


export interface StyledDropdownProps extends SelectProps {
  label: string;
  dropDownType: keyof DropdownType;
  dropdownItems?: DropdownItem[];
  onDropdownChange ?: (value : string, label : string) => void;
}

export const StyledDropdown: React.FC<StyledDropdownProps> = ({
  dropDownType,
  label,
  onDropdownChange,
  dropdownItems = [], 
  ...props }) => {

  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);
  const styles = dropDownStyles[dropDownType];
  const menuItemType = DropdownTypeToMenuItemTypeConverter[dropDownType];
  const placeholder = getPlaceholders(dropDownType,styles,label);

  const handleValueChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string; 
    setValue(newValue); 
    setOpen(false);

    if (onDropdownChange) {
      onDropdownChange(newValue, placeholder as string);
    }
  };

  const handleOpen = () => {
    !props.disabled && setOpen(true);
  };

  const DropdownIconButton = () => (
    !props.disabled && <IconButton style={{padding: `${styles.iconPadding || '8px'}`}} onClick={handleOpen}>
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
        renderValue={(selected) => <StyledParagraph>{getSelectedLabel(selected as string,placeholder,dropdownItems)}</StyledParagraph>}
        sx={{
          "&:hover": {
            "&& fieldset": {
              border: `1px solid ${!props.disabled && styles.hoverBackgroundColor || 'none'}`
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

        {dropDownType !== 'SearchBarDropdown' && (
          <StyledMenuItem key="none" value="none" menuItemType={MenuItemTypeEnum.NoneItemType} label="None">(None)</StyledMenuItem>
        )}

        {dropdownItems.map((dropdownItem) => (
          <StyledMenuItem key={dropdownItem.value} value={dropdownItem.value} menuItemType={menuItemType} label={dropdownItem.label}></StyledMenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StyledDropdown;