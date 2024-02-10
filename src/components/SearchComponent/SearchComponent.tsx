import { useState } from 'react';
import { MenuItemTypeEnum, DropdownTypeEnum } from '../../utils/Enums';
import { SelectChangeEvent } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { RecentSearches, RecentSearchesProps } from '../RecentSearches/RecentSearches';

export interface SearchComponentProps {
    recentSearchesProps: RecentSearchesProps;
}

const searchMenuOptions = [
  {value: "Everything", menuItemType: MenuItemTypeEnum.FiltersMenuItem, children: "Everything"},
  {value: "Top Headlines", menuItemType: MenuItemTypeEnum.FiltersMenuItem, children: "Top Headlines"}
];


const SearchComponent = ({recentSearchesProps} : SearchComponentProps) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = useState(false);

    const handleDropdownChange = (event: SelectChangeEvent<unknown>) => {
        console.log("Selected value:", event.target.value);
        setRecentSearchesOpen(false);
    };

    const handleSearchInputClick = () => {
        setRecentSearchesOpen(true); 
        console.log("Recent searches state opened");
    };

    const dropDownProps = {dropDownType : DropdownTypeEnum.RecentSearchesDropdown,
        onChange : handleDropdownChange}

    return (
        <div>
            <SearchBar
            dropDownProps={dropDownProps}
            dropDownOptions={searchMenuOptions}
            onSearchInputClick={handleSearchInputClick} 
            />
            {recentSearchesOpen && <RecentSearches {...recentSearchesProps}></RecentSearches>}
        </div>
    );
};

export default SearchComponent;
