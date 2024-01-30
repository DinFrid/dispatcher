import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { MenuItemProps, SelectProps } from "@mui/material";

export interface StyledButtonProps extends MuiButtonProps {
    
  };

  export interface StyledDropdownProps extends SelectProps {
    styles?: React.CSSProperties;
    label: string;
    selectedOption?: string;
  }

  export interface StyledMenuItemProps extends MenuItemProps {
    height?: string;
    width?: string;
    value: string;
  }

  export interface StyledLabelProps {
    image?: string;
    label : string;
  }