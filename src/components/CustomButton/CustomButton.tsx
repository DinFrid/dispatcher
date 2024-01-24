import React, { ReactNode } from 'react';
import Button, { ButtonProps as MuiButtonProps }from '@mui/material/Button';

export interface CustomButtonProps extends MuiButtonProps {
  styles?: React.CSSProperties;
  children?: ReactNode;
  endIcon?: ReactNode;
};

function CustomButton({styles , children,endIcon, ...restProps } : CustomButtonProps) {
   
  return (
    <Button 
      sx={styles}
      endIcon={endIcon}
      {...restProps}
    >
        {children}
    </Button>
  );
}

export default CustomButton;
