import { FormControl, Select, SelectChangeEvent, SelectProps, useTheme } from '@mui/material';
import { CustomDropdown, StyledIconButton, StyledParagraph, dropDownStyles, menuScrollerStyles, mobilePaperPropsStyles, paperPropsStyles } from './styles';
import { useState } from 'react';
import { DropdownItem, DropdownType } from './types';
import { StyledMenuItem } from '../StyledMenuItem/StyledMenuItem';
import { DropdownTypeToMenuItemTypeConverter, MenuItemTypeEnum } from '../../utils/Enums';
import { getPlaceholders, getSelectedLabel } from './functions';
import DropdownArrowIcon from '../../images/DropdownArrowIcon';


export interface StyledDropdownProps extends SelectProps {
  label: string;
  dropDownType: keyof DropdownType;
  dropdownItems?: DropdownItem[];
  onDropdownChange ?: (label : string, value : string) => void;
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
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm');

  const handleValueChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string; 
    setValue(newValue); 
    setOpen(false);

    if (onDropdownChange) {
      onDropdownChange(placeholder as string,newValue.toLowerCase());
    }
  };

  const handleOpen = () => {
    !props.disabled && setOpen(true);
  };

  const DropdownIconButton = () => (
    <StyledIconButton disabled={props.disabled ?? false} styles={styles} onClick={handleOpen}>
      <DropdownArrowIcon color={props.disabled ? '#808080' : '#5A5A89'}/>
    </StyledIconButton>
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
        input={<CustomDropdown theme={theme} dropdownstyles={styles} disabled={props.disabled}/>}
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
            style: isMobile ? mobilePaperPropsStyles : paperPropsStyles,
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