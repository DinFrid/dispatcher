import { useRef, useState } from 'react';
import { DropdownTypeEnum } from '../../utils/Enums';
import SearchBar from '../SearchBar/SearchBar';
import { RecentSearches } from '../RecentSearches/RecentSearches';
import useOutsideClick from './useOutsideClick';
import { DropdownItem } from '../StyledDropdown/types';
import { searchMenuOptions } from './consts';

export interface SearchComponentProps {
    onRemove : (value : string) => void;
    onClear : () => void;
    onSearchAction : (value : string) => void;
    onDropdownChange : (value : string, label : string) => void;
    recentSearches : DropdownItem[];
}

const SearchComponent = ({onRemove, onClear, onSearchAction, onDropdownChange, recentSearches} : SearchComponentProps) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = useState(false);
    const recentSearchesRef = useRef(null);

    useOutsideClick(recentSearchesRef, () => {
        if (recentSearchesOpen) {
            setRecentSearchesOpen(false);
        }
    });

    const handleSearchInputFieldClick = () => {
        setRecentSearchesOpen(true); 
    };
    
    const dropDownProps = {dropDownType : DropdownTypeEnum.SearchBarDropdown,
         dropdownItems : searchMenuOptions}

    return (
        <div ref={recentSearchesRef} style={{marginLeft: 'calc(12.5% - 78px)'}}>
            <SearchBar
            dropDownProps={dropDownProps}
            onSearchInputFieldClick={handleSearchInputFieldClick} 
            onSearchAction={onSearchAction}
            onDropdownChange={onDropdownChange}
            />
            {recentSearchesOpen && 
                <RecentSearches 
                    onRemove={onRemove} 
                    onClear={onClear} 
                    options={recentSearches}
                />
            }
        </div>
    );
};

export default SearchComponent;
