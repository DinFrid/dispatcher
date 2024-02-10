import { IconButton } from "@mui/material";
import { StyledMenuItem, StyledMenuItemProps } from "../StyledMenuItem/StyledMenuItem";
import { MenuItemTypeEnum } from "../../utils/Enums";
import { CustomRecentSearches, CustomTypography, StyledClearButton, StyledRemoveIcon } from "./RecentSearchesStyles";

export interface RecentSearchesProps {
  options: StyledMenuItemProps[];
  onRemove: (value: string) => void;
  onClear: () => void;
}

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
          <IconButton onClick={() => onRemove(option.value)}>
            <StyledRemoveIcon width={9.222} height={9.222}/>
          </IconButton>
        </div>
      ))}
    </CustomRecentSearches>
  );
};



