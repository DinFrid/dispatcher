
import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { StyledMenuItem, StyledMenuItemProps } from '../StyledMenuItem/StyledMenuItem';
import { MenuItemTypeEnum } from '../../utils/Enums';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './SearchBarStyles';

export interface SearchBarProps {
  dropDownOptions : StyledMenuItemProps[];
  dropDownProps: StyledDropdownProps;
}

const SearchBar = ({dropDownOptions,dropDownProps, ...props} : SearchBarProps) => {

  return (
    <SearchBarCard>
      <SearchIconWrapper>
      <img src={SearchImg} alt="Search Icon" />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search' />
      <StyledDropdown MenuProps={recentSearchesMenuProps} {...dropDownProps}>
        {dropDownOptions.map((option) => (
          <StyledMenuItem key={option.value} menuItemType={MenuItemTypeEnum.FiltersMenuItem} value={option.value}>
            {option.children}
          </StyledMenuItem>
        ))}
      </StyledDropdown>
    </SearchBarCard>
  );
}

export default SearchBar