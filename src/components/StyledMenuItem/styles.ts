import { MenuItem } from "@mui/material";
import styled from "styled-components";
import { MenuItemStyles, MenuItemType } from "./types";

export const CustomMenuItem = styled(MenuItem)<{ menuitemstyles: MenuItemStyles }>`
&&& {
  font-family: ${({ menuitemstyles }) => menuitemstyles.fontFamily || 'Roboto'};
  font-size: ${({ menuitemstyles }) => menuitemstyles.fontSize || '12px'};
  color: ${({ menuitemstyles }) => menuitemstyles.color || '#5A5A89'};
  height: ${({ menuitemstyles }) => menuitemstyles.height || '28px'};
  width: ${({ menuitemstyles }) => menuitemstyles.width || '175px'};
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

export const menuItemStyles: MenuItemType = {
  FiltersMenuItem: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: '#5A5A89',
    height: '28px',
    width: '175px',
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
      hoverBackgroundColor: 'rgba(223, 224, 235, 0.41)',
  }
};