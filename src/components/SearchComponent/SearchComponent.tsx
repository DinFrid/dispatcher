import { useRef, useState } from 'react';
import { MenuItemTypeEnum, DropdownTypeEnum } from '../../utils/Enums';
import { SelectChangeEvent } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { RecentSearches, RecentSearchesProps } from '../RecentSearches/RecentSearches';
import useOutsideClick from './useOutsideClick';

export interface SearchComponentProps {
    recentSearchesProps: RecentSearchesProps;
}

const searchMenuOptions = [ //TODO: change menuItem types
  {value: "Everything", menuItemType: MenuItemTypeEnum.FiltersMenuItem, children: "Everything"},
  {value: "Top Headlines", menuItemType: MenuItemTypeEnum.FiltersMenuItem, children: "Top Headlines"} 
];

const SearchComponent = ({recentSearchesProps} : SearchComponentProps) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = useState(false);
    const recentSearchesRef = useRef(null);

    useOutsideClick(recentSearchesRef, () => {
        if (recentSearchesOpen) {
            setRecentSearchesOpen(false);
        }
    });

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
        <div ref={recentSearchesRef}>
            <SearchBar

            dropDownProps={dropDownProps}
            dropDownOptions={searchMenuOptions}//TODO: change to menuItems
            onSearchInputClick={handleSearchInputClick} 
            />
            {recentSearchesOpen && <RecentSearches {...recentSearchesProps}></RecentSearches>}
        </div>
    );
};

export default SearchComponent;
