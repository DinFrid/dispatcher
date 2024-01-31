import React from 'react';
import { MenuItemProps } from '@mui/material';

export interface StyledMenuItemProps extends MenuItemProps {
    value: string;
    StyledComponent: React.ComponentType<MenuItemProps>;
  }

export const StyledMenuItem: React.FC<StyledMenuItemProps> = ({ StyledComponent, ...props }) => {
    return (
        <StyledComponent {...props}>
            {props.children}
        </StyledComponent>
    );
};
