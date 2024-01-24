
import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

type CustomButtonProps = {
  styles?: React.CSSProperties;
  children?: ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({ styles, children, ...restProps }) => {
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
