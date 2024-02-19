import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './styles';

export interface SearchBarProps{
  dropDownProps: StyledDropdownProps;
  onSearchAction: (value : string) => void;
  onSearchInputFieldClick: () => void;
  onDropdownChange : (value : string, label : string) => void;
}

const SearchBar = ({dropDownProps, onSearchAction, onSearchInputFieldClick, onDropdownChange} : SearchBarProps) => {

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {

      event.preventDefault();

      onSearchAction(event.currentTarget.value);
    }
  };

  return (
    <SearchBarCard>
      <SearchIconWrapper>
      <img src={SearchImg} alt="Search Icon" />
      </SearchIconWrapper>
      <StyledInputBase 
        placeholder='Search'
        onClick={onSearchInputFieldClick}
        onKeyUp={handleKeyPress}
      />
      <StyledDropdown 
      MenuProps={recentSearchesMenuProps} 
      dropDownType={dropDownProps.dropDownType} 
      dropdownItems={dropDownProps.dropdownItems}
      onDropdownChange={onDropdownChange}
      />
    </SearchBarCard>
  );
}

export default SearchBar