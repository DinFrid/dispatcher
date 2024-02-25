import { IconButton, useTheme } from "@mui/material";
import { StyledMenuItem } from "../StyledMenuItem/StyledMenuItem";
import { MenuItemTypeEnum } from "../../utils/Enums";
import { CustomRecentSearches, CustomTypography, ItemWrapper, ItemsContainer, StyledClearButton, StyledRemoveIcon } from "./styles";

export interface RecentSearchesProps {
  options: string[];
  onRemove: (value: string) => void;
  onClear: () => void;
  onClick: (value : string) => void
}

export const RecentSearches: React.FC<RecentSearchesProps> = ({ options, onRemove,onClear,onClick, ...props }) => {
  const theme = useTheme();
  
  const handleItemClick = (option: string) => () => {
    onClick(option);
  };
  
  
  return (
    <CustomRecentSearches {...props} theme={theme}>
      <div style={{justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          paddingLeft: '16px'}}>

      <CustomTypography>RECENT SEARCHES</CustomTypography>
      <StyledClearButton onClick={onClear}>CLEAR</StyledClearButton>

      </div>
      <ItemsContainer>
        {options.map((option) => (
          <ItemWrapper key={option}>
            <StyledMenuItem onClick={handleItemClick(option)} label={option} menuItemType={MenuItemTypeEnum.RecentSearchesMenuItemType} value={option}>
            </StyledMenuItem>
            <IconButton onClick={() => onRemove(option)}>
              <StyledRemoveIcon width={9.222} height={9.222}/>
            </IconButton>
          </ItemWrapper>
        ))}
      </ItemsContainer>
    </CustomRecentSearches>
  );
};



