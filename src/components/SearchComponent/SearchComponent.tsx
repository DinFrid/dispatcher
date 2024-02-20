import { useEffect, useRef, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { RecentSearches } from '../RecentSearches/RecentSearches';
import useOutsideClick from './useOutsideClick';
import { searchBarDropDownProps } from '../../utils/consts/FiltersGroups';
import { LOCAL_STORAGE_RECENT_SEARCHES_KEY } from '../RecentSearches/consts';
import { checkIfRecentSearchesExceeds, checkIfValueIsNotEmpty, clearRecentSearchesFromLocalStorage, fetchRecentSearchesFromLocalStorage, removeDuplicatedValues, removeValueFromRecentSearchesArrayAndReturnUpdated, truncateRecentSearches } from './functions';

export interface SearchComponentProps {
    onSearchAction : (value : string) => void;
    onDropdownChange : (value : string, label : string) => void;
}

const SearchComponent = ({ onSearchAction, onDropdownChange} : SearchComponentProps) => {
    const [recentSearchesOpen, setRecentSearchesOpen] = useState(false);
    const recentSearchesRef = useRef(null);
    const [recentSearchesHistory, setRecentSearchesHistory] = useState(new Array<string>);

    useEffect(() => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        updateAndInsertRecentSearchesToLocalStorage(currentRecentSearches);
    },[]);

    const updateAndInsertRecentSearchesToLocalStorage = (updatedRecentSearches : Array<string>) => {
        setRecentSearchesHistory(updatedRecentSearches);
        localStorage.setItem(LOCAL_STORAGE_RECENT_SEARCHES_KEY, JSON.stringify(updatedRecentSearches));
    }

    const handleSearchAction = (value : string) => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        const updatedRecentSearches = removeDuplicatedValues(value, currentRecentSearches);

        if(checkIfValueIsNotEmpty(value)) {
            setRecentSearchesOpen(false);
            onSearchAction(value);
            return;
        }

        if (checkIfRecentSearchesExceeds(updatedRecentSearches)) {
            truncateRecentSearches(updatedRecentSearches);
        }

        updateAndInsertRecentSearchesToLocalStorage(updatedRecentSearches);
        
        setRecentSearchesOpen(false);
        onSearchAction(value);
    }

    useOutsideClick(recentSearchesRef, () => {
        if (recentSearchesOpen) {
            setRecentSearchesOpen(false);
        }
    });

    const handleSearchInputFieldClick = () => {
        setRecentSearchesOpen(true); 
    };

    const handleRemoveButtonClicked = (value : string) => {
        const currentRecentSearches = fetchRecentSearchesFromLocalStorage();
        const updatedRecentSearches = removeValueFromRecentSearchesArrayAndReturnUpdated(value, currentRecentSearches);

        updateAndInsertRecentSearchesToLocalStorage(updatedRecentSearches);
    }

    const handleClearButtonClicked = () => {
        clearRecentSearchesFromLocalStorage();
        updateAndInsertRecentSearchesToLocalStorage([]);
    }
    
    return (
        <div ref={recentSearchesRef} style={{marginLeft: 'calc(12.5% - 78px)'}}>
            <SearchBar
            dropDownProps={searchBarDropDownProps}
            onSearchInputFieldClick={handleSearchInputFieldClick} 
            onSearchAction={handleSearchAction}
            onDropdownChange={onDropdownChange}
            />
            {recentSearchesOpen && 
                <RecentSearches onClick={handleSearchAction}
                    onRemove={handleRemoveButtonClicked} 
                    onClear={handleClearButtonClicked} 
                    options={recentSearchesHistory}
                />
            }
        </div>
    );
};

export default SearchComponent;
