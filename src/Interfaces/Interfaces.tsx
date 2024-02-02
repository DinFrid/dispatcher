import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { SelectProps } from "@mui/material";
import {StyledMenuItemProps} from '../components/StyledMenuItem/StyledMenuItem';

export interface StyledButtonProps extends MuiButtonProps {
    
  };

  export interface StyledDropdownProps extends SelectProps {
    styles?: React.CSSProperties;
    label?: string;
    type: string;
  }

  export interface RecentSearchesProps {
    options: StyledMenuItemProps[];
    onRemove?: (value: string) => void;
    onClear?: () => void;
    removeIcon ?: React.ReactElement;
  }

  export interface RemoveIconProps {
    width: number;
    height: number;
  }