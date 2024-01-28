import { FormControl, Select } from '@mui/material';
import { DropdownProps } from '../../Interfaces/Interfaces';

function CustomDropdown({ styles, menuItems, ...restProps }: DropdownProps) {

  return (
    <FormControl sx={styles}>
      <Select
        {...restProps}
      >
      </Select>
    </FormControl>
  );
}

export default CustomDropdown;
