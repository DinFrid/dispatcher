import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { StyledMenuItem, StyledMenuItemProps } from '../StyledMenuItem/StyledMenuItem';
import { MenuItemTypeEnum } from '../../utils/Enums';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './styles';

export interface SearchBarProps{
  dropDownOptions : StyledMenuItemProps[];
  dropDownProps: StyledDropdownProps;
  onSearchInputClick: () => void;
}

const SearchBar = ({dropDownOptions,dropDownProps,onSearchInputClick} : SearchBarProps) => {

  return (
    <SearchBarCard>
      <SearchIconWrapper>
      <img src={SearchImg} alt="Search Icon" />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search' onClick={onSearchInputClick}/>
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