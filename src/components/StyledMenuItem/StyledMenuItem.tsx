import React from 'react';
import { MenuItem, MenuItemProps } from '@mui/material';
import styled from 'styled-components';

export interface StyledMenuItemProps extends MenuItemProps {
  value: string;
  menuItemType: keyof MenuItemType;
}

type MenuItemStyles = {
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    height?: string;
    width?: string;
    paddingLeft?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    selectedBackgroundColor?: string;
    fontStyle?: string;
    fontWeight?: string;
    lineHeight?: string;
    flexShrink?: string;
    letterSpacing?: string;
};

type MenuItemType = {
    FiltersMenuItem: MenuItemStyles;
    RecentSearchesMenuItem: MenuItemStyles;
};

const menuItemStyles: MenuItemType = {
    FiltersMenuItem: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      color: '#5A5A89',
      height: '28px',
      width: '189px',
      paddingLeft: '23.94px',
      backgroundColor: '#FFF',
      hoverBackgroundColor: 'rgba(223, 224, 235, 0.41)',
      selectedBackgroundColor: 'rgba(223, 224, 235, 0.41)',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px',
      flexShrink: '0',
      letterSpacing: '0.1px'
    },
    RecentSearchesMenuItem: {
        width: '638px',
        height: '13px',
        flexShrink: '0',
        color: '#5A5A89',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px', 
        letterSpacing: '0.1px',
        hoverBackgroundColor: '#FFF',
    }
};

const CustomMenuItem = styled(MenuItem)<{ menuitemstyles: MenuItemStyles }>`
  &&& {
    font-family: ${({ menuitemstyles }) => menuitemstyles.fontFamily || 'Roboto'};
    font-size: ${({ menuitemstyles }) => menuitemstyles.fontSize || '12px'};
    color: ${({ menuitemstyles }) => menuitemstyles.color || '#5A5A89'};
    height: ${({ menuitemstyles }) => menuitemstyles.height || '28px'};
    width: ${({ menuitemstyles }) => menuitemstyles.width || '189px'};
    padding-left: ${({ menuitemstyles }) => menuitemstyles.paddingLeft || '23.94px'};
    background-color: ${({ menuitemstyles }) => menuitemstyles.backgroundColor || '#FFF'};

    &:hover {
      background-color: ${({ menuitemstyles }) => menuitemstyles.hoverBackgroundColor || 'rgba(223, 224, 235, 0.41)'};
    }

    &.Mui-selected {
      background-color: ${({ menuitemstyles }) => menuitemstyles.selectedBackgroundColor || 'inherit'};
    }
  }
`;


export const StyledMenuItem: React.FC<StyledMenuItemProps> = ({ menuItemType, ...props }) => {
    const styles = menuItemStyles[menuItemType]; 
    return (
        <CustomMenuItem menuitemstyles={styles} {...props}>
            {props.children}
        </CustomMenuItem>
    );
};
