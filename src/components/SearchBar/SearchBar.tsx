import { CardProps, useMediaQuery, useTheme } from '@mui/material';
import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './styles';

export interface SearchBarProps extends CardProps{
  dropDownProps: StyledDropdownProps;
  onSearchAction: (value : string) => void;
  onSearchInputFieldClick: () => void;
  onDropdownChange : (value : string) => void;
  isSearchBarVisible: boolean;
}

const SearchBar = ({dropDownProps, onSearchAction, onSearchInputFieldClick, onDropdownChange, onBlur} : SearchBarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {

      event.preventDefault();

      onSearchAction(event.currentTarget.value);
    }
  };

  const handleSearchScopeChange = (label: string, value: string) => {
    onDropdownChange(value);
  }

  return (
    <SearchBarCard onBlur={onBlur} theme={theme}>
      {!isMobile && 
        <SearchIconWrapper>
          <img src={SearchImg} alt="Search Icon" />
        </SearchIconWrapper>
      }
      <StyledInputBase 
        placeholder='Search'
        onClick={onSearchInputFieldClick}
        onKeyUp={handleKeyPress}
      />
        { !isMobile &&
        <StyledDropdown 
        label={'Search Dropdown'}
        MenuProps={recentSearchesMenuProps} 
        dropDownType={dropDownProps.dropDownType} 
        dropdownItems={dropDownProps.dropdownItems}
        onDropdownChange={handleSearchScopeChange}
        /> }

    </SearchBarCard>
  );
}

export default SearchBar