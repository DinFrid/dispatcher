import React from 'react';
import { MenuItemProps } from '@mui/material';
import { CustomMenuItem, menuItemStyles } from './styles';
import { MenuItemType } from './types';

export interface StyledMenuItemProps extends MenuItemProps {
  value: string;
  menuItemType: keyof MenuItemType;
}

export const StyledMenuItem: React.FC<StyledMenuItemProps> = ({ menuItemType, ...props }) => {
    const styles = menuItemStyles[menuItemType]; 
    return (
        <CustomMenuItem menuitemstyles={styles} {...props}>
            {props.children}
        </CustomMenuItem>
    );
};
