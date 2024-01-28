
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import { StyledMenuItemProps } from '../../Interfaces/Interfaces';

export const CustomStyledMenuItem = styled(MenuItem)`
  background-color: #FFF;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  width: 189px;
  height: 28px;
  flex-shrink: 0;
  letter-spacing: 0.1px;
  &:hover {
    background-color: #5A5A89;
  }
`;


export const StyledMenuItem: React.FC<StyledMenuItemProps> = (props) => {
    return <CustomStyledMenuItem 
    {...props} />;
  };
