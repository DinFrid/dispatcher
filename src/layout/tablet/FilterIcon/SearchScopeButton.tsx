import React, { FC, useState } from 'react';
import { Menu, MenuItem, IconButton, useTheme } from '@mui/material';
import FiltersIconSVG from './FiltersIconSVG';
import { FiltersIconWrapper } from '../../FiltersBar/styles';
import { searchMenuOptions } from '../../../utils/consts/ConstsMenuItems';

export interface SearchScopeButtonProps {
    onSelect : (value : string) => void;
}


const SearchScopeButton: FC<SearchScopeButtonProps> = ({onSelect}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dropdownItems = searchMenuOptions;
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    handleClose();
  };

  return (
    <FiltersIconWrapper theme={theme}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <FiltersIconSVG />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdownItems.map((item) => (
          <MenuItem key={item.value} onClick={() => handleSelect(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </FiltersIconWrapper>
  );
};

export default SearchScopeButton;
