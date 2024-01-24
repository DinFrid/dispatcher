import React, { ReactNode } from 'react';
import Button, { ButtonProps as MuiButtonProps }from '@mui/material/Button';

export interface CustomButtonProps extends MuiButtonProps {
  styles?: React.CSSProperties;
  children?: ReactNode;
};

function CustomButton({styles , children, ...restProps } : CustomButtonProps) {
   
  return (
    <Button 
      sx={styles}
      {...restProps}
    >
        {children}
    </Button>
  );
}

export default CustomButton;
