import { IconButton } from "@mui/material";
import { StyledMenuItem } from "../StyledMenuItem/StyledMenuItem";
import { MenuItemTypeEnum } from "../../utils/Enums";
import { CustomRecentSearches, CustomTypography, ItemsContainer, StyledClearButton, StyledRemoveIcon } from "./styles";

export interface RecentSearchesProps {
  options: string[];
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
      <ItemsContainer>
        {options.map((option) => (
          <div key={option} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '4.31px'
          }}>
            <StyledMenuItem label={option} menuItemType={MenuItemTypeEnum.RecentSearchesMenuItemType} value={option}>
            </StyledMenuItem>
            <IconButton onClick={() => onRemove(option)}>
              <StyledRemoveIcon width={9.222} height={9.222}/>
            </IconButton>
          </div>
        ))}
      </ItemsContainer>
    </CustomRecentSearches>
  );
};



