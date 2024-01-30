
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import { StyledMenuItemProps } from '../../Interfaces/Interfaces';

export const CustomStyledMenuItem = styled(MenuItem)`
&&& {
  background-color: #FFF;
  font-family: 'Mulish';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  flex-shrink: 0;
  letter-spacing: 0.1px;
  color: #5A5A89;
  height: 28px;
  width: 189px;
  flex-shrink: 0;
  padding-left: 23.94;

  &:hover {
      background-color: rgba(223, 224, 235, 0.41); /* hover state */
    }

    &.Mui-selected {
      background-color: rgba(223, 224, 235, 0.41); /* selected state */
    }
}
`;


export const StyledMenuItem: React.FC<StyledMenuItemProps> = (props) => {
    return <CustomStyledMenuItem 
    {...props} />;
  };
