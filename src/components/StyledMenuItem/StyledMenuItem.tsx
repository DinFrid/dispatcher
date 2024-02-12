import React from 'react';
import { MenuItemProps } from '@mui/material';
import { CustomMenuItem, menuItemStyles } from './styles';
import { MenuItemType } from './types';

export interface StyledMenuItemProps extends MenuItemProps {
  value: string;
  menuItemType: keyof MenuItemType;
  label: string;
}

export const StyledMenuItem: React.FC<StyledMenuItemProps> = ({ menuItemType,label,value, ...props }) => {
    const styles = menuItemStyles[menuItemType]; 
    return (
        <CustomMenuItem menuitemstyles={styles} value={value} {...props}>
            {label || props.children}
        </CustomMenuItem>
    );
};
