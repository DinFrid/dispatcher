import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import SearchImg from '../../images/SearchIcon.svg';
import StyledDropdown, { StyledDropdownProps } from '../StyledDropdown/StyledDropdown';
import { SearchBarCard, SearchIconWrapper, StyledInputBase, recentSearchesMenuProps } from './styles';

export interface SearchBarProps {
  dropDownProps: StyledDropdownProps;
  onSearchAction: (value: string) => void;
  onSearchInputFieldClick: () => void;
  onDropdownChange: (value: string) => void;
  onBlur?: () => void;
  valueChooseByRecentSearches?: string;
}

const SearchBar = ({
  dropDownProps,
  onSearchAction,
  onSearchInputFieldClick,
  onDropdownChange,
  onBlur,
  valueChooseByRecentSearches,
}: SearchBarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [inputValue, setInputValue] = useState(valueChooseByRecentSearches || '');  
  
  useEffect(() => {
    valueChooseByRecentSearches ? setInputValue(valueChooseByRecentSearches) : null
  },[valueChooseByRecentSearches])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearchAction(event.currentTarget.value);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchScopeChange = (label: string, value: string) => {
    onDropdownChange(value);
  };
  

  return (
    <SearchBarCard onBlur={onBlur} theme={theme}>
      {!isMobile && (
        <SearchIconWrapper>
          <img src={SearchImg} alt="Search Icon" />
        </SearchIconWrapper>
      )}
      <StyledInputBase
        placeholder='Search'
        onClick={onSearchInputFieldClick}
        onKeyUp={handleKeyPress}
        onChange={handleInputChange}
        value={inputValue}
      />
      {!isMobile && (
        <StyledDropdown
          label={'Search Dropdown'}
          MenuProps={recentSearchesMenuProps}
          dropDownType={dropDownProps.dropDownType}
          dropdownItems={dropDownProps.dropdownItems}
          onDropdownChange={handleSearchScopeChange}
        />
      )}
    </SearchBarCard>
  );
};

export default SearchBar;
