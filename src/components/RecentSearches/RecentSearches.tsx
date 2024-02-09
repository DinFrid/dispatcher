import { Button, Card, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { StyledMenuItem, StyledMenuItemProps } from "../StyledMenuItem/StyledMenuItem";
import RemoveIcon from '../../images/RemoveIcon';
import { MenuItemTypeEnum } from "../../utils/Enums";

export interface RecentSearchesProps {
  options: StyledMenuItemProps[];
  onRemove?: (value: string) => void;
  onClear?: () => void;
  removeIcon ?: React.ReactElement;
}


const CustomRecentSearches = styled(Card)`
  && {
    width: 663px;
    height: 132px;
    flex-shrink: 0;
    border-radius: 10px;
    background:  #FFF;
    box-shadow: 0px 4px 12px 0px #00000014;

  }
`;

const CustomTypography = styled(Typography)`
  && {
    color: #5A5A89;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    height: 14.68px;
    
  }
`;

const StyledClearButton = styled(Button)`
  && {
    color: #5A5A89;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; 
    padding: 15.5px,14px,0,0;
    display: flex;
    width: 41.669px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;


const StyledRemoveIcon = styled(RemoveIcon)`
    flex-shrink: 0;
    fill-rule: rgba(90, 90, 137, 0.50);
`;

export const RecentSearches: React.FC<RecentSearchesProps> = ({ options, onRemove,onClear, ...props }) => {
  return (
    <CustomRecentSearches {...props}>
      <div style={{justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          paddingLeft: '16px'}}>

      <CustomTypography>RECENT SEARCHES</CustomTypography>
      <StyledClearButton onClick={onClear}>CLEAR</StyledClearButton>

      </div>
      {options.map((option) => (
        <div key={option.value} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '4.31px'
        }}>
          <StyledMenuItem menuItemType={MenuItemTypeEnum.RecentSearchesMenuItem} value={option.value}>
            {option.children}
          </StyledMenuItem>
          <IconButton onClick={() => onRemove && onRemove(option.value)}>
            <StyledRemoveIcon width={9.222} height={9.222}/>
          </IconButton>
        </div>
      ))}
    </CustomRecentSearches>
  );
};



