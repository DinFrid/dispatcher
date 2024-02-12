import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './styles';

export interface SearchBarProps{
  dropDownProps: StyledDropdownProps;
  onSearchInputClick: () => void;
}

const SearchBar = ({dropDownProps,onSearchInputClick} : SearchBarProps) => {

  return (
    <SearchBarCard>
      <SearchIconWrapper>
      <img src={SearchImg} alt="Search Icon" />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search' onClick={onSearchInputClick}/>
      <StyledDropdown MenuProps={recentSearchesMenuProps} dropDownType={dropDownProps.dropDownType} dropdownItems={dropDownProps.dropdownItems}/>
    </SearchBarCard>
  );
}

export default SearchBar